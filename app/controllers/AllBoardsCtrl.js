"use strict";

app.controller("AllBoardsCtrl", function ($scope, PinFactory, $routeParams, $location) {
  // let userBoards = [];

  PinFactory.getUserBoards($scope.$parent.getUser())
    .then( (boards) => {
      console.log("we are in getAllBoards these are boards", boards);
      // for (var board in boardObj) {
      //   boardObj[board].id = board;
      //   userBoards.push(boardObj[board]);
      // }
      // console.log("you have boards", boards);
      $scope.boards = boards;
      // return userBoards;
    });

  $scope.deleteYourBoard = function(boardId) {
    console.log("you're in deleteYourBoard and your boardId is:", boardId);
    PinFactory.deleteABoard(boardId)
      .then(function(){
        $location.url("#/allBoards");
      });
  };
});
