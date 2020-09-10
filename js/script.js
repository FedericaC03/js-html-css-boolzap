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
  answer();
  angleDown()
 }
}

//FUNCTION ANSWER ( THE CPU WILL ANSWER WITH OK AFTER 1 SECOND )
function answer() {
  setTimeout(function(){
    var answer = $(".template-answer .clone").clone();
    answer.children(".b-white").prepend("ok");
    answer.find(".b-white .time").text(time);
    $(".chat").append(answer);
    angleDown()
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


// FUNCTION SEARCH FRIENDS
var friends = $("#my-friends");

$("#search").keyup(function(){
  var textSearch = $('#search').val().toLowerCase().trim();
  friends.children().hide();

  $(".friend").each(function() {
    var userName = $(this).find(".name").text().toLowerCase();

    if ( userName.includes(textSearch) ){
    $(this).show();
    }
  })
})

// FUNCTION ANGLEDOWN
function angleDown() {
  $(".bubble .b-green").hover(
    function () {
      $(this).find(".fa-angle-down").toggle();
      }
  );

  $(".bubble .b-white").hover(
    function () {
      $(this).find(".fa-angle-down").toggle();
      }
  );
}
angleDown();
