$(document).ready(function(){
$(window).scroll(function(){
    if(this.scrollY > 20){
        $('.navbar').addClass("sticky");

    }else
    {
        $('.navbar').removeClass("sticky");
    }
})

// menu responsive script 
$('.menu-btn').click(function(){
    $('.navbar .menu').toggleClass("active");
    $('.menu-btn i').toggleClass("active");
})

// tipado animado script
var typed = new Typed('.typing',{
    strings:["Data","Desarrollo","Analytics","Diseño","Tecnologia"],
    typeSpeed:100,
    backSpeed:60,
    loop:true
});
// owl carousel script 
$('.carousel').owlCarousel({
margin: 20,
loop: true,
autoplayTimeOut:2000,
autoplayMoverPause:true,
responsive: {
0:{
    items: 1,
    nav: false
},
600:{
    items: 2,
    nav: false
},
1000:{
    items: 3,
    nav: false
}
}

});

});