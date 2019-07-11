console.log("app.js linked to index.html");

// do not delete this
var db = firebase.firestore();


///////////////
// Create a reference to the SF doc.
var taskRef = db.collection("Project").doc("task")
  .collection('tasks').add({
    taskName: "new task"
  })