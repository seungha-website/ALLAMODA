$(function(){
    $('.list2').click(function(){
        $('.hover2').fadeIn();//show();
        $('.hover3, .hover4, .hover5, .hover6, .hover7 ').fadeOut();//hide();
    });
    $('.list3').click(function(){
        $('.hover3').fadeIn();//show();
        $('.hover2, .hover4, .hover5, .hover6, .hover7 ').fadeOut();//hide();
    });
    $('.list4').click(function(){
        $('.hover4').fadeIn();//show();
        $('.hover2, .hover3, .hover5, .hover6, .hover7 ').fadeOut();//hide();
    });
    $('.list5').click(function(){
        $('.hover5').fadeIn();//show();
        $('.hover2, .hover3, .hover4, .hover6, .hover7 ').fadeOut();//hide();
    });
    $('.list6').click(function(){
        $('.hover6').fadeIn();//show();
        $('.hover2, .hover3, .hover4, .hover5, .hover7 ').fadeOut();//hide();
    });
    $('.list7').click(function(){
        $('.hover7').fadeIn();//show();
        $('.hover2, .hover3, .hover4, .hover5, .hover6 ').fadeOut();//hide();
    });
    $('.popup a').click(function(){
        $('.popup').fadeOut();//hide();
    });
});