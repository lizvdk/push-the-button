$(document).ready(function(){
  var myDataRef = new Firebase("https://push-the-button-yo.firebaseio.com/");

  $("#the-button").click(function(){
    myDataRef.push({createdAt: Firebase.ServerValue.TIMESTAMP });
  });

  myDataRef.on('child_added', function(snapshot) {
    var entry = snapshot.val();
    displayEntry(entry.createdAt);
  });
});

function displayEntry(createdAt) {
  $('<li>').text(moment(createdAt).format("dddd, MMMM Do YYYY, h:mm:ss a")).prependTo("#log");
}
