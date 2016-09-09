"use strict";

app.controller("SavePinCtrl", function($scope, $routeParams, PinFactory, $location) {
// what if we didn't do a savepinCtrl and instead added this function to the pinlistviewCtrl? I think we actually have to since the add button is located in that html.
$scope.addNewItem = (clickedObject ) => {
  PinFactory.postNewPin(clickedObject)
    .then( (response) => {
      $location.url("/allpins");
    });
  };
});

