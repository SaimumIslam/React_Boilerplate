## learning playwright

**inputs**
we set name fields name inside default values

- `await page.locator("input[name=first_name]").fill("first_name")` (recommended)

- `await page.fill('input[name="field_name"]', "value")`
- `await page.getByLabel("aria-label").fill("value")`

**select**

- `await page.locator("select[name=role]").selectOption("1")` (recommended)

**checkbox**
_input type="checkbox"_

- `await page.locator("input[name=is_active]").check();` (recommended)

**screenshot**

- `await page.screenshot({ path: './playwright-results/screenshot.png' });`

**Localstorage**

- `await page.evaluate("window.localStorage.setItem('key', 'value')");`
- `const localStorage = await page.evaluate(() => window.localStorage);`

override storage.json (alternate not recommended)

```
  const storage_state = await page.context().storageState();
  const custom_storage_state = { ...storage_state };
  custom_storage_state.origins = [
    {
      origin: baseURL,
      localStorage: [{ name: "token", value: "1" }],
    },
  ];
  const jsonify = JSON.stringify(custom_storage_state);
```

## Learning material

- [custom-fixture](https://playwright.dev/docs/test-fixtures#creating-a-fixture)
- [custom-matchers](https://playwright.dev/docs/test-configuration#add-custom-matchers-using-expectextend)
- [localize timezone](https://playwright.dev/docs/emulation#locale--timezone)
- [browser permission](https://playwright.dev/docs/emulation#permissions)
- [conditionally-skip-a-group-of-tests](https://playwright.dev/docs/test-annotations#conditionally-skip-a-group-of-tests)
