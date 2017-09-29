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
    afterRender: function() {

      var menu = "<ol class=\"menu\">";
      var activeClass = "";
      $(".section").each(function(i) {
        activeClass = "";
        if(i===0) {
          activeClass = "active";
        }
        menu += "<li><a class=\"" + activeClass + "\" href=\"#" + $(this).attr("data-section-name") + "\"><span>" + $(this).attr("data-section-name") + $(this).attr("data-section-name").slice(1) + "</span></a></li>";
      });
      menu += "</ol>";
      $(".one").append(menu);
      $(".menu a").on("click", $.scrollify.move);
    }

  });
});
