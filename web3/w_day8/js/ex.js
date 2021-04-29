$(document).ready(function(){

    //menu animate
    $('#menu_wrap').hover(function(){
        $('.sub_menu').stop().animate({
            height:150
        });
    },function(){
        $('.sub_menu').stop().animate({
            height:0
        })
    });

    //section_1 event

    $('#section_1 h2').animate({
        top : 0,
        opacity:1
    },1000);

    $('#section_1 p').delay(150).animate({
        top : 0,
        opacity:1
    },1000);

    $('#section_1 h1').delay(500).animate({
        left:0,
        opacity:1
    },1500)

    
    //section_2 event
    $('#section_2').mouseenter(function(){
        $('#section_2 h2').animate({
            top:0,
            opacity:1
        },600);
        $('#section_2 p').delay(300).animate({
            top:0,
            opacity:1
        },600);
        $('#btn').delay(500).animate({
            top:0,
            opacity:1
        },600)
    })




}); //end