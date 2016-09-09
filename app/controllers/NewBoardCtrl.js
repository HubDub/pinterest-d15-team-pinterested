"use strict";

app.controller("NewBoardCtrl", function ($scope, PinFactory, $location){
    $scope.title = "Add New Board";
    $scope.btnText = "Save Board";
    $scope.newBoard = {
        name: "",
        description: "",
        uid: $scope.$parent.getUser()
    };


$scope.addNewBoard = function () {
    PinFactory.postNewBoard($scope.newBoard)
    .then(function(){
        $location.url('#/allboards');
    });
 };
});
