$(document).ready(function() {
  //SEND MESSAGE WITH ENTER
  $("#send").keyup(
    function(event) {
      if (event.which == 13) {
        sendMessage();
        answer();
      }
    }
  );

//UPON CLICKING ON INPUT, THE MICROPHONE ICON CHANGES TO AIRPLANE
  $("#send").click(
    function() {
      $("#microphone").hide();
      $("#paper-plane").show();
    }
  );

//SEND MESSAGE BY CLICKING ON PAPERPLANE
  $("#paper-plane").click(
    function() {
      sendMessage();
      answer();
    }
  );

//AFTER MY MESSAGE, THE CPU WILL ANSWER WITH OK AFTER 1 SECOND

});

//FUNCTION SEND MESSAGE
function sendMessage() {
var inputValue = $("#send").val();
if (inputValue != "") {
 var newMessage = $(".template .clone").clone();



  newMessage.children(".b-green").prepend(inputValue);
  newMessage.find(".b-green .time").text(time);
  $(".chat").append(newMessage);
  $("#send").val("");
 }

}


//FUNCTION ANSWER
function answer() {
  setTimeout(function(){
    var answer = $(".template-answer .clone").clone();
    answer.children(".b-white").prepend("ok");
    answer.find(".b-white .time").text(time);
    $(".chat").append(answer);

  }, 1000);
}


//FUNCTION GET TIME
var date = new Date();
var hours = date.getHours();
var minutes = date.getMinutes();

if (minutes < 10) {
  var time = hours + ":0" + minutes;
} else {
  var time = hours + ":" + minutes;
}
