"use strict";


app.controller("AllBoardsCtrl", function ($scope, PinFactory, $routeParams, $location) {
  // let userBoards = [];

  let user = $scope.$parent.getUser();
  let boardId = [];
  let pins = [];



  PinFactory.getUserBoards(user)
    .then( (boards) => {
      $scope.boards = boards;
      console.log('these are the boards', $scope.boards);
      // return userBoards;
    });

  $scope.deleteYourBoard = function(boardId) {
    console.log("you're in deleteYourBoard and your boardId is:", boardId);
    PinFactory.deleteABoard(boardId)
      .then(function(){
        $location.url("#/allBoards");
      });
  };


  // PinFactory.getUserPins(board.id)
  // .then((result) => {
  // console.log('result of get user pins', result)
  // $scope.pins = result;
  //     })

  PinFactory.getAllPins()
  .then((pins) => {
    $scope.pins = pins;
  });

});



