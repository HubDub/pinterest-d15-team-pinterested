"use strict";

app.controller("PinListViewCtrl", function ($scope, PinFactory, $routeParams ){

    $scope.pins = [];


    PinFactory.getAllPins($scope.$parent.getUser())

    .then( (pinListArr) => {
        $scope.pins = pinListArr;


        $scope.selectedPin = $scope.pins.filter(function(pin){

            return pin.id === $routeParams.pinId;
        })[0];
    });
    // PinFactory.
});
