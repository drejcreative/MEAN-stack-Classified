(function() {
  "use strict";

  angular
    .module("angularCls")
    .controller("loginController", function($scope, $state, authentication, $http, $timeout, classifieldsFactory, $mdSidenav, $mdToast, $mdDialog) {

      var self = this; //cls.

      //close login
      self.close = function () {
        $state.go('classifields');
      };

      self.credentials = {
        name : "",
        email : "",
        password : ""
      };

      self.loginSubmit = function() {
        authentication
          .register(self.credentials)
          .error(function(err){
            alert(err);
          })
          .then(function(){
              $state.go('profile');
          });
      };

  });
})();
