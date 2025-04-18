// @ts-check

import { expect, test } from "@playwright/test";

test.describe("Details", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/users/1");
  });

  test.afterEach(async ({ page }) => {
    await page.close();
  });

  test("title check", async ({ page }) => {
    await expect(page.getByText("Details")).not.toBeNull();
  });
});
