// @ts-check

import { expect, test } from "@playwright/test";

// test is not complete
test.describe("users", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/users");
  });

  test.afterEach(async ({ page }) => {
    await page.close();
  });

  test("go to create url", async ({ page }) => {
    await page.getByRole("link", { name: "CREATE" }).click();
    await expect(page).toHaveURL("/users/create");
  });

  test("open advance search", async ({ page }) => {
    await page.getByRole("button", { name: "Advanced Search" }).click();
    await expect(page.locator("input[name=keyword]")).toBeEditable();
    await expect(page.locator("select[name=order_by]")).toBeEditable();
  });

  test("input advance search", async ({ page }) => {
    await page.getByRole("button", { name: "Advanced Search" }).click();

    await page.locator("input[name=keyword]").fill("keyword");
    await page.locator("select[name=order_by]").selectOption("created_at");

    await page.getByRole("button", { name: "clear" }).click();
  });
});
