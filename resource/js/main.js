$(document).ready(function(){
    /* full bg menu
    $('#gnb').mouseenter(function(){
        $('#header').addClass("on");
        $('#gnb li .depth2').show();
    })

    $('#gnb').mouseleave(function(){
        $('#header').removeClass("on");
        $('#gnb li .depth2').hide();
    })
    */

    //단일 메뉴 보이기
    $('#gnb > li').mouseenter(function(){  
        $(this).addClass('on');
    })

    $('#gnb > li').mouseleave(function(){
        console.log("show");
        $(this).removeClass('on');
    })

    // 메인슬라이드 --------------------------------
    const swiper1 = new Swiper('.mainSlide', {            
        loop: true,
        // autoplay: {             //자동재생
        //     delay: 2000,            //전환간격
        //     disableOnInteraction: true, //사용자가 마우스 클릭 시 자동재생 멈춤
        // },
        pagination: {
            el: '.mainSlide .swiper-pagination',
        },

        navigation: {
            nextEl: '.mainSlide .swiper-button-next',
            prevEl: '.mainSlide .swiper-button-prev',
        },
    });

    // 메뉴 슬라이드 --------------------------------
    var swiper2 = new Swiper(".menuSlide", {
        loop: true,
        centeredSlides: true,   //가운데 배치
        autoplay: {             //자동재생
        delay: 2000,            //전환간격
        disableOnInteraction: true, //사용자가 마우스 클릭 시 자동재생 멈춤
        },

        slidesPerView: 3,
        spaceBetween: 60,
        navigation: {
            nextEl: '.menu_wrap .swiper-button-next',
            prevEl: '.menu_wrap .swiper-button-prev',
        },
        /*
        pagination: {
            el: ".menuSlide .swiper-pagination",
            clickable: true,
        },
        */
    });

    //section1 슬라이드
    const swiper3 = new Swiper('.sec1Slide', {            
        loop: true,
        centeredSlides: true,   //가운데 배치
        autoplay: {             //자동재생
        delay: 2000,            //전환간격
        disableOnInteraction: true, //사용자가 마우스 클릭 시 자동재생 멈춤
        },
        pagination: {
            el: '.sec1Slide .swiper-pagination',
            clickable: true,  // 버튼 클릭 여부
        },

        navigation: {
            nextEl: '.sec1Slide .swiper-button-next',
            prevEl: '.sec1Slide .swiper-button-prev',
        },
    });    

    //메인 비주얼 오브젝트 숨기기
    $(window).resize(function(){
        showHideSlideObj();
    })

    function showHideSlideObj(){
        console.log($(window).width());

        //shrimp
        if($(window).width() < 1200){
            $('.mainSlide .bg_object.obj1').hide(); 
        }else{
            $('.mainSlide .bg_object.obj1').show(); 
        }

        //wave
        if($(window).width() < 1700){
            $('.mainSlide .bg_object.obj2').hide();
        }else{
            $('.mainSlide .bg_object.obj2').show(); 
        }

        //성공창업
        if($(window).width() < 1600){
            $('.franchise_info').hide();
        }else{
            $('.franchise_info').show(); 
        }
    }

    showHideSlideObj();
0
    //슬라이더 멈추기/다시재생
    // $('.swiper-slide').mouseenteron('mouseenter', function(){    
    //     console.log("over")    ;
    //     // $('.swiper').autoplay.stop();
    //   });
    
    // $('.swiper-slide').on('mouseleave', function(){
    //     // $('.swiper').autoplay.start();
    // });
})