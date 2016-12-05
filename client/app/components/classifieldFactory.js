(function() {
  "use strict";
  angular
    .module('angularCls')
    .factory('classifieldsFactory', function($http) {

      var urlBase = 'http://localhost:3000/classifields';
      var dataFactory = {};

      // Get data from server
      dataFactory.getClassifields = function () {
        return $http.get(urlBase);
      };

      dataFactory.getClassifield = function (id) {
          return $http.get(urlBase + id);
      };
      // Add new Classifield
      dataFactory.addClassifields = function (clsdata) {
          return $http.post(urlBase, clsdata);
      };

      dataFactory.updateClassifield = function (clsdata) {
          return $http.put(urlBase + clsdata._id, clsdata);
      };

      dataFactory.deleteClassifield= function (c) {
          return $http.delete(urlBase + c._id);
      };

      return dataFactory;

    });
})();
