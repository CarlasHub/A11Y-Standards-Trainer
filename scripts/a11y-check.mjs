import axe from "axe-core";
import { chromium } from "playwright";

const routes = [
  "#home",
  "#guided",
  "#tutorials",
  "#lesson/non-text-content",
  "#standards",
  "#wcag",
  "#section-508",
  "#ada-title-ii",
  "#eaa",
  "#compare",
  "#assessments",
  "#regulations/overview",
  "#regulations/section-508",
  "#regulations/title-ii",
  "#regulations/eaa",
  "#regulations/crosswalk",
  "#title-ii-lab",
  "#casebook",
  "#search/1.2",
  "#search/ADA%20Title%20II",
  "#bank",
  "#quiz/non-text-content",
  "#quiz/mixed/20",
  "#quiz/section-508",
  "#quiz/title-ii",
  "#quiz/eaa",
  "#quiz/wcag-advanced",
  "#exam",
  "#glossary",
  "#docs",
];
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });

let failed = false;

for (const route of routes) {
  await page.goto(`http://localhost:4175/?v=a11y-check${route}`, { waitUntil: "domcontentloaded" });
  await page.addScriptTag({ content: axe.source });
  const results = await page.evaluate(async () => {
    return axe.run(document, {
      runOnly: {
        type: "tag",
        values: ["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "wcag22aa", "best-practice"]
      }
    });
  });

  const serious = results.violations.filter((violation) => ["critical", "serious"].includes(violation.impact));
  if (serious.length) {
    failed = true;
    console.log(`\n${route}: ${serious.length} serious/critical violations`);
    for (const violation of serious) {
      console.log(`- ${violation.id}: ${violation.help}`);
      for (const node of violation.nodes.slice(0, 3)) {
        console.log(`  ${node.target.join(" ")}`);
      }
    }
  } else {
    console.log(`${route}: no serious/critical axe violations`);
  }
}

await page.goto("http://localhost:4175/?v=completed-state-check#title-ii-lab", { waitUntil: "domcontentloaded" });
const titleIIFieldsets = page.locator("[data-title-ii-form] .case-dimension");
for (let index = 0; index < await titleIIFieldsets.count(); index += 1) {
  await titleIIFieldsets.nth(index).locator("input[type='radio']").first().check();
}
await page.locator("#title-ii-rationale").fill("Issue: coverage. Rule: 28 CFR Part 35. Application: connect the entity, service, deadline, and baseline. Evidence: retain the source trail. Boundary: preserve other duties.");
await page.locator("[data-title-ii-form] button[type='submit']").click();
await page.locator("#title-ii-score").waitFor();
await page.addScriptTag({ content: axe.source });
const completedTitleIIResults = await page.evaluate(async () => axe.run(document, {
  runOnly: {
    type: "tag",
    values: ["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "wcag22aa", "best-practice"]
  }
}));
const completedTitleIISerious = completedTitleIIResults.violations.filter((violation) => ["critical", "serious"].includes(violation.impact));
if (completedTitleIISerious.length) {
  failed = true;
  console.log(`\n#title-ii-lab completed state: ${completedTitleIISerious.length} serious/critical violations`);
  for (const violation of completedTitleIISerious) console.log(`- ${violation.id}: ${violation.help}`);
} else {
  console.log("#title-ii-lab completed state: no serious/critical axe violations");
}

const responsiveRoutes = ["#home", "#standards", "#wcag", "#section-508", "#ada-title-ii", "#eaa", "#assessments", "#quiz/title-ii", "#title-ii-lab", "#casebook", "#docs"];
for (const viewport of [{ width: 320, height: 700 }, { width: 390, height: 844 }, { width: 768, height: 900 }]) {
  await page.setViewportSize(viewport);
  for (const route of responsiveRoutes) {
    await page.goto(`http://localhost:4175/?v=responsive-check${route}`, { waitUntil: "domcontentloaded" });
    const hasHorizontalOverflow = await page.evaluate(() => document.documentElement.scrollWidth > document.documentElement.clientWidth);

    if (hasHorizontalOverflow) {
      failed = true;
      console.log(`${route}: horizontal overflow at ${viewport.width}px viewport`);
    }

    await page.addScriptTag({ content: axe.source });
    const mobileResults = await page.evaluate(async () => axe.run(document, {
      runOnly: {
        type: "tag",
        values: ["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "wcag22aa", "best-practice"]
      }
    }));
    const mobileSerious = mobileResults.violations.filter((violation) => ["critical", "serious"].includes(violation.impact));
    if (mobileSerious.length) {
      failed = true;
      console.log(`\n${route} at ${viewport.width}px: ${mobileSerious.length} serious/critical violations`);
      for (const violation of mobileSerious) console.log(`- ${violation.id}: ${violation.help}`);
    }
  }
  console.log(`Responsive and axe checks completed at ${viewport.width}px.`);
}

await page.setViewportSize({ width: 320, height: 700 });
await page.goto("http://localhost:4175/?v=nav-check#home", { waitUntil: "domcontentloaded" });
const navToggle = page.locator(".nav-toggle");
if (!(await navToggle.isVisible())) {
  failed = true;
  console.log("Mobile navigation toggle is not visible at 320px.");
} else {
  const closedLabel = await navToggle.getAttribute("aria-label");
  if (closedLabel !== "Open main menu") {
    failed = true;
    console.log(`Mobile navigation toggle has the wrong closed label: “${closedLabel}”.`);
  }
  await navToggle.focus();
  await page.keyboard.press("Enter");
  await page.locator("#primary-navigation a, #primary-navigation summary").first().waitFor();
  await page.waitForFunction(() => document.activeElement?.matches("#primary-navigation a, #primary-navigation summary"));
  if (await navToggle.getAttribute("aria-expanded") !== "true") {
    failed = true;
    console.log("Mobile navigation did not expose its expanded state.");
  }
  const openState = await page.evaluate(() => ({
    label: document.querySelector(".nav-toggle")?.getAttribute("aria-label"),
    navVisible: document.querySelector("#primary-navigation")?.getClientRects().length > 0,
    mainInert: document.querySelector("#main")?.inert,
    footerInert: document.querySelector(".site-footer")?.inert,
    bodyLocked: document.body.classList.contains("nav-open")
  }));
  if (openState.label !== "Close main menu" || !openState.navVisible || !openState.mainInert || !openState.footerInert || !openState.bodyLocked) {
    failed = true;
    console.log(`Mobile navigation open state is incomplete: ${JSON.stringify(openState)}.`);
  }

  const navClusters = page.locator(".nav-cluster");
  await navClusters.nth(0).locator("summary").focus();
  await page.keyboard.press("Enter");
  await navClusters.nth(1).locator("summary").focus();
  await page.keyboard.press("Enter");
  const onlyOneClusterOpen = await page.locator(".nav-cluster[open]").count() === 1;
  if (!onlyOneClusterOpen) {
    failed = true;
    console.log("Mobile navigation left more than one submenu open.");
  }
  await page.keyboard.press("Escape");
  const submenuClosed = await navClusters.nth(1).getAttribute("open") === null;
  const submenuFocusReturned = await page.evaluate(() => document.activeElement === document.querySelectorAll(".nav-cluster summary")[1]);
  if (!submenuClosed || !submenuFocusReturned) {
    failed = true;
    console.log("Escape did not close the active mobile submenu and return focus to its summary.");
  }
  await page.keyboard.press("Escape");
  const navClosed = await navToggle.getAttribute("aria-expanded") === "false";
  const focusReturned = await page.evaluate(() => document.activeElement?.classList.contains("nav-toggle"));
  const closedState = await page.evaluate(() => ({
    mainInert: document.querySelector("#main")?.inert,
    footerInert: document.querySelector(".site-footer")?.inert,
    bodyLocked: document.body.classList.contains("nav-open")
  }));
  if (!navClosed || !focusReturned || closedState.mainInert || closedState.footerInert || closedState.bodyLocked) {
    failed = true;
    console.log("Escape did not close mobile navigation and return focus to its toggle.");
  }
}

const footerCredit = await page.locator(".footer-built-by").innerText();
if (!footerCredit.includes("Built by Carla Goncalves")) {
  failed = true;
  console.log(`Footer: expected the creator credit but found “${footerCredit}”.`);
}

const expectedFooterLinks = new Map([
  ["LinkedIn", "https://www.linkedin.com/in/carla-goncalves-9a01a5164/"],
  ["GitHub", "https://github.com/CarlasHub"],
  ["Website", "https://carlashub.com/"]
]);
for (const [label, href] of expectedFooterLinks) {
  const link = page.getByRole("link", { name: `${label} (opens in a new tab)`, exact: true });
  if ((await link.count()) !== 1 || (await link.getAttribute("href")) !== href) {
    failed = true;
    console.log(`Footer: ${label} link is missing or does not use the verified URL.`);
  }
  const dimensions = await link.evaluate((element) => {
    const rect = element.getBoundingClientRect();
    return { width: rect.width, height: rect.height };
  });
  if (dimensions.width < 44 || dimensions.height < 44) {
    failed = true;
    console.log(`Footer: ${label} target is smaller than 44 by 44 CSS pixels.`);
  }
}

const expectedAssessmentSizes = new Map([
  ["#quiz/section-508", 14],
  ["#quiz/title-ii", 14],
  ["#quiz/eaa", 15],
  ["#quiz/wcag-advanced", 10],
  ["#quiz/mixed/40", 40],
  ["#exam", 40]
]);
for (const [route, count] of expectedAssessmentSizes) {
  await page.goto(`http://localhost:4175/?v=assessment-check${route}`, { waitUntil: "domcontentloaded" });
  const progressText = await page.locator(".question-meta .badge").innerText();
  if (!progressText.includes(`of ${count}`)) {
    failed = true;
    console.log(`${route}: expected ${count} assessment questions but found “${progressText}”.`);
  }
}

await page.goto("http://localhost:4175/?v=quiz-interaction-check#quiz/title-ii", { waitUntil: "domcontentloaded" });
await page.locator("[data-quiz-form] input[type='radio']").first().check();
await page.locator("[data-quiz-form] button[type='submit']").click();
const feedbackFocused = await page.evaluate(() => document.activeElement?.id === "quiz-feedback");
if (!feedbackFocused) {
  failed = true;
  console.log("Quiz feedback did not receive focus after answer submission.");
}
await page.locator("[data-next-question]").click();
const nextQuestionFocused = await page.evaluate(() => document.activeElement?.id === "quiz-question-heading");
if (!nextQuestionFocused) {
  failed = true;
  console.log("The next quiz question heading did not receive focus.");
}

await page.goto("http://localhost:4175/?v=structure-check#standards", { waitUntil: "domcontentloaded" });
const standardCards = await page.locator(".subject-grid .subject-card").count();
if (standardCards !== 5) {
  failed = true;
  console.log(`#standards: expected 5 separate subject choices but found ${standardCards}.`);
}

await page.goto("http://localhost:4175/?v=structure-check#assessments", { waitUntil: "domcontentloaded" });
const assessmentCards = await page.locator(".assessment-hub-grid .assessment-hub-card").count();
if (assessmentCards !== 6) {
  failed = true;
  console.log(`#assessments: expected 6 separate assessment choices but found ${assessmentCards}.`);
}

await page.goto("http://localhost:4175/?v=structure-check#quiz/title-ii", { waitUntil: "domcontentloaded" });
if (await page.locator(".quiz-mode-nav").count()) {
  failed = true;
  console.log("#quiz/title-ii: subject switching is still mixed into the active quiz view.");
}
if (!(await page.locator('.subject-breadcrumb a[href="#assessments"]').count())) {
  failed = true;
  console.log("#quiz/title-ii: missing the return path to the quiz centre.");
}

await browser.close();

if (failed) {
  process.exitCode = 1;
}
