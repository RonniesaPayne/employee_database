var config = {
  apiKey: "AIzaSyDOxW25jGf1zta9DbuRNDnu8y_DOWngOc8",
  authDomain: "employee-database-fc629.firebaseapp.com",
  databaseURL: "https://employee-database-fc629.firebaseio.com/",
  projectId: "employee-database-fc629",
  storageBucket: "",
  messagingSenderId: "516436025072"
};
firebase.initializeApp(config);
// Create a variable to reference the database.
var database = firebase.database();

// Initial Values
var newName = "";
var newRole = "";
var newDate = 0;
var newRate = "";

// Capture Button Click
$("#submit").on("click", function(event) {
  event.preventDefault();

  // Grabbed values from text boxes
  newName = $("#newName").val().trim();
    newRole = $("#newRole").val().trim();
    newDate = $("#newDate").val().trim();
    newRate = $("#newRate").val().trim();

  // Code for handling the push
  database.ref().push({
    newName: newName,
    newRole: newRole,
    newDate: newDate,
    newRate: newRate,
    dateAdded: firebase.database.ServerValue.TIMESTAMP
  });
});

// Firebase watcher .on("child_added"
database.ref().on(
  "child_added",
  function(snapshot) {

    // storing the snapshot.val() in a variable for convenience
    var sv = snapshot.val();

    // Console.loging the last user's data
    console.log(sv.newName);
    console.log(sv.newRole);
    console.log(sv.newDate);
    console.log(sv.newRate);

    // Change the HTML to reflect
    $("#empName").text(sv.newName);
    $("#empRole").text(sv.newRole);
    $("#empDate").text(sv.newDate);
    $("#empRate").text(sv.newRate);
},
  function(errorObject) {
    console.log("Errors handled: " + errorObject.code);
  }
);
    // Handle the errors

  