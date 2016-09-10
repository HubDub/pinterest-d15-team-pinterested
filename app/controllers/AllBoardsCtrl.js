"use strict";

app.controller("AllBoardsCtrl", function ($scope, PinFactory, $routeParams) {
  let userBoards = [];

  PinFactory.getUserBoards($scope.$parent.getUser())
    .then( (boardObj) => {
      console.log("we are in getAllBoards", boardObj);
      for (var board in boardObj) {
        boardObj[board].id = board;
        userBoards.push(boardObj[board]);
      }
      console.log("you have boards", userBoards);
      $scope.boards = userBoards;
      return userboards;

    });
});
