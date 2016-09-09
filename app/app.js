"use strict";
var app = angular.module("PinterestApp", ["ngRoute"])
.constant('FirebaseURL','https://fake-pinterest-group-project.firebaseio.com/');


app.config(function($routeProvider){

    let isAuth = (AuthFactory) => new Promise( (resolve, reject) =>
     {
        if(AuthFactory.isAuthenticated()) {
            resolve();
        } else {
            reject();
        }
    });

    $routeProvider.
        when("/", {
            templateUrl: "partials/login.html",
            controller: "LoginCtrl"
        }).

        when("/login", {
            templateUrl:"partials/login.html",
            controller: "LoginCtrl"
        }).
        // when("/allboards", {
        //     templateUrl: 'partials/allBoards.html',
        //     controller: "AllBoardsCtrl",
        //     resolve: {isAuth}

        // }).
        // when("/allpins", {
        //     templateUrl: 'partials/pinListView.html',
        //     controller: "pinListViewCtrl",
        //     resolve: {isAuth}
        // }).
        // when('/:boardId', {

        //     templateUrl: "partials/oneBoard.html",
        //     controller: "OneBoardCtrl",
        //     resolve: {isAuth}
        // }).

        // when("/:pinId", {
        //     templateUrl: "partials/savePin.html",
        //     controller: "SavePinCtrl",
        //     resolve: {isAuth}
        // }).

        when("/newboard", {
            templateUrl: "partials/newBoard.html",
            controller: "NewBoardCtrl",
            resolve: {isAuth}
        }).

        otherwise("/");

});


app.run( ($location, FBCreds) => {
    let creds = FBCreds;
    let authConfig = {
        apiKey: creds.key,
        authDomain: creds.authDomain
    };
    firebase.initializeApp(authConfig);
});

















