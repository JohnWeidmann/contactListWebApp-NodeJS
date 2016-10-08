$( "edit-btn" ).click(function() {
  $button_add = $("#add-btn");
  $button_add.css("display","none");
  $button_update = $("#update-btn");
  $button_update.css("display","block");
});

$( "update-btn ").click(function() {
  $button_add = $("#add-btn");
  $button_update = $("#update-btn");
  $button_add.css("display","block");
  $button_update.css("display","none");
});
