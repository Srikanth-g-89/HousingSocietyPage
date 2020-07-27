// client-side js, loaded by index.html
// run by the browser each time the page is loaded

(function () {
  'use strict';

angular.module('HousingApp', [])
.controller('HousingAppController', HousingAppController)
.service ('HousingAppService',HousingAppService)
.constant('ApiBasePath', "https://simplistic-sunrise-atmosphere.glitch.me/");
  
HousingAppController.$inject = ['$scope','HousingAppService']; 
  
function HousingAppController ($scope,HousingAppService) {
  var housingdetails = this;
    $scope.ownername='';
    $scope.flatno='';
    $scope.mobilenum='';

  $scope.addmem=false;
  $scope.addmember = function () {
         $scope.addmem= !$scope.addmem;
         return $scope.addmem;
    };  

  
  $scope.paymem=false;
  $scope.paymemfunc = function () {
         $scope.paymem=!$scope.paymem;
         return $scope.addmem;
    }; 
  
  
  housingdetails.addowner= function () { 
    var addmemberdata = {
    name :housingdetails.ownername,
    flat: housingdetails.flatno,
    mobilenum : housingdetails.mobilenum
  };
    
   console.log(addmemberdata);
   var promise =  HousingAppService.addownerdetailsservice(addmemberdata);
 
    promise.then(function (response) {
    console.log ('owner details added')
    })
  .catch(function (error) {
    console.log("Something went terribly wrong.");
  });
}
  

}
 
  
HousingAppService.$inject = ['$http','ApiBasePath'];
function HousingAppService($http,ApiBasePath) {
  var service = this;
  
  service.addownerdetailsservice = function (senddata) {

      var response = $http({
      method: "POST",
      url: ApiBasePath,
      data : JSON.stringify(senddata),
      headers: {'Content-Type': 'application/JSON'}
      });
    return response;
  };
  
}
  



})();


