"use strict";

app.controller("AllBoardsCtrl", function ($scope, PinFactory, $routeParams) {
  let boards = [];
  let user = $scope.$parent.getUser();
  let boardId;
  let pins = [];
  let boardIdsArr = [];

//The function below gets the user boards from FB; then, before it is finished, it gets userPins based on the board ID.
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
      console.log(boards)
    })

   //the problem is right below: even though a loop is running based on the length of the boards array obtained above, getUserPins is only being called on one of the boards in the array, not all of them.

    for (var i = 0; i < boards.length; i++) {
    PinFactory.getUserPins(boardId)
    .then((result) => {
      console.log('result of get user pins', result)
      $scope.pins = result;
      })
      }
    });


});
