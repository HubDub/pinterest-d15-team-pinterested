"use strict";

app.controller("NewPinCtrl", function ($scope, PinFactory, $location, $routeParams){
    $scope.title = "Edit Pin";
    $scope.btnText = "Update Pin";
    $scope.newPin = {};


PinFactory.getSinglePin($routeParams.pinId)
.then( (response) => {
    $scope.newPin = response;
})


$scope.addNewPin = function () {
    PinFactory.updatePin($scope.newPin)
    .then(function(){
        $location.url('#/oneBoard');
    });
  };
});
