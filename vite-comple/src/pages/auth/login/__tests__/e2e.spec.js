// @ts-check

import { expect, test } from "@playwright/test";

// test is not complete
test.describe("Login", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/login");
  });

  test.afterEach(async ({ page }) => {
    await page.close();
  });

  test("form check", async ({ page }) => {
    const input_fields = ["username", "password"];
    await Promise.all(
      input_fields.map(async (name) => {
        await expect(page.locator(`input[name=${name}]`)).toBeEditable();
      }),
    );
  });
});
