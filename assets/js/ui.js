var $winW, $winH, $isMobile;
$(function () {

    // ===== Scroll to Top ==== 
    $(window).scroll(function () {
        if ($(window).scrollTop() > 200) {
            $('.header').addClass('sticky');
            $('.btn.__top').addClass('on');
        } else {
            $('.header').removeClass('sticky');
            $('.btn.__top').removeClass('on');
        }
    });

    $("#btnTop").click(function() {
		$('html, body').animate({
			scrollTop : 0
		}, 200);
		return false;
	});

    $("#btnMobile").off().on('click',function(){
        $('.side_nav').addClass('open');
    });
    $("#btnClosed").off().on('click',function(){
        $('.side_nav').removeClass('open');
    });

    $('nav .__txt').mouseenter( function() {
        // $(this).next('.__smenu').addClass('on');
        $(this).next('.__smenu').stop().slideDown();
    });
    $('nav').mouseleave( function() {
        $('.__smenu').stop().slideUp();
    });

    $('nav .__smenu').mouseleave( function() {
        // $(this).removeClass('on');
        $(this).stop().slideUp();
    })
    
    if ($('.__top.swiper-container').length) {
        var swiper = new Swiper(".__top.swiper-container", {
            slidesPerView: 1,
            spaceBetween: 0,
            loop: true,
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            },
            // navigation: {
            //     nextEl: '.__top .swiper-button-next',
            //     prevEl: '.__top .swiper-button-prev',
            // },
            pagination: {
                el: '.__top .swiper-pagination',
                clickable: true,
            },
        });
        $('.__top .start').off().on('click', function(){
            swiper.autoplay.start();
            $(this).hide();
            $('.__top .stop').show();
        });
        $('.__top .stop').off().on('click', function () {
            swiper.autoplay.stop();
            $(this).hide();
            $('.__top .start').show();
        });
    }    

    $('.add_file').each(function (index, item) { 
        $(this).on('change' ,function(){
            var fileValue = $(this).val().split("\\");
            var fileName = fileValue[fileValue.length-1]; // 파일명    
            $(this).closest('div').find('.attachName').val(fileName);
            console.log(fileName);
        });

    });  
    
    $('.pricing_top .btn_box button').on('click', function(){
        var tg = $(this).closest('.btn_box');
        $(this).addClass('on').siblings('button').removeClass('on')
        if ( $(this).index() == 0 ) {
            tg.removeClass('yearly');
        } else {
            tg.addClass('yearly');
        }
    });


    $('.__pricing_plan .__select').on('click',function(){
        $('.__pricing_plan .__select').removeClass('on');
        $(this).addClass('on');
    });

    if ($('.faq_movie .swiper-container').length) {
        var swiper = new Swiper(".faq_movie .swiper-container", {
            slidesPerView: 1,
            spaceBetween: 0,
            loop: true,
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            },
            navigation: {
                nextEl: '.faq_movie .swiper-button-next',
                prevEl: '.faq_movie .swiper-button-prev',
            },
            // pagination: {
            //     el: '.__top .swiper-pagination',
            // },
        });
    }  
    $('.qna_list .q').on('click',function(){
        $(this).toggleClass('on');
        $(this).next('.a').toggleClass('on');
    });


    $('.btn_pw').on('click',function(){
        var tg = $(this).prev('.pw');
        tg.toggleClass('on');
        if( tg.hasClass('on') ) {
            tg.attr('type',"text");
        } else {
            tg.attr('type',"password");
        }
    });
    $('.input').on('propertychange change keyup paste input', function() {
        if ( $(this).val() == '') {
            $(this).removeClass('active');    
        } else {
            $(this).addClass('active');
        }
    });

    /* mobile */
    // mobile menu
    function mmenuClose() {
        $('body').removeClass('__open');
        $('.side_nav').removeClass('__open');
        $('.bg-dimmed').hide();
    }
    function mmenuOpen() {
        $('body').addClass('__open');
        $('.side_nav').addClass('__open');
        $('.bg-dimmed').show();
    }

});


    


