import axe from "axe-core";
import { chromium } from "playwright";

const routes = ["#home", "#guided", "#tutorials", "#lesson/non-text-content", "#bank", "#quiz/non-text-content", "#docs"];
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

await browser.close();

if (failed) {
  process.exitCode = 1;
}
