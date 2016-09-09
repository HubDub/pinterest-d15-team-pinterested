"use strict";

app.controller("PinListViewCtrl", function ($scope, PinFactory, $routeParams ){

    $scope.pins = [];


    PinFactory.getAllPins($scope.$parent.getUser()) //Controller told to retrieve item list from factory

    .then( (pinListArr) => { // Once we have the list (itemCollectionArr), we equate it with the $scope.items array

        $scope.pins = pinListArr;


        $scope.selectedPin = $scope.pins.filter(function(pin){ //Here we create a property on controller that equates the item's ID (which itself is an object key drawn from Firebase) with routeParams, e.g., the Angular stand-in for multiple ID's we don't create manually (ID's drawn from Firebase ==> again, unclear why we have to do this instead of just passing in item.id through string interpolation, i.e., ${item.id})

            return pin.id === $routeParams.pinId;
        })[0]; //Filter returns an array, always, so have to select [0] for first object (this is an array that contains one object)
    });
});
