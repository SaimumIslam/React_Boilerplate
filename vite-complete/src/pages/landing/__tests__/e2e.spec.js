// @ts-check

import { expect, test } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("/");
});

// test("has title", async ({ page }) => {
//   await expect(page).toHaveTitle(/PTE/i);
// });

test.describe("Counter", () => {
  test("Initial Value", async ({ page }) => {
    await expect(page.getByTestId("count")).toHaveText("0");
  });

  test("Increment count", async ({ page }) => {
    await page.getByRole("button", { name: "Increment" }).click();
    await expect(page.getByTestId("count")).toHaveText("1");
  });

  test("Decrement count", async ({ page }) => {
    await page.getByRole("button", { name: "Decrement" }).click();
    await expect(page.getByTestId("count")).toHaveText("-1");
  });
});
