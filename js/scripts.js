$(document).ready(function() {

  $("#formCard").submit(function(event) {
  var userInput = $("input#user1").val();

  $(".user").text(userInput);

  $("#postCard").show();

  event.preventDefault();
  });
});
