$(document).ready(function(){
    //menu animate
    $('#menu_wrap').hover(function(){
        $('.sub_menu').stop().animate({
            height:150
        });
    },function(){
        $('.sub_menu').stop().animate({
            height:0
        });
    });

    //section1 event

    $('#sec1 h2').animate({
        top:0,
        opacity:1
    },1000);

    $('#sec1 p').delay(200).animate({
        top:0,
        opacity:1
    },1000);

    $('#sec1 h1').delay(500).animate({
        left:0,
        opacity:1
    },1500)

//section2 event
$('#sec2').mouseenter(function(){
    $('#sec2 h2').animate({
        top:0,
        opacity:1
    },1500);
    $('#sec2 p').delay(300).animate({
        top:0,
        opacity:1
    },600);
    $('#btn').delay(500).animate({
        top:0,
        opacity:1
    },600);
})






}); //end