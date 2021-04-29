$(document).ready(function(){

    var i = 0;
    $('#img_wrap').click(function(){
        if(i == 0) {
            $('#img_wrap img').attr({
                src:'../img/logo.jpg'
            });
            i++;
        } else if(i == 1) {
            $('#img_wrap img').attr({
                src:'../img/yellowsmile.png'
            });
            i = 0;
        }        
    });

    var st = setInterval(() => {
        $('#img_wrap').trigger('click');
    }, 1000);

    setTimeout(() => {
        clearInterval(st);
    }, 5000);







}); //end