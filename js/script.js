$(document).ready(function(){
    // trigger nice scroll plugin
    $('html').niceScroll({
            cursorcolor: '#f7600e',
            cursorwidth: 10,
            cursorborderradius: 0,
            cursorborder: '1px solid #f7600e'
    });

    // change header height
    $('header').height($(window).height());

    // scroll to features
    $('header .arrow i').click(function(){
        $('html, body').animate({
            scrollTop: $('.features').offset().top
        }, 1800);
    });

    $('.hire').click(function(){
        $('html, body').animate({
            scrollTop: $('.our-team').offset().top
        }, 1800);
    });

    //show hidden items from work
    $('.show-more').click(function(){
        $('.our-work .hidden').fadeToggle(2000);
    });

    //check testimonials
    var leftArrow = $('.testimonials .fa-chevron-left'),
        rightArrow = $('.testimonials .fa-chevron-right');
    function clients(){
        // if($('.client:first').hasClass('active')){
        //     leftArrow.fadeOut();
        // }
        // else{
        //     leftArrow.fadeIn();
        // }

        $('.client:first').hasClass('active') ? leftArrow.fadeOut() : leftArrow.fadeIn();

        $('.client:last').hasClass('active') ? rightArrow.fadeOut() : rightArrow.fadeIn();
    }

    // clients();   

    $('.testimonials i').click(function(){
        if($(this).hasClass('fa-chevron-right')){
            $('.testimonials .active').fadeOut(100, function(){
                $(this).removeClass('active').next('.client').addClass('active').fadeIn();
                clients();
            });
        } 
        else{
            $('.testimonials .active').fadeOut(100, function(){
                $(this).removeClass('active').prev('.client').addClass('active').fadeIn();
                clients();
            });
        }
    });
});