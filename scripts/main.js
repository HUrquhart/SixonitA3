window.addEventListener('scroll', function(){
    var y = window.scrollY;
    if(window.scrollY >= 1 && !document.body.classList.contains('make-nav-sticky')){
        document.body.classList.add('make-nav-sticky');
        document.getElementsByTagName('nav')[0].classList.add('make-nav-sticky');
    }else if(window.scrollY < 1){
        document.body.classList.remove('make-nav-sticky');
        document.getElementsByTagName('nav')[0].classList.remove('make-nav-sticky');
    }
});
$(document).ready(function(){
    AOS.init();

    VANTA.NET({
        el: "#slider-container",
        mouseControls: true,
        touchControls: true,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0x3fc6ff,
        backgroundColor: 0xb0811,
        spacing: 16.00
    });
  VANTA.NET({
    el: "#profile-header",
    mouseControls: true,
    touchControls: true,
    minHeight: 600.00,
    minWidth: 200.00,
    scale: 1.00,
    scaleMobile: 1.00,
    color: 0x3fc6ff,
    backgroundColor: 0xb0811,
    spacing: 16.00
  });

    $('#hero-slider').slick({
        arrows: false,
        dots: true,
        appendDots: $("#slider-container .slider-after")
    });

    $('nav ul li a').click(function(){
        //console.clear();
        $("nav ul li").children().removeClass("active-link");
        $(this).addClass("active-link");
    });
    $(window).scroll(function(){
        var articles =  document.getElementsByTagName('main')[0].getElementsByTagName('article');
        var xcount = 0;
        for(let x = 0; x < articles.length; x++ ){
            // we also need to know how many elements are not valid elements for proper mapping
            if(!articles[x].classList.contains('LWP')){
                xcount++;
            }else if(articles[x].classList.contains('LWP')){
                if(window.scrollY >= articles[x].offsetTop && window.scrollY+(innerHeight/2) <= (articles[x].offsetTop+articles[x].offsetHeight)){
                    $("nav ul li").children().removeClass("active-link"); // remove all active-link classes
                    $("nav ul li a")[x-xcount].classList = 'active-link';
                }
            }
        }
        xcount = 0;
    });
});
