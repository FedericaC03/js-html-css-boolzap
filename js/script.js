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
  $(".chat-conversation.active").append(newMessage);
  $("#send").val("");
  answer();
  angleDown();
  finestra();
  deleteBubble();
  $(".friend-chat h6").text("sta scrivendo...");
 }
}

//FUNCTION ANSWER ( THE CPU WILL ANSWER WITH OK AFTER 1 SECOND )
function answer() {
  setTimeout(function(){
    var answer = $(".template-answer .clone").clone();
    answer.children(".b-white").prepend("ok");
    answer.find(".b-white .time").text(time);
    $(".chat-conversation.active").append(answer);
    angleDown();
    finestra();
    deleteBubble();
    $('.chat').animate({scrollTop:$(".chat").height()}, 'slow');
    $(".friend-chat h6").text("Ultimo accesso oggi alle " + time);
    $(".friend.active .last-time").text(time);
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

//FUNCTION CLICK ANGLEDOWN, WINDOW APPEAR
function finestra() {
  $(".fa-angle-down").click(
    function() {
        $(this).next().toggle();
      }
  );
}
finestra();

 //DELETE FUNCTION
 function deleteBubble() {
   $(".delete").click(
     function() {
         $(this).parents(".bubble").hide();
       }
   );
 }
deleteBubble();


//FUNCTION SWITCH CHAT
function chat() {
  $('.friend').click(function () {
      var valueContact = $(this).data();
      valueContact = $(this).index();
      var valueChat = $(".chat-conversation[data-conversation="+valueContact+"]").data();
      valueChat = $(".chat-conversation[data-conversation="+valueContact+"]").index();

      $(".friend").removeClass("active");
      $(this).addClass("active");

      $(".chat-conversation").removeClass("active");
      $("[data-conversation=" + valueChat + "]").addClass("active");

      //REPLACE NAME ACTIVE
      var textName = $(this).find(".name").text();
      var nameFriend = $("#nameActive").text(textName);

      //REPLACE IMG ACTIVE
      var imgActive = $(".friend-chat img");
      var imgFriend = $(this).find(".avatar").clone();
      imgActive.replaceWith(imgFriend);
  });
}
chat();
