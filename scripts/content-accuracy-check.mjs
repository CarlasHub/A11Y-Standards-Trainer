import { chromium } from "playwright";
import { readFile } from "node:fs/promises";
import { successCriteria } from "../assets/questionbank-DZXLgNQi.js";

const WCAG_JSON_URL = "https://www.w3.org/WAI/WCAG22/wcag.json";
const ACTIVE_LEVELS = new Set(["A", "AA", "AAA"]);
const trainerSource = await readFile(new URL("../assets/trainer.js", import.meta.url), "utf8");

function normalize(value) {
  return String(value).replace(/\s+/g, " ").trim();
}

function normalizeNormativeText(value) {
  return String(value).replace(/\s+/g, "");
}

const response = await fetch(WCAG_JSON_URL);
if (!response.ok) throw new Error(`Could not load the official WCAG 2.2 source (${response.status}).`);
const official = await response.json();

const rawOfficialCriteria = official.principles.flatMap((principle) =>
  principle.guidelines.flatMap((guideline) =>
    guideline.successcriteria.map((criterion) => ({
      id: criterion.id,
      num: criterion.num,
      title: criterion.handle,
      level: criterion.level,
      principle: principle.handle,
      guideline: guideline.num,
      guidelineTitle: guideline.handle,
      content: criterion.content
    }))
  )
);

const browser = await chromium.launch({ headless: true });
let officialCriteria;
const authorityChecks = [
  {
    name: "DOJ ADA Title II web and mobile app rule fact sheet",
    url: "https://www.ada.gov/resources/2024-03-08-web-rule/",
    terms: ["April 26, 2027", "April 26, 2028", "WCAG 2.1", "Level AA"]
  },
  {
    name: "U.S. Access Board Revised 508 Standards",
    url: "https://www.access-board.gov/ict/",
    terms: ["E205.3 Agency Official Communication", "E205.4 Accessibility Standard", "E207.2 WCAG Conformance", "Intranet content designed as a Web page"]
  },
  {
    name: "European Accessibility Act",
    url: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32019L0882",
    terms: ["28 June 2025", "five years", "20 years"]
  }
];
const authorityFailures = [];
try {
  const page = await browser.newPage();
  officialCriteria = await page.evaluate((records) => records.map((record) => {
    const container = document.createElement("div");
    container.innerHTML = record.content;
    return { ...record, contentText: container.textContent.replace(/\s+/g, " ").trim() };
  }), rawOfficialCriteria);

  for (const authority of authorityChecks) {
    const navigation = await page.goto(authority.url, { waitUntil: "domcontentloaded", timeout: 45000 });
    if (!navigation || navigation.status() >= 400) {
      authorityFailures.push(`${authority.name} could not be loaded (${navigation?.status() || "no response"}).`);
      continue;
    }
    try {
      await page.waitForFunction((term) => document.body?.innerText.includes(term), authority.terms[0], { timeout: 15000 });
    } catch {
      // The term checks below produce the useful, source-specific failure detail.
    }
    const officialText = normalize(await page.locator("body").innerText());
    for (const term of authority.terms) {
      if (!officialText.includes(term)) authorityFailures.push(`${authority.name} no longer contains the expected phrase “${term}”.`);
    }
  }
} finally {
  await browser.close();
}

const errors = [];
errors.push(...authorityFailures);
if (successCriteria.length !== officialCriteria.length) errors.push(`Local source has ${successCriteria.length} records; W3C has ${officialCriteria.length}.`);

const localAuthorityClaims = [
  ["DOJ source URL", "https://www.ada.gov/resources/2024-03-08-web-rule/"],
  ["larger-entity Title II date", "April 26, 2027"],
  ["smaller-entity Title II date", "April 26, 2028"],
  ["Title II technical baseline", "WCAG 2.1 Level AA"],
  ["Access Board source URL", "https://www.access-board.gov/ict/"],
  ["Section 508 official-communication provision", "E205.3"],
  ["Section 508 WCAG incorporation provision", "E207.2"],
  ["EAA source URL", "https://eur-lex.europa.eu/eli/dir/2019/882/oj"],
  ["EAA application date", "28 June 2025"],
  ["EAA assessment record period", "five years"],
  ["EAA terminal transition limit", "20 years"]
];
for (const [claim, expectedText] of localAuthorityClaims) {
  if (!trainerSource.includes(expectedText)) errors.push(`The trainer is missing the verified ${claim}: “${expectedText}”.`);
}

const officialByNumber = new Map(officialCriteria.map((criterion) => [criterion.num, criterion]));
for (const local of successCriteria) {
  const source = officialByNumber.get(local.num);
  if (!source) {
    errors.push(`${local.num} exists locally but not in the W3C source.`);
    continue;
  }
  for (const field of ["id", "title", "level", "principle", "guideline", "guidelineTitle", "contentText"]) {
    const compare = field === "contentText" ? normalizeNormativeText : normalize;
    if (compare(local[field]) !== compare(source[field])) errors.push(`${local.num} ${field} does not match the W3C source.`);
  }
}

for (const source of officialCriteria) {
  if (!successCriteria.some((local) => local.num === source.num)) errors.push(`${source.num} exists in the W3C source but not locally.`);
}

const activeCriteria = successCriteria.filter(({ level }) => ACTIVE_LEVELS.has(level));
const removedCriteria = successCriteria.filter(({ level }) => !ACTIVE_LEVELS.has(level));
if (activeCriteria.length !== 86) errors.push(`Expected 86 active WCAG 2.2 criteria; found ${activeCriteria.length}.`);
if (removedCriteria.length !== 1 || removedCriteria[0]?.num !== "4.1.1") errors.push("Expected 4.1.1 to be the only obsolete/removed record.");

if (errors.length) {
  throw new Error(`WCAG content verification failed:\n- ${errors.join("\n- ")}`);
}

console.log(`Content accuracy check passed: ${successCriteria.length} WCAG 2.2 records match W3C (${activeCriteria.length} active; obsolete 4.1.1 excluded), and current claims were confirmed against DOJ, the U.S. Access Board, and EUR-Lex.`);
