import '../style/app.scss';
import angular from 'angular';
import uirouter from 'angular-ui-router';
import routing from './app.config';
import appRoutes from './app.routes.js'
import AppComponent from './app.component'
import HeaderComponent from './components/header/header.component'

angular.module('app', [uirouter])

  .component('myApp', AppComponent)
  .component('myHeader', HeaderComponent)
  .config(routing)
  .config(appRoutes)

