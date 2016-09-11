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

    //OK, only pulling back one board ID

//this is getting back every user pin while still within the board loop and associating each pin retrieved pin with all the user boards, regardless of board ID on pin?

//maybe push each pin into the boards array without using a pins array?


});
