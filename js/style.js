$(function(){
    $('.header .depth1').mouseenter(function(){
        $('.header .depth2').stop().fadeIn();
        $('.header .nav_bg').addClass('on');
        $('.nav_bg figure').eq($(this).index()).stop().fadeIn();
    });
    $('.header .depth1').mouseleave(function(){
        $('.header .depth2').stop().fadeOut();
        $('.header .nav_bg').removeClass('on');
        $('.nav_bg figure').eq($(this).index()).stop().hide();
    });

    $('.lang').click(function(){
        $('.translation-links').stop().slideToggle();
    });
    $(document).mouseup(function (e) {
        if ($('.translation-links').has(e.target).length === 0) {
          $('.translation-links').stop().slideUp();
        };
    });

    $('.header .menu').click(function(){
        $('.menu_m').fadeIn(200);
    });
    $('.menu_m .close').click(function(){
        $('.menu_m').fadeOut(200);
    });

    $('.menu_m .depth1 > p').click(function(){
        if($(this).siblings().css('display') == 'none') {
            $('.menu_m .depth2').hide();
            $(this).siblings().fadeIn(200);
        } else {
            $(this).siblings().hide();
        };
    });
    $('.menu_m .depth1 > a').click(function(){
        $('.menu_m .depth2').hide();
    });

    AOS.init();

    // window.addEventListener('scroll', function () {
    //     // 스크롤 이벤트 리스너 등록
    //     const sections = document.querySelectorAll('.main_product h2') // 모든 섹션을 가져옴
    
    //     sections.forEach(function (section) {
    //         // 각 섹션에 대해 반복
    //         let bounds = section.getBoundingClientRect() // 섹션의 위치와 크기 정보를 가져옴
    //         const left = section.querySelector('.parallax-element.left') // 왼쪽 요소
    //         const right = section.querySelector('.parallax-element.right') // 오른쪽 요소
    
    //         if (bounds.top < window.innerHeight && bounds.bottom >= 0) {
    //             // 섹션이 뷰포트 내에 있을 때
    //             var scrolled = window.scrollY - section.offsetTop // 섹션의 시작점에서 스크롤된 거리를 계산
    //             left.style.transform = `translate(${scrolled * 0.1}px` // 왼쪽에서 오른쪽으로 이동
    //             right.style.transform = `translate(${scrolled * -0.1}px)` // 오른쪽에서 왼쪽으로 이동
    //         }
    //     })
    // })

    // $(window).scroll(function(){
    //     if (($('.main_product .item.grape').offset().top / 1.2) < $(window).scrollTop()) {
    //         $('.main_product .item.grape .painting_color').addClass('on');
    //     } else {
    //         $('.main_product .item.grape .painting_color').removeClass('on');
    //     };

    //     if (($('.main_product .item.peach').offset().top / 1.2) < $(window).scrollTop()) {
    //         $('.main_product .item.peach .painting_color').addClass('on');
    //     } else {
    //         $('.main_product .item.peach .painting_color').removeClass('on');
    //     };

    //     if (($('.main_product .item.pepper').offset().top / 1.2) < $(window).scrollTop()) {
    //         $('.main_product .item.pepper .painting_color').addClass('on');
    //     } else {
    //         $('.main_product .item.pepper .painting_color').removeClass('on');
    //     };

    //     if (($('.main_product .item.jeotgal').offset().top / 1.2) < $(window).scrollTop()) {
    //         $('.main_product .item.jeotgal .painting_color').addClass('on');
    //     } else {
    //         $('.main_product .item.jeotgal .painting_color').removeClass('on');
    //     };

    //     if (($('.organic .item.oil').offset().top / 1.2) < $(window).scrollTop()) {
    //         $('.organic .item.oil .picture_color').addClass('on');
    //     } else {
    //         $('.organic .item.oil .picture_color').removeClass('on');
    //     };

    // });
    

    $('.quick .top').click(function(){
        $('html, body').animate({
            scrollTop: 0,
        }, 400);
    });
    $('.quick .down').click(function(){
        $('html, body').animate({
            scrollTop: $('.footer').offset().top,
        }, 400);
    });

    const swiperSlides = document.querySelectorAll('.swiper');

    swiperSlides.forEach(function (element, index) {
        element.classList.add("swiper-" + index);
        let snsSwiper = new Swiper(".swiper-" + index, {
            autoplay: {
                    delay: 0,
                    disableOnInteraction: false,
            },
            speed: 8000,
            loop: true,
            slidesPerView: "auto",
            freemode: true,
            breakpoints: {
                0: {
                    slidesPerView: 1.6,
                },
                481: {
                    slidesPerView: 2,
                },
                768: {
                    slidesPerView: 4,
                },
                1025: {
                  slidesPerView: 5,
                },
                1367: {
                  slidesPerView: 6,
                },
                1601: {
                  slidesPerView: 7,
                },
            },
        });
    });

    $('.swiper-slide').on('mouseover', function(){
        swiper.autoplay.stop();
    });
    $('.swiper-slide').on('mouseout', function(){
        swiper.autoplay.start();
    });

    $('.open_guide').click(function(){
        $('.privacy').removeClass('on');
        $('.guide').addClass('on');
    });
    $('.open_privacy').click(function(){
        $('.guide').removeClass('on');
        $('.privacy').addClass('on');
    });
    $('.close_guide').click(function(){
        $('.guide').removeClass('on');
    });
    $('.close_privacy').click(function(){
        $('.privacy').removeClass('on');
    });

})// jquery end