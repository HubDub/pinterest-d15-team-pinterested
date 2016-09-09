"use strict";

app.controller("NewPinCtrl", function ($scope, PinFactory, $location){
    $scope.title = "Edit Pin";
    $scope.btnText = "Update Pin";
    $scope.newPin = {
        caption: '',
        keyWords: ''
    };


$scope.addNewPin = function () {
    PinFactory.updatePin($scope.newPin)
    .then(function(){
        $location.url('#/oneBoard');
    });
};
});
