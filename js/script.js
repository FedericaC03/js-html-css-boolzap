$(document).ready(function() {
  //SEND MESSAGE WITH ENTER
  $("#send").keyup(
    function(event) {
      if (event.which == 13) {
        sendMessage();
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
    }
  );

//AFTER MY MESSAGE, THE CPU WILL ANSWER WITH OK AFTER 1 SECOND

});

//FUNCTION SEND MESSAGE
function sendMessage() {
var inputValue = $("#send").val();

if (inputValue != "") {
 var newMessage = $(".template .clone").clone();

 var date = new Date();
 var hours = date.getHours();
 var minutes = date.getMinutes();

 if (minutes < 10) {
   var time = hours + ":0" + minutes;
 } else {
   var time = hours + ":" + minutes;
 }

  newMessage.children(".b-green").prepend(inputValue);
  newMessage.find(".b-green .time").text(time);
  $(".chat").append(newMessage);
  $("#send").val("");
 }
}
