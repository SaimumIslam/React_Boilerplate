# Getting Started with Create React App

## Library and Styles

- [Create react app](https://github.com/facebook/create-react-app)
- [Reactrouter](https://reactrouter.com/)
- [Material Ui](https://mui.com/material-ui/)
- [Redux-toolkit](https://redux-toolkit.js.org/)
- [React hook form](https://react-hook-form.com/)
- [React-query](https://react-query.tanstack.com/)
- [Sweetalert2](https://sweetalert2.github.io/)

## File Structure

- assets: images and icons and other resources.
- components:
  - templates: templetes of common views
- config: application configuartion.
- data: all needed data required in components.
- layouts: application layouts.
- pages: pages design.
- routes: routing of application.
- store: global states management ex: redux, context api.
- services:
  - api: api endpoints.
- utils: utility funtions

- App.js: all higher order components and providers.
- index.js: root file.

## Developer Instruction

- folder/file name: kebab-case
- variable name: snake_case
- funcion name: camelCase
- constant variable/data: SNAKE_CASE
- react cmponents follows `.jsx` others `.js`
- component folder includes: `index.jsx` and `elements.jsx`
- all sub-features should inside the main feature folder.
- common feature should be inside the componet folder.
- please follow the import style of any page and code.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.