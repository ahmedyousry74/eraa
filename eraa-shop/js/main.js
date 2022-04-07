//Navbarbars
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLink = document.querySelectorAll(".nav-link");
hamburger.addEventListener("click", mobileMenu);
navLink.forEach(n => n.addEventListener("click", closeMenu));
function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}
function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}


 
   //  start scrollTop
   $(function(){
    var scrollbutton = $("#scroll");
    $(window).scroll(function(){
        if ( $(this).scrollTop()>=300)
        {
            scrollbutton.show();
        }
        else
        {
            scrollbutton.hide();
        }
    });
    scrollbutton.click(function(){
        $("html,body").animate({ scrollTop : 0 } , 1000);
    });
  }); 


    //Before&after plugin
    $(function(){
        $(".before-after-slider").twentytwenty({default_offset_pct:0.5})
    });


    // testiomnials slider
    $('.owl-carousel.owl-testimonilas').owlCarousel({
        loop:true,
        margin:20,
        rtl:true,
        autoplay:true,
        autoplayTimeout:3000,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:2
            }
        }
    })

    //wow
    new WOW().init();