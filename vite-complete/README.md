# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

### Packages

- [Create react app](https://github.com/facebook/create-react-app)
- [React Router](https://reactrouter.com/)
- [Material Ui](https://mui.com/material-ui/)
- [Redux toolkit](https://redux-toolkit.js.org/)
- [React hook form](https://react-hook-form.com/)
- [React query](https://tanstack.com/query/v3/)
- [Day.js](https://www.npmjs.com/package/dayjs)

## Developer Instruction

- folder/file name: kebab-case
- variable name: snake_case
- funcion name: camelCase
- constant variable/data: SNAKE_CASE
- react cmponents follows `.jsx` others `.js`
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
  - widgets: combined with material ui or others, component specific.
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

Future Introduce:

- [Lightening css](https://lightningcss.dev/css-modules.html)
- [Vitest](https://vitest.dev/)

# Test command

`npx playwright test`
`npx playwright show-report`
