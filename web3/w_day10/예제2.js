$(document).ready(function(){
    i = 0;

    
    // 반복문 없이 길게 풀어 적으면 아래와 같다
    // $('#right').click(function(){
    //     if(i==0) {
    //         $('#img_wrap').animate({
    //             left:-600
    //         });
    //         i++;
    //     } else if(i == 1) {
    //         $('#img_wrap').animate({
    //             left:-1200
    //         });
    //         i++;
    //     } else if (i == 2) {
    //         $('#img_wrap').animate({
    //             left: -1800
    //         });
    //         i++;
    //     } else if (i == 3) {
    //         $('#img_wrap').animate({
    //             left: -2400
    //         });
    //         i++;
    //     } else if(i == 4) {
    //         $('#img_wrap').animate({
    //             left: 0
    //         });
    //         i = 0;
    //     }
    // });

    $('#right').click(function(){
        i++; 
        if(i > 4) {
            i = 0;
        } 

        $('#img_wrap').animate({
            left:-600 * i
        });

        // console.log(i);
    })

    $('#left').click(function(){
        i--;
        if(i < 0) {
            i = 4;            
        }
        $('#img_wrap').animate({
            left:-600 * i
        });
        console.log(i);
       
    });













    
}); //end