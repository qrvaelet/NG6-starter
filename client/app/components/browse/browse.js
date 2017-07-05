import angular from 'angular';
import uiRouter from 'angular-ui-router';
import browseComponent from './browse.component';

let browseModule = angular.module('browse', [
  uiRouter
])

.config(($stateProvider) => {
  "ngInject";
  $stateProvider
    .state('browse', {
      url: '/browse',
      component: 'browse'
    });
})

.component('browse', browseComponent)
  
.name;

export default browseModule;
