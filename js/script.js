$(document).ready(function() {

  $("#send").keyup(
    function(event) {
      if (event.which == 13) {
        var inputValue = $("#send").val();

        if (inputValue != "") {
          var newMessage = $(".clone").clone();
          newMessage.prepend(inputValue);
          $("main").append(newMessage);
          $("#send").val("");
          $(".clone").removeClass(".none");
        }
      }
    }
  )
});
