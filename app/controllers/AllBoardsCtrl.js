"use strict";

app.controller("AllBoardsCtrl", function ($scope, PinFactory, $routeParams) {
  // let boards = [];
  let user = $scope.$parent.getUser();
  let boardId = [];
  let pins = [];


  PinFactory.getUserBoards(user)
    .then( (boards) => {
      $scope.boards = boards;
      console.log('these are the boards', $scope.boards)
    })

  // PinFactory.getUserPins(board.id)
  // .then((result) => {
  // console.log('result of get user pins', result)
  // $scope.pins = result;
  //     })

  PinFactory.getAllPins()
  .then((pins) => {
    $scope.pins = pins;
  })

   });


