$(document).ready(function() {
  $("#toggle-facts").click(function() {
    $("#facts").toggle();
  });

  $("#toggle-food").click(function() {
    $("#food").toggle();
  });

  $("#toggle-location").click(function() {
    $("#location").toggle();
  });

  $("#toggle-wild").click(function() {
    $("#wild").toggle();
  });

  $("#toggle-tiger1").click(function() {
    $("#tiger1").fadeToggle();
  });

  $("#toggle-tiger2").click(function() {
    $("#tiger2").fadeToggle();
  });

  $("#slide-toggle").click(function() {
    $("#list").slideToggle();
  });

});
