"use strict";

app.controller("PinListViewCtrl", function ($scope, PinFactory, $routeParams, $window, $location, SearchTermData){

$scope.searchText = SearchTermData;

let userId = $scope.$parent.getUser();
    $scope.pins = [];
    PinFactory.getAllPins()
    .then( (pinListArr) => {
        $scope.pins = pinListArr;
        $scope.selectedPin = $scope.pins.filter(function(pin){
            return pin.id === $routeParams.pinId;
        })[0];
    });

    $scope.boards = [];
    PinFactory.getUserBoards(userId)
    .then( (boardsArray) => {
      $scope.boards = boardsArray;
        console.log("auto running get user boards",boardsArray);

      boardsArray.forEach(function (board) {
        let boardId = board.id;
        // console.log(board);
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

$scope.addBoardIdtoPin = (pin, boardId, pinId) =>{
    let pinToEdit;
PinFactory.getSinglePin(pinId)
.then(function(result) {
    pinToEdit = result;
    console.log('this is the pin to which we are taking the board ID', pinToEdit);
  let pinSaveToast = `<span><h4 style="color:orchid">You've saved this pin to a board! Good job!</h4></span>`;
  Materialize.toast(pinSaveToast, 2000);


pinToEdit.boardId = boardId;
console.log('this pin should have the board ID attached', pinToEdit);
// let pinWithBoardId = pin;
// console.log(pinWithBoardId)
PinFactory.updatePin(pinId, pinToEdit)
.then(()=> {console.log('pin updated');
    $location.url("/allpins");
});
});
};
});


//  $scope.getBoardAndPinId = function(boardId, pinId, pin) {

// console.log('this is the board Id you need to attach to the pin', boardId, 'this is the pinId you want to attach the board id to', pinId, 'this is the pin in question', pin)
// // let pinBoardId = [];
// let pinBoardId = boardId;
// PinFactory.getSinglePin(pinId)
// .then( () => {

//     // console.log(pin)
//     pin.boardId = pinBoardId;
//     return pin;
// })
// // console.log(pin)
// // PinFactory.updatePin(pinId, pin)
// // .then( () => {
// //     console.log(pin)
// // })
// console.log(pin)
// }





// $scope.retrieveDropdownBoards =


    // console.log(pinId, boardId, pin)
    // let pinEdited = pin;
    // pinEdited.boardId = boardId;
    // console.log(pinEdited)
    // PinFactory.updatePin(pinId, pinEdited)
    // .then(() => {console.log('what the eff is happening')}
    //     )
 //    let pinBoardId = boardId;
 //    PinFactory.getSinglePin(pinId)
 //    .then(function (){
 //    console.log('this is the pin retrieved from FB', pin, 'this is the pin id of that pin', pinId, 'this is the board id we need to associate with that pin', boardId)
 //    pin[boardId]= pinBoardId;
 //    console.log(pin)

 // })

// function userBoards(){
//    let boards = [];

//     // console.log(userId);
//     PinFactory.getDropdownBoards(userId)
//     .then( (boardArray) => {
//       console.log("we are in getUserBoards", boardArray);
//       for (var board in boardArray) {
//         boardArray[board].id = board;
//         console.log(board.id, "board.id")
//         console.log("board", board);
//         console.log("boardArray", boardArray);
//         console.log("boardArray[board]", boardArray[board]);
//      $scope.boards = boards;
//       console.log("$scope.boards", $scope.boards);
//         // console.log('board', board, 'boardArray', boardArray)
//           return PinFactory.updateBoard(board, boardArray[board]);
//       // console.log("board id?", board)
//      }
//     })
//       // board.id = board; //am I pushing this onto each board object as a its own property??????

//       // .then( () => {

//       //  boards.push(boardArray[board])
//       //  boards.forEach(function (board){
//       //   console.log(boardArray);
//       //  })
//       //  console.log(boards)
//       //  // boards.push(boardArray[board].name)
//       // })
//       // console.log(boards)

//       // return boards;

