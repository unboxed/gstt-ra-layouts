$(function() { 
    $("form").submit(function() { 
        return false;
    });

    $(".prom-scale button").on("touchstart touchend", function(e) {
        e.preventDefault();
        $(this).toggleClass("popout");
    });

    $(".prom-scale button").on("click", function() {
      $(this).addClass("active");
    });
});