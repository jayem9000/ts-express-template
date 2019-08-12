# Project Template

This is a simple project setup based on express-generator

# What is this? 
- Node / Express / TypeScript backend
- Pug for server view templates
- Webpack configuration for the client
- TypeScript / React for frontend

# Links
- Express: http://expressjs.com/
- Node: https://nodejs.org/en/
- Npm: https://www.npmjs.com/
- Pug: https://pugjs.org/api/getting-started.html
- TypeScript: http://www.typescriptlang.org/
- Webpack: https://webpack.js.org/
- React: https://reactjs.org/

# How was this created?

# Step 1
This template is based on `express-generator`. 
Url: http://expressjs.com/en/starter/generator.html

Follow steps and then move all structure to a `server` directory

# Step 2
Test to make sure app runs
- Run `npm run dev` and hit `localhost:3000`.

# Step 3
Integrate TypeScript
- Run `npm i -g typescript`
- Run `tsc --init` 
- Update all server files to have `.ts` extension and fix issues
- Rename `bin/www` to be `bin/start.ts` and fix issues
- Install nodemon, ts-node, typescript locally as dev dependencies
- Install whatever `@types` definitions that vscode complains about
- Open package.json and update the start script to be `nodemon server/bin/start.ts`
- Remove the rest of the scripts
- Test to make sure app runs
- Run `npm run start` and hit `localhost:3000`

# Step 4
Integrate Webpack
Url: https://webpack.js.org/guides/development/#using-webpack-dev-middleware

- Run `npm i -D webpack webpack-dev-middleware`
- Create a webpack.config.ts file under `server/middleware/`
- Create a directory named `client` at the root.
- add an index.js file
- Integrate the config file into the express app
- update the webpack config so it outputs to the public directory
- Run `npm run start` and hit `localhost:3000`
- hit `localhost:3000/bundle.js`. Should see the webpack bundle file.

# Step 5 
Integrate Typescript with webpack
- Run `npm i -D ts-loader`
- update the webpack config to include the ts-loader
- change the entry and client index file to be `index.ts`.
- Run `npm run start` and hit `localhost:3000`
- hit `localhost:3000/bundle.js`. Should see the webpack bundle file.

# Step 6
Integrate bundle into main pug file



