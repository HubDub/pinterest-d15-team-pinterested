"use strict";

app.controller("EditBoardCtrl", function (PinFactory, $scope, $location, $routeParams) {

  $scope.title = "Edit Board";
  $scope.btnText = "Save Edited Board";
  $scope.newTask = {};

  PinFactory.getSingleBoard($routeParams.boardId)
    .then ( (board) => {
      console.log("we are in EditBoardCtrl getSingleBoard", board);
      $scope.newTask = board;
    });

  $scope.addNewBoard = () => {
    PinFactory.updateBoard($routeParams.boardId, $scope.newTask)
      .then ( (response) => {
        $location.url("/:boardId");
      });
  };
});