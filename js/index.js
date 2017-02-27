$(function(){

    $('.nav li:eq(0)').hover(function(){
        $('.extend_nav').show();
    },function(){
        $('.extend_nav').hide();
    });
    $('.extend_nav').mouseover(function(){
        $(this).show();
    });
    $('.extend_nav').mouseleave(function(){
        $(this).hide();
    });
});
