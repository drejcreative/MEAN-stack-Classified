(function() {
  "use strict";

  angular
    .module("angularCls")
    .controller("ClassifiledController", function($scope, $http, $state, classifieldsFactory, $mdSidenav, $mdToast, $mdDialog) {

      var self = this; //cls.

      console.log(self.classifields);
      //Geting data from server
      classifieldsFactory.getClassifields().success(function(data){
        self.classifields = data;
        $scope.isLoading = false;
        //Sorting by id as default
        self.sortType = 'posted';
      }).error(function(data, status){
        console.log(data, status);
        self.classifields = [];
      });

      $scope.isLoading = true;

      //Open Sidebar
      self.openSidebar = function() {
        $state.go('classifields.new');
        //$mdSidenav('left').toggle();
      };

      //Save classifields
      $scope.$on('newClassified', function(event, clsdata) {
        clsdata.id = self.classifields.length + 1;
        classifieldsFactory.addClassifields(clsdata)
              .then(function (response) {
                  $scope.status = 'Inserted Customer! Refreshing customer list.';
                  self.classifields.push(clsdata);
                  showToast('Classifield Saved!');
              }, function(error) {
                  $scope.status = 'Unable to insert customer: ' + error.message;
                  showToast('Problem with adding new Classifields!');
              });
      });

      //Edit Classifield
        $scope.$on('editClassified', function(event, clsdata) {
        classifieldsFactory.updateClassifield(clsdata)
                  .then(function (response) {
                      self.classifields.push(clsdata);
                      showToast('Classifield Edited!');
                  }, function(error) {
                      showToast('Problem with editing a Classifields!');
                  });
      });


      //Edit Classifield
      self.editClassifield = function(c) {
        $state.go('classifields.edit', {
          id: c.id,
          classifield: c
        });
      };

      self.openClassifield = function(c) {
        $state.go('classifields.open', {
          id: c.id,
          classifield: c
        });
      };

      //Delete Classifield
      self.deleteClassifield = function(event, c) {
        var confirm = $mdDialog.confirm()
              .title("Delete")
              .textContent("Are you sure you want to delete ")
              .targetEvent(event)
              .ok('Please do it!')
              .cancel('No, I dont!');
        $mdDialog.show(confirm).then(function() {
              classifieldsFactory.deleteClassifield(c)
                    .then(function (response) {
                        var index = self.classifields.indexOf(c);
                        self.classifields.splice(index, 1);
                        showToast('Classifield Deleted!');
                    }, function (error) {
                        $scope.status = 'Error retrieving customers! ' + error.message;
                    });
              showToast('Classifield Deleted!');
          }, function() {

        });
      };


      //Show toast message
      function showToast(message) {
        $mdToast.show(
            $mdToast.simple()
              .textContent(message)
              .position('right')
              .hideDelay(3000)
          );
      }

    });
})();
