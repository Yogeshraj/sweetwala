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

function myFunction(x) {
    x.classList.toggle("change");
}

// $( ".menu-bar" ).on( "click", function() {
// 	$( ".main-menu" ).show(1000);
// });



 $(".menu-bar").click(function(){
            $(".main-menu").toggle('slow');
        });

  