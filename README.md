# Boilerplate Es6 Angular Webpack

This is a starter kit to get you working with es6 classes and modules within Angular 1.x using Webpack.

##Basic Setup

1. clone the repository
2. run `npm install` within the project directory
3. run 'npm start' this will start webpack-dev-server on port 8080
4. From there the root component of the app is `/src/app/app.module.js`

##Build Production

run `npm run build`

This packages (Uglified, minified) everything into the `./public` folder.

### Angular Dependency Minification Info

When angular is minified if you don't add the necessary array syntax to name your dependencies the minification process will break angular. In order to fix this with less boilerplate this kit includes [ng-annotate](https://github.com/olov/ng-annotate). This means that within our functions/class contstructors we will need to add `'ngInject';` to tell ng-annotate to look at the dependencies and create the necessary minification fixes.

### Credits

Project based on `https://github.com/nearbycoder/boilerplate-es6-angular-webpack.git`.
I have changed this one to build to the public folder since I plan to add an Express backend and to serve the `public` folder containing the angular app.