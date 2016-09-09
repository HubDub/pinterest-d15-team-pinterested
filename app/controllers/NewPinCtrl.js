"use strict";

app.controller("NewPinCtrl", function ($scope, PinFactory, $location){
    $scope.title = "Add New Pin!";
    $scope.btnText = "Save";
    $scope.newPin = {
        caption: '',
        keyWords: '',
        photo:''
    };


$scope.addNewPin = function () {
    PinFactory.postNewPin($scope.newPin)
    .then(function(){
        $location.url('#/allpins');
    });
};
});
