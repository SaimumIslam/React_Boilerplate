<!-- TABLE OF CONTENTS -->

## Table of Contents

- [Editor Setup](#editor-setup)
- [Plugins](#plugins)
- [Intallation Process](#installation-process)
- [Project Instruction](./client/README.md)

## Editor Setup

You can use any editor but as I personally prefer VS Code. I will give some instructions about how I prefer VS code to be setup for React applications.

### Plugins

You are encourage to install the plugins not necessary:

- ESLint by Dirk Baeumer
- Prettier - Code formatter by Prettier
- Playwright Test for Vscode
- ES7+REACT/REDUX/REACT-NATIVE

## Installation Process

- install [node.js](https://nodejs.org/en/download) version 18/16.
- install [git](https://git-scm.com/)
- clone the repository from github to your local machine.
- `cd client` (enter into project directory)
- `npm install` (install required npm packages)
- configure enviroment variables for [development](./client/.env.development) | [staging](./client/.env.staging) | [testing](./client/.env.testing) | [production](./client/.env.production)

## Activate Testing

- `npx playwright install --with-deps` (install browsers)

- set [testing variables](./client/test//__data__/env.testing.js) sync with enviroment for [testing](./client/.env.testing)

- configure enviroment data for testing [user accounts](./client/test//__data__/user_accounts.js) | [local db](./client/test//__data__/local_db.js)

**Note:** To run the project and know more about internals follow [Project Instruction](./client/README.md)
