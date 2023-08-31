// @ts-check

import { expect, test } from "@playwright/test";

test.describe("Counter", () => {
  // test("has title", async ({ page }) => {
  //   await expect(page).toHaveTitle(/PTE/i);
  // });

  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test.afterEach(async ({ page }) => {
    await page.close();
  });

  test("initial check", async ({ page }) => {
    await expect(page.getByTestId("count")).toHaveText("0");
  });

  test("increment check", async ({ page }) => {
    await page.getByRole("button", { name: "Increment" }).click();
    await expect(page.getByTestId("count")).toHaveText("1");
  });

  test("decrement check", async ({ page }) => {
    await page.getByRole("button", { name: "Decrement" }).click();
    await expect(page.getByTestId("count")).toHaveText("-1");
  });
});
