"use strict";

app.controller("OneBoardCtrl", function ($routeParams, $scope, $location, PinFactory) {

  PinFactory.getSingleBoard($routeParams.boardId)
  .then( (singleBoard) => {
    console.log("inside getSingleBoard", singleBoard);
    return singleBoard;
  });

  $scope.editOneBoard = () => {
    PinFactory.updateBoard($routeParams.boardId) //what is the name of her editboard object to be passed in here?
      .then( (response) => {
        $location.url("/oneBoard/:{boardId}");
      });
  };

  $scope.deleteOneBoard = (boardId) => {
    console.log("you are in deleteOneBoard");
    PinFactory.deleteABoard(boardId)
    .then( (response) => {
      $location.url("/allBoards");
    });
  };

  $scope.deletePinOnBoard = (pinId) => {
    console.log("you are in deletePinOnBoard");
    PinFactory.deletePin(pinId)
      .then( (response) => {
        $location.url("/oneBoard/:{boardId}");
      });
  };
});