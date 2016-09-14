
export default function routes ($stateProvider) {
  'ngInject';
  $stateProvider
    .state('base', {
      url: '/',
      template: '<p ng-repeat="item in ctrl.items">{{item}}</p>'
    });
};