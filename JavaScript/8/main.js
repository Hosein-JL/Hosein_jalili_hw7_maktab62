$(document).ready(function () {
  $(".heading").click(function () {
    if ($(this).next(".collapse-body").css("display") == "block") {
      $(".collapse-body").slideUp();
      $(this).children(".collapse-controls").addClass("open");
    } else {
      $(this).next(".collapse-body").slideDown();
      $(this).children(".collapse-controls").removeClass("open");
    }
  });
  $("#first").hover(
    function () {
      $("#first").css("background-color", "#F3EEC7");
    },
    function () {
      $("#first").css("background-color", "white");
    }
  );
  $("#secend").hover(
    function () {
      $("#secend").css("background-color", "#F3EEC7");
    },
    function () {
      $("#secend").css("background-color", "white");
    }
  );
  $("#third").hover(
    function () {
      $("#third").css("background-color", "#F3EEC7");
    },
    function () {
      $("#third").css("background-color", "white");
    }
  );
});
