"use strict";

app.controller("PinListViewCtrl", function ($scope, PinFactory, $routeParams, $window, $location ){

let userId = $scope.$parent.getUser();



    $scope.pins = [];

    PinFactory.getAllPins()


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



$scope.userBoards = function(){
   let boards = [];
    console.log(userId);
    PinFactory.getDropdownBoards(userId)
    .then( (boardArray) => {
      console.log("we are in getUserBoards", boardArray);
      for (var board in boardArray) {
       boards.push(boardArray[board]);
       // boards.push(boardArray[board].name)
      }
      // console.log(boards)
     $scope.boards = boards;
      console.log($scope.boards);
      // return boards;
            // $scope.boards = boardArray;
      // console.log("you have an array of boards", boardArray);
    });
};

});
