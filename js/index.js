/**
 * Created by Abdelrahman El Rayan on 26-Dec-16.
 */
/*global $, jQuery, alert */
$(document).ready(function () {
    
    if( $(window).width() < 766 ){
            $(".clinic_header").append("<p class=\" adding text-center alert alert-danger \"> Sorry the clinics photos will not appear in small screens </p>");
    }
    
    if( $(window).width() < 1206 ){
        $(".adventage .advantages_image img").remove();
    }
    
    if( $(window).width() < 767 ){
        $(".appointment .app img").remove();
    }
    
    //nice scroll
    $("html").niceScroll({
        cursorcolor  : "#107FC9",
        cursorborder : "1px solid #FFF",
        cursorborderradius : "none"
    });
    

    $('.carousel').carousel({
        interval: 5000
    });

    // Show Color Option Div When Click On The Gear
    $('.gear-check').click(function ()
    {
        $('.color-option').fadeToggle(2000);
    });

    // Change Theme Color On Click
    var colorOption = $(".color-option ul li");

    colorOption.eq(0).css("backgroundColor","#169c42").end()
        .eq(1).css("backgroundColor","#1E90FF").end()
        .eq(2).css("backgroundColor","#FF0000");



    colorOption.click(function () {
        $("link[href*='theme']").attr("href", $(this).attr("data-value"));
    });


});