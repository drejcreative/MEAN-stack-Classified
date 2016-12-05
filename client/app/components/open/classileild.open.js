(function() {
  "use strict";

  angular
    .module("angularCls")
    .controller("openClassifiledController", function($scope, $state, $http, $timeout, classifieldsFactory, $mdSidenav, $mdToast, $mdDialog) {

      var self = this; //cls.
      self.clsdata = $state.params.classifield;

      //Fix potential problems with timeout
      $timeout(function() {
        $mdSidenav('right').open();
      });

      //Watch for sidebar close
      $scope.$watch('cls.sidenavOpen', function(sidenav) {
        if(sidenav === false) {
          $mdSidenav('right').close()
          .then(function() {
            $state.go('classifields');
          });
        }
      });

      //close sidebar
      self.closeSidebar = function () {
        self.sidenavOpen = false;
      };

  });
})();
