import angular from 'angular';
import Home from './home/home';
import New from './new/new';
import Search from './search/search';
import Browse from './browse/browse';
import About from './about/about';

let componentModule = angular.module('app.components', [
  Home,
  Browse,
  Search,
  New,
  About
])

.name;

export default componentModule;
