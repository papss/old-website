$(document).ready(function() {

  // SCROLLIFY FUNCTIONS:
  // selects sections:
  $.scrollify({
    section: ".section",
    interstitialSection: ".footer", 
    scrollbars: false,
  });

  // navigation:
  $(".first").click(
    function() {
      $.scrollify.move("#1");
    }
  );

  $(".second").click(
    function() {
      $.scrollify.move("#2");
    }
  );

  $(".third").click(
    function() {
      $.scrollify.move("#3");
    }
  );

  $(".fourth").click(
    function() {
      $.scrollify.move("#4");
    }
  );

  // OTHER FUNCTIONS:
  $("li").hover(
    function() {
      $(this).css("color", "white");
    }, function() {
      $(this).css("color", "black");
    }
  );

})
