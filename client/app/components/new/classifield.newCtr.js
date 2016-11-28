(function() {
  "use strict";

  angular
    .module("angularCls")
    .controller("NewClassifiledController", function($scope, $state, $http, $timeout, classifieldsFactory, $mdSidenav, $mdToast, $mdDialog) {

      var self = this; //cls.

      //Fix potential problems with timeout
      $timeout(function() {
        $mdSidenav('left').open();
      });

      self.categories = [
        "Vehicles",
        "Parts and Accessories",
        "Clothing",
        "Furniture",
        "Electronics",
        "Computer Parts and Accessories",
        "Cars"
      ];


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
      self.saveClassifield = function(clsdata) {
        if(clsdata) {
           clsdata.contact = {
            name: "Test Name",
            phone: "123456789",
            email: "email@email.com"
          };
          clsdata.categories = [clsdata.categories];
          clsdata.posted = new Date();
          $scope.$emit('newClassified', clsdata);
          self.sidenavOpen = false;
        }//End of IF
      };
  });
})();
