"use strict";
var app = angular.module("PinterestApp", ["ngRoute"])
.constant('FirebaseURL','https://pinterest-75ff6.firebaseio.com/');


app.run( ($location, FBCreds) => {
    let creds = FBCreds;
    let authConfig = {
        apiKey: creds.key,
        authDomain: creds.authDomain
    };
    firebase.initializeApp(authConfig);
});

















