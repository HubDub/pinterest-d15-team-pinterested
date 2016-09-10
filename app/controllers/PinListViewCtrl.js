"use strict";

app.controller("PinListViewCtrl", function ($scope, PinFactory, $routeParams, $window, $location ){

let userId = $scope.$parent.getUser();
    $scope.pins = [];
    PinFactory.getAllPins()
    .then( (pinListArr) => {
        $scope.pins = pinListArr;
        $scope.selectedPin = $scope.pins.filter(function(pin){
            return pin.id === $routeParams.pinId;
        })[0];
    });

    $scope.boards = []
    PinFactory.getUserBoards(userId)
    .then( (boardsArray) => {
      $scope.boards = boardsArray;
        console.log("auto running get user boards",boardsArray);

      boardsArray.forEach(function (board) {
        let boardId = board.id;
        console.log(board);
        PinFactory.updateBoard(boardId, board);
        console.log("boardId", boardId);
      });
    });

$scope.addNewPin = (clickedPin ) => {
    console.log(clickedPin);
  PinFactory.postNewPin(clickedPin)
    .then( (response) => {
      $location.url("/allpins");
  });
};

// $scope.retrieveDropdownBoards =


function userBoards(){
   let boards = [];

    console.log(userId);
    PinFactory.getDropdownBoards(userId)
    .then( (boardArray) => {
      console.log("we are in getUserBoards", boardArray);
      for (var board in boardArray) {
        boardArray[board].id = board;
        console.log(board.id, "board.id")
        console.log("board", board);
        console.log("boardArray", boardArray);
        console.log("boardArray[board]", boardArray[board]);
     $scope.boards = boards;
      console.log("$scope.boards", $scope.boards);
        // console.log('board', board, 'boardArray', boardArray)
          return PinFactory.updateBoard(board, boardArray[board]);
      // console.log("board id?", board)
     }
    })
      // board.id = board; //am I pushing this onto each board object as a its own property??????

      // .then( () => {

      //  boards.push(boardArray[board])
      //  boards.forEach(function (board){
      //   console.log(boardArray);
      //  })
      //  console.log(boards)
      //  // boards.push(boardArray[board].name)
      // })
      // console.log(boards)

      // return boards;

    };
});
