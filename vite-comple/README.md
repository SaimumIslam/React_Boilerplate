# React + Vite

## Table of Contents

- [Developer Instruction](#developer-instruction)
- [Instruction Tests Writing](#instruction-tests-writing)
- [Activate Testing](#activate-testing)
- [Project Src Structure](#project-src-structure)
- [Project Test Structure](#project-test-structure)
- [Run Command](#run-command)
- [Linting Command](#linting-command)
- [Test command](#test-command)
- [Packages](#packages)

We create this template using:

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)

Plugins

- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Developer Instruction

- folder/file name: kebab-case
- variable name: snake_case
- constant variable/data: SNAKE_CASE
- funcion name: camelCase
- react components follows `.jsx` others `.js`
- every folder includes: `index.jsx` or `_styles.jsx`
- `_styles.jsx` includes only design and index.jsx only logic.
- all sub-features should inside the main folder.
- common feature should be inside the component features folder.
- please follow the import style of any page and code.

## Instruction Tests Writing

- please write tests in all possible ways in `__tests__` folder.
- it is recommended to write e2e test for pages and we use `e2e.spec.js`
- unit testing is a must for component and we use `unit.test.jsx` for unit test.
- use _aria-label_ attribute for inputs if necessery
- use _title_ attribute for texts if necessery
- use _data-testid_ attribute for value or action if necessery

For more tests instruction, please follow

- [Unit Test](./test/learn-vitest.md)
- [E2E Test](./test/learn-playwright.md)

**Note**: You are always welcome to do good changes and refactor.

## Project Src Structure

- assets: images and icons and other resources.
- components:

  - \_\_controller: common used styled components
  - \_\_providers: common used styled components
  - \_styles: common used styled components
  - material: customized material ui components
  - widgets: customly creted automic components.
  - features: same as widgets, feature or requirement specific.
  - third-party: third party library ex: react-dropzone, tiny-react

- data: all needed data required in components.
- layouts: application layouts.
- pages: pages design.
- routes: routing of application.
- store: global states management ex: redux, context api.
- services: server request and response
  - api: api calling.
  - endpoints.js : api endpoints.
  - handle-error.js : handling error
  - query-client.js : react query default configuration
  - request : fetch api settings
- utils: utility funtions
- App.jsx: all higher order components and providers.
- main.jsx: root file.

## Project Test Structure

- \_\_data\_\_:

  - env.testing: environment file for playwrite as it will not pick _.env.testing_
  - db.local.js: static variable which we save to our db
  - user-accounts: user accounts to authenticate

- playwright.setup.js: frist run e2e, authentication
- playwright.teardown.js: last run, cleanup
- vitest.setup.js: first run, cleanup

## Run Command

`npm run dev` (Run using development environment:)

`npm run build` (Run using production environment:)

`npm run staging` (Run using staging environment:)

`npm run preview` (Run static preview:)

## Linting Command

`npm run lint` (Check linting:)

`npm run lint:fix` (Check linting fix:)

## Test command

`npm run test` (Run using testing environment:)

`npm run test:unit` (Run unit test file unit.test.js/jsx)

`npm run test:e2e` (Run e2e test file unit.spec.js/jsx)

`npm run e2e:report` (Show e2e report)

`npm run e2e:ui` (Run e2e ui)

# Packages

`npm outdated` (See outdated package)
`npm update` (update to minor change)
`npx npm-check-updates -u` (Upgrade to magor version)

### Packages

- [React](https://react.dev/)
- [React Router](https://reactrouter.com/)
- [Material Ui](https://mui.com/material-ui/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [React Hook Form](https://react-hook-form.com/)
- [React Query](https://tanstack.com/query/v3/)
- [React Sncakcbar](https://notistack.com/)
- [Day.js](https://www.npmjs.com/package/dayjs)

### Dev Packages

- [Vitejs](https://vitejs.dev/)
- [Eslint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [Eslint Import Rule](https://www.npmjs.com/package/eslint-plugin-import)

### Testing Packages

- [Vitest](https://vitest.dev/)
- [Testing Library](https://testing-library.com/)
- [Jsdom](https://www.npmjs.com/package/jsdom)
- [Playwright](https://playwright.dev/)

### Future Packages:

- [Lightening css](https://lightningcss.dev/css-modules.html)
