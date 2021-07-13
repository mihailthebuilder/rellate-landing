// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDsholznCdbPz4N8UdbUaWq71n-2mGantE",
  authDomain: "rellate-e3237.firebaseapp.com",
  projectId: "rellate-e3237",
  storageBucket: "rellate-e3237.appspot.com",
  messagingSenderId: "277175763876",
  appId: "1:277175763876:web:4b23f272fd27f0d0f33731",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();

var queryString = window.location.search;

var email = new URLSearchParams(queryString).get("email");

document.getElementById("emailAddress").innerText = email;
