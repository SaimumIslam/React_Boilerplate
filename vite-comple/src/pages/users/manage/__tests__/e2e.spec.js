// @ts-check

import { expect, test } from "@playwright/test";

// test is not complete
test.describe("Create", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/users/create");
  });

  test.afterEach(async ({ page }) => {
    await page.close();
  });

  test("value filled", async ({ page }) => {
    const input_fields = ["first_name", "last_name", "address", "mobile", "email"];
    await Promise.all(
      input_fields.map(async (name) => {
        await page.locator(`input[name=${name}]`).fill(name);
      }),
    );

    await page.locator("select[name=role]").selectOption("1");
    await page.locator("input[name=is_active]").check();
  });
});

test.describe("Update", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/users/update/1");
  });

  test.afterEach(async ({ page }) => {
    await page.close();
  });

  test("form check", async ({ page }) => {
    const input_fields = ["first_name", "last_name", "address", "mobile", "email"];
    await Promise.all(
      input_fields.map(async (name) => {
        await expect(page.locator(`input[name=${name}]`)).toBeEditable();
      }),
    );

    const select_fields = ["role"];
    await Promise.all(
      select_fields.map(async (name) => {
        await expect(page.locator(`select[name=${name}]`)).toBeEditable();
      }),
    );

    await expect(page.locator("input[name=is_active]")).toBeEditable();
  });
});
