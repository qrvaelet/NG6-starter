import angular from 'angular';
import uiRouter from 'angular-ui-router';
import newComponent from './new.component';

let newModule = angular.module('new', [
  uiRouter
])

.config(($stateProvider) => {
  "ngInject";
  $stateProvider
    .state('new', {
      url: '/new',
      component: 'new'
    });
})

.component('new', newComponent)
  
.name;

export default newModule;
