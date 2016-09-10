"use strict";

app.factory("PinFactory", ($q, $http, FirebaseURL) => {

let getAllPins = () => {
  let pins = [];
  return $q( (resolve, reject) => {
    $http.get(`${FirebaseURL}pins.json`)
    .success((pinObject) => {
      Object.keys(pinObject).forEach((key) => {
        pinObject[key].id = key;
        pins.push(pinObject[key]);
      });
    resolve(pins);
    })
    .error((error) => {
      reject(error);
    });
  });
};


 let getUserBoards = (userId) => {
  let boards = [];
  return $q( (resolve, reject) => {
    $http.get(`${FirebaseURL}boards.json?orderBy="uid"&equalTo="${userId}"`)
    .success((boardObject) => {
      console.log("in getUserBoards", boardObject);
      Object.keys(boardObject).forEach((key) => {
          boardObject[key].id = key;
          boards.push(boardObject[key]);
        });
      resolve(boards);
      })
    .error((error) => {
      reject(error);
    });
  });
};

let getOneBoardPins = (boardId) => {
  return $q( (resolve,reject) => {
    $http.get(`{FirebaseURL}?orderBy="boardId"&equalTo="${boardId}"`)
    .success((boardPins) => {
      resolve(boardPins);
    })
    .error( (error) => {
      reject(error);
    });
  });
};


let postNewPin = function(newPin){
  return $q(function(resolve, reject){
    $http.post(`${FirebaseURL}pins.json`, JSON.stringify(newPin))
    .success( (ObjFromFirebase) => {
      resolve(ObjFromFirebase);
    })
    .error( (error) => {
      reject(error);
    });
  });
};

let postNewBoard = function(newBoard){
  return $q(function(resolve, reject){
    $http.post(`${FirebaseURL}boards.json`, JSON.stringify(newBoard))
    .success( (ObjFromFirebase) => {
      resolve(ObjFromFirebase);
    })
    .error( (error) => {
      reject(error);
    });
  });
};

let deletePin = (pinId) => {
  return $q( (resolve, reject) => {
    $http.delete(`${FirebaseURL}pins/${pinId}.json`)
    .success( (ObjFromFirebase) => {
      resolve(ObjFromFirebase);
    });
  });
};


//to edit a pin!
let getSinglePin = (pinId) => {
  return $q ( (resolve, reject) => {
    $http.get(`${FirebaseURL}pins/${pinId}.json`)
    .success( (pinObject) => {
      resolve(pinObject);
    })
    .error( (error) => {
      reject(error);
    });
  });
};

//post edited pin back to firebase with only changed parts (as oppsoed to "put")
let updatePin = (pinId, editedPin) => {
  return $q( (resolve, reject) => {
    $http.patch(`${FirebaseURL}pins/${pinId}.json`, JSON.stringify(editedPin))
    .success( (pinObject) => {
      resolve(pinObject);
    })
    .error( (error) => {
      reject(error);
    });
  });
};

 let getDropdownBoards = (userId) => {

  return $q( (resolve, reject) => {
    $http.get(`${FirebaseURL}boards.json?orderBy="uid"&equalTo="${userId}"`)
    .success((boardObject) => {
      console.log('this is what we return before printing in dropdown', boardObject);
      resolve(boardObject);
      })
    .error((error) => {
      reject(error);
    });
  });
};

let getSingleBoard = (boardId) => {
  return $q ( (resolve, reject) => {
    $http.get(`${FirebaseURL}boards/${boardId}.json`)
    .success( (boardObject) => {
      resolve(boardObject);
    })
    .error( (error) => {
      reject(error);
    });
  });
};

let updateBoard = (boardId, editedBoard) => {
  return $q ( (resolve, reject) => {
    $http.put(`${FirebaseURL}boards/${boardId}.json`, JSON.stringify(editedBoard))
    .success( (boardObject) => {
      resolve(boardObject);
    })
    .error( (error) => {
      reject(error);
    });
  });
};

let deleteABoard = (boardId) => {
  return $q ( (resolve, reject) => {
    $http.delete(`${FirebaseURL}boards/${boardId}.json`)
    .success( (response) => {
      resolve(response);
    })
    .error( (error) => {
      reject(error);
    });
  });
};

return {getAllPins, getSinglePin, postNewPin, deletePin, updatePin, getSingleBoard, updateBoard, getUserBoards, postNewBoard, deleteABoard, getDropdownBoards};

});






