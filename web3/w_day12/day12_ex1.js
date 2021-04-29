$(document).ready(function(){

    $('#box_wrap > li').first().css({
        backgroundColor : 'tomato'
    });
    $('li:nth-child(2)').first().css({
        backgroundColor : 'teal'
    });
    $('#box_wrap > li').eq(2).css({
        backgroundColor : 'pink'
    });
    $('li:nth-child(4)').first().css({
        backgroundColor : 'green'
    });
    $('#box_wrap > li').last().css({
        backgroundColor : 'gold'
    });    
    
    //전역변수 st는 아래의 함수 안에 있는 지역변수 st랑 다르다
    var st = setInterval(() => {
        $('#box_wrap > li').first().appendTo('#box_wrap');        
    }, 1000);

    //hover 사용
    $('#box_wrap').hover(function(){
        clearInterval(st);
    },function(){
        st = setInterval(() => {
            $('#box_wrap > li').first().appendTo('#box_wrap');        
        }, 1000);
    });


    // mouseenter랑 mouseleave로 나눠서 사용
    // $('#box_wrap').mouseenter(function(){
    //     clearInterval(st);
    // });

    // $('#box_wrap').mouseleave(function(){
    //     var st = setInterval(() => {
    //         $('#box_wrap > li').first().appendTo('#box_wrap');        
    //     }, 1000);
    // })

    // 지역변수 전역변수
    // 변수 : 저장창고
    // 전역변수 : 내 문서 전체에서 사용가능한 변수
    // 함수영역이 아닌 상태에서 var 변수 선언 = 전역변수

    // 지역변수 : 함수 내부에서만 사용가능한 함수
    // 함수영역 안에서 var 변수 선언 = 전역변수가 된다 
    // 함수영역 안에 적은 var을 제거해서 밖에 적은 전역 변수와 동일한 변수로
    // 만들어 주면 된다. 변수간의 중복을 일으키지 않도록 함

    // 왠만하면 전체적으로 지역변수로 쓰면 협력하게 도움.
    // 혼자 작업하면 다 전역변수로??
    







}); //end