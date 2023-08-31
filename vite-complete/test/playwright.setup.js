import { chromium } from "@playwright/test";

import { setLocalDb } from "./playwrite.evaluate";

import { LOGIN_USER } from "./__data__/user-accounts";
import { DB_TOKEN_VALUE, DB_USER_VALUE } from "./__data__/db.local";
import { ENV_DB_TOKEN_KEY, ENV_DB_USER_KEY } from "./__data__/env.testing";

async function playwrightSetup(config) {
  const { baseURL, storageState } = config.projects[0].use;
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto(`${baseURL}/login`);

  await page.fill('input[name="username"]', LOGIN_USER["username"]);
  await page.fill('input[name="password"]', LOGIN_USER["password"]);
  await page.getByRole("button", { name: "LOG IN" }).click();

  // you can save data from api reponse, the comment this block
  const json_user = JSON.stringify(DB_USER_VALUE);
  await page.evaluate(setLocalDb(ENV_DB_USER_KEY, json_user));
  await page.evaluate(setLocalDb(ENV_DB_TOKEN_KEY, DB_TOKEN_VALUE));

  await page.context().storageState({ path: storageState });
  await browser.close();
}

export default playwrightSetup;
