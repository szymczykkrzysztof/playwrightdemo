import { test, chromium, webkit, firefox } from "@playwright/test";
import { lstat } from "fs";
test("Browser support demo ", async () => {
  for (const browserType of [chromium, webkit, firefox]) {
    console.log("Running:", browserType.name());
    const browser = await browserType.launch();
    const page = await browser.newPage();
    await page.goto("https://www.whatsmybrowser.org/");
    await page.screenshot({ path: `pw-${browserType.name()}.png` });
    await page.close();
    await browser.close();
  }
});
