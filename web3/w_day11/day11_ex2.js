$(document).ready(function(){

    i = 0;

    $('#bottom').click(function(){

        i++;

        if(i > 2) {
            i = 0;
        }

        $('#img_wrap').animate({
            top : -500 * i
        });
    });

    $('#top').click(function(){
        i--;

        if(i < 0) {
            i = 2;
        }
        $('#img_wrap').animate({
            top: -500 * i
        });
    });

    var st = setInterval(() => {
        $('#bottom').trigger('click');
    }, 1000);

    setTimeout(() => {
        clearInterval(st);
    }, 5000);

    







}); //end