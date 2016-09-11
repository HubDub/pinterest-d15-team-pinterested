"use strict";

app.controller("AllBoardsCtrl", function ($scope, PinFactory, $routeParams) {
  let boards = [];
  let user = $scope.$parent.getUser();
  let boardId;
  let pins = [];

  PinFactory.getUserBoards(user)
    .then( (boards) => {
      console.log("we are in getAllBoards these are boards", boards);
      // for (var board in boardObj) {
      //   boardObj[board].id = board;
      //   userBoards.push(boardObj[board]);
      // }
      // console.log("you have boards", boards);
      $scope.boards = boards;
      boards.forEach(function(board){
        // console.log(board.id)
        boardId = board.id
      })
      console.log(boardId)
     // console.log(boards)

    PinFactory.getUserPins(boardId)
    .then((result) => {
      console.log('result of get user pins', result)
      $scope.pins = result;
    })
    });




});
