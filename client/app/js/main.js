angular
  .module('angularCls', ["ngMaterial", "ui.router", "angularUtils.directives.dirPagination", "angular.filter"])
  .config(function($mdThemingProvider, $stateProvider) {
    $mdThemingProvider.theme('default')
      .primaryPalette('orange')
      .accentPalette('blue-grey');

    $stateProvider
    .state('classifields', {
      url: '/',
      templateUrl: 'components/classifields.html',
      controller: 'ClassifiledController as cls'
    }).state('classifields.new', {
      url: 'new',
      templateUrl: 'components/new/classifield.new.html',
      controller: 'NewClassifiledController as cls'
    }).state('classifields.edit', {
      url: 'edit/:id',
      templateUrl: 'components/edit/classifield.edit.html',
      controller: 'editClassifiledController as cls',
      params: {
        classifield: null
      }
    }).state('classifields.open', {
      url: 'open/:id',
      templateUrl: 'components/open/classifield.open.html',
      controller: 'openClassifiledController as cls',
      params: {
        classifield: null
      }
    });
});
