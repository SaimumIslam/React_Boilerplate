# React + Vite

# React + Vite

- [Developer Instruction](#developer-instruction)
- [Project Structure](#project-src-structure)
- [Run Command](#run-command)
- [Linting Command](#linting-command)
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

**Note**: You are always welcome to do good changes and refactor.

## Project Src Structure

- assets: images and icons and other resources.
- components:

  - \_\_controller: common used styled components
  - \_\_providers: common used styled components
  - \_styles: common used styled components
  - widgets: customly creted automic components.
  - modules: same as widgets, ui specific.
  - features: same as widgets, feature or requirement specific.

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

## Run Command

`npm run dev` (Run using development environment:)

`npm run build` (Run using production environment:)

`npm run staging` (Run using staging environment:)

`npm run preview` (Run static preview:)

## Linting Command

`npm run lint` (Check linting:)

`npm run lint:fix` (Check linting fix:)

### Packages

- [React](https://react.dev/)
- [React Router](https://reactrouter.com/)
- [React Hook Form](https://react-hook-form.com/)
- [React Query](https://tanstack.com/query/v3/)
- [Day.js](https://www.npmjs.com/package/dayjs)

### Dev Packages

- [Vitejs](https://vitejs.dev/)
- [Eslint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [Eslint Import Rule](https://www.npmjs.com/package/eslint-plugin-import)

### Future Packages:

- [Lightening css](https://lightningcss.dev/css-modules.html)
