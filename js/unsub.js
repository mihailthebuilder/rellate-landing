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

document.getElementById("unsubButton").onclick = function () {
  db.collection("users")
    .where("email", "==", email)
    .limit(1)
    .get()
    .then((querySnapshot) => {
      if (!querySnapshot.empty) {
        //We know there is one doc in the querySnapshot
        const queryDocumentSnapshot = querySnapshot.docs[0];
        queryDocumentSnapshot.ref.delete().then(() => {
          document.getElementById("unsubContainer").innerHTML =
            "You have been unsubscribed!";
        });
      } else {
        document.getElementById("unsubContainer").innerHTML =
          "Something went wrong. Please reach out to Mihail on <a href='https://twitter.com/mihailbuilds'>Twitter</a> or at hello.rellate@gmail.com";
        console.error("No document corresponding to the query!");
        return null;
      }
    });
};
