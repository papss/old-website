$(document).ready(function() {

  // SCROLLIFY FUNCTIONS:
  // selects sections:
  $.scrollify({
    section: ".section",
    interstitialSection: ".footer",
    scrollbars: false,
    before: function(i, sections) {

      var ref = sections[i].attr("data-section-name");
      $(".menu .active").removeClass("active");
      $(".menu").find("a[href=\"#" + ref + "\"]").addClass("active");

    },
    // renders the nav menu:
    afterRender: function() {

      var menu = "<ol class=\"menu\">";
      var activeClass = "";
      $(".section").each(function(i) {
        activeClass = "";
        if(i===0) {
          activeClass = "active";
        }
        menu += "<li><a class=\"nav " + activeClass + "\" href=\"#" + $(this).attr("data-section-name") + "\"><span>" + $(this).attr("data-section-name") + "</span></a></li>";
      });
      menu += "</ol>";
      $(".left").append(menu);
      $(".menu a").on("click", $.scrollify.move);
    }

  });
});
