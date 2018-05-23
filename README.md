# GIVE frontend

## Requirements

You will need [Yarn](https://yarnpkg.com/lang/en/docs/install).

And  after that, Cordova:
```
yarn add -g cordova
```

## Available Scripts

In the project directory, you can run:

### `yarn install`

To install all project dependencies

### `yarn start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br>

### `yarn run build`

Builds the app for production to the `www` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

## Deployment

You need to customize `.env` file on main directory. There are parameters for accessing the different APIs used. 

### Web
`yarn run build` creates a `www` directory with a production build of your app. Set up your favorite HTTP server so that a visitor to your site is served `index.html`, and requests to static paths like `/static/js/main.<hash>.js` are served with the contents of the `/static/js/main.<hash>.js` file.

### Mobile

To target platforms:

`cordova platform add ios`

`cordova platform add android`

You need to install SDKs for each platform that you wish to target. Read this to check what requirements need to be https://cordova.apache.org/docs/en/latest/guide/cli/index.html#install-pre-requisites-for-building
Generally you will probably have to install Android Studio, XCode, SDKs, emulators, build systems, etc.

To test the app run:

`cordova emulate android`

`cordova emulate ios`

To test on a connected device run:

`cordova run android`

`cordova run ios`

