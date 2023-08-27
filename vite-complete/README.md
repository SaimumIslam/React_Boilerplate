# React + Vite

Currently, we use plugins:

- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Run command

`npm run dev` (Run using development environment:)

`npm run build` (Run using production environment:)

`npm run staging` (Run using staging environment:)

`npm run preview` (Run static preview:)

## Linting

`npm run lint` (Check linting:)

`npm run lint:fix` (Check linting fix:)

## Test command

`npm run test` (Run using testing environment:)

`npm run test:unit` (Run unit test file unit.test.js/jsx)

`npm run test:e2e` (Run e2e test file unit.spec.js/jsx)

`npm run report:e2e` (Show e2e report)

## Developer Instruction

- folder/file name: kebab-case
- variable name: snake_case
- funcion name: camelCase
- constant variable/data: SNAKE_CASE
- react cmponents follows `.jsx` others `.js`
- widgets: combined with material ui or others, component specific.
- component folder includes: `index.jsx` and `_styles.jsx`
- `_styles.jsx` includes only design and index.jsx only logic.
- all sub-features should inside the main feature folder.
- common feature should be inside the componet folder.
- please follow the import style of any page and code.

## Project Structure

- assets: images and icons and other resources.
- components:

  - \_\_controller: common used styled components
  - \_\_providers: common used styled components
  - \_styles: common used styled components
  - material: customized material ui components
  - modules: same as widgets, ui specific.
  - features: same as widgets, feature or requirement specific.
  - third-part: third party library ex: react-dropzone, tiny-react

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
  - request : axios settings
- utils: utility funtions
- App.jsx: all higher order components and providers.
- main.jsx: root file.

### Packages

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

### Testing Packages

- [Vitest](https://vitest.dev/)
- [Testing Library](https://testing-library.com/)
- [Playwright](https://playwright.dev/)

#### Future Introduce:

- [Lightening css](https://lightningcss.dev/css-modules.html)
