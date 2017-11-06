//custom js

/* Fixed header 
  -----------------------------------------------*/

$(window).scroll(function () {
     var sc = $(window).scrollTop()
    if (sc > 0) {
        $(".header").addClass("fixed-header")
    } else {
        $(".header").removeClass("fixed-header")
    }
});