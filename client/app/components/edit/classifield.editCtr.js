(function() {
  "use strict";

  angular
    .module("angularCls")
    .controller("editClassifiledController", function($scope, $state, $http, $timeout, classifieldsFactory, $mdSidenav, $mdToast, $mdDialog) {

      var self = this; //cls.
      self.clsdata = $state.params.classifield;

      //Fix potential problems with timeout
      $timeout(function() {
        $mdSidenav('left').open();
      });

      //Watch for sidebar close
      $scope.$watch('cls.sidenavOpen', function(sidenav) {
        if(sidenav === false) {
          $mdSidenav('left').close()
          .then(function() {
            $state.go('classifields');
          });
        }
      });

      //close sidebar
      self.closeSidebar = function () {
        self.sidenavOpen = false;
      };

      //Save new classifield
      self.saveEdit = function(clsdata) {
          $scope.$emit('editClassified', clsdata);
          self.sidenavOpen = false;
      };
  });
})();
