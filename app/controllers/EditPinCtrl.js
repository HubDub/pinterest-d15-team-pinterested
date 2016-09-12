"use strict";

app.controller("EditPinCtrl", function ($scope, PinFactory, $location, $routeParams){
    $scope.title = "Edit Pin";
    $scope.btnText = "Update Pin";
    $scope.newPin = {};


PinFactory.getSinglePin($routeParams.pinId)
.then( (response) => {
  console.log("response from getsinglepin", response);
    $scope.newPin = response;
});


$scope.addNewPin = function () {
  console.log("add new pin is running");
    PinFactory.updatePin($routeParams.pinId, $scope.newPin)
    .then(function(){
        $location.url('/allboards');
    });
  };
});
