"use strict";

app.controller("PinListViewCtrl", function ($scope, PinFactory, $routeParams, $location ){

    $scope.pins = [];


    PinFactory.getAllPins($scope.$parent.getUser())

    .then( (pinListArr) => {
        $scope.pins = pinListArr;


        $scope.selectedPin = $scope.pins.filter(function(pin){

            return pin.id === $routeParams.pinId;
        })[0];
    });

$scope.addNewPin = (clickedPin ) => {
    console.log(clickedPin);
  PinFactory.postNewPin(clickedPin)
    .then( (response) => {
      $location.url("/allpins");
  });
};

$scope.makeNewBoard =  () => {
        return $location.url("/newboard");
    };
});
