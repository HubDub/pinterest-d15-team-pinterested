"use strict";

app.controller("EditBoardCtrl", function (PinFactory, $scope, $location, $routeParams) {

  $scope.title = "Edit Board";
  $scope.btnText = "Save Edited Board";
  $scope.newTask = {};

//this is the function to get the board object and send them to the form. but, while the edit controller is definitely talking to the html (adds correct title and button name) it is not populating the existing information about the board object into the fields. console says it can't read "boardId"
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

