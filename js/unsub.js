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

document.getElementById("unsubButton").onclick(function () {
  db.collection("users")
    .where("email", "==", email)
    .limit(1)
    .get()
    .then((querySnapshot) => {
      if (!querySnapshot.empty) {
        //We know there is one doc in the querySnapshot
        const queryDocumentSnapshot = querySnapshot.docs[0];
        return queryDocumentSnapshot.ref.delete();
      } else {
        console.error("No document corresponding to the query!");
        return null;
      }
    });
});
