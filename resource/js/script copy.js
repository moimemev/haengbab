$(document).ready(function () {
    //gnb메뉴
    const header = $('#header')
    const gnb = $('#gnb')
    const gnbLi = gnb.children('li')
    const depth1 = gnbLi.children('a.depth1')
    const depth2 = gnbLi.children('ul.depth2')
    const gnbBg = $('.gnb_bg')

    gnb.on('mouseenter', function () {
        console.log('마우스가 들어감')
        header.addClass('on')
        depth2.show()
    })
    gnb.on('mouseleave', function () {
        console.log('마우스가 나감')
        header.removeClass('on')
        depth2.hide()
    })

    //faq
    const faqBx = $('.faq_box')
    const faqUl = faqBx.children('ul')
    const faqLi = faqUl.children('li')
    const faqDl = faqLi.children('dl')
    const faqDt = faqDl.children('dt')
    const faqDd = faqDl.children('dd')

    //faqDt.click(function(){})

    faqDt.on('click', function () {

        if ($(this).parent().parent().hasClass('active')) {
            $(this).parent().parent().removeClass('active')
        } else {
            $(this).parent().parent().addClass('active')
            $(this).parent().parent().siblings().removeClass('active')
        }

        console.log($(this).parent().parent().hasClass('active'))
        console.log($(this).next().css('height'))
        console.log($(this).next().css('height') == '0px')
        console.log($(this).next())
        console.log($(this).parent().parent())
        console.log($(this).parent().parent().siblings())
        console.log($(this).parent().parent().siblings().children())
        console.log($(this).parent().parent().siblings().children().children('dt'))
        console.log($(this).parent().parent().siblings().find('dt'))
    })
    // form태그안에 button이 있을때 전송할경우
    // type="submit" 버튼을 클릭하면 submit이벤트가 발생함
    // form태그안에서 폼요소 위에서 엔터를 쳐도 submit이벤트가 발생함
    // form태그에 action에 연결된 페이지가 실행될수 있다. retrun false 작성해야 실행을 방지할수 있다
    // form에 값이 유효한지 확인 끝나면 retrun true로 바꿔주어 action에 연결된 페이지가 실행되도록 해야한다
    $('#loginForm').on('submit', function () {

        if($('#userId').val().length == 0){ // if( $('#id').val() == "" ) 도 가능
            alert('아이디를 입력하세요');
            $('#userId').focus(); // 이건 그냥 마우스 커서가 여기로 오게 하는것
            return false;
        } 
        if( !($('#userId').val().length >= 3  && $('#userId').val().length <= 12) ){
            alert('아이디 3자 이상 12자 이하로 입력하세요');
            $('#userId').focus();
            return false;
        }
        
        if($('#userId').val().length >= 3  && $('#userId').val().length <= 12){
            if($('#userId').val() == '홍길동'){
                alert('홍길동님 확인');
            }else{
                alert('회원정보없음');
                return false
            }
        }

        if(!$('#userPw').val()){
            alert('비밀번호를 입력하세요');
            $('#userPw').focus();
            return false;
        }

        if( !($('#userPw').val().length >= 4 && $('#userPw').val().length <= 8) ){
            alert('비밀번호를 4자이상 8자이하로 설정하세요');
            return false;
        }
        
        if($('#userPw').val().length >= 4 && $('#userPw').val().length <= 8){
            if($('#userPw').val()== '1234'){
                alert('비밀번호 일치');
            }else{
                alert('비밀번호를 불일치');
                return false;
            }
        }

        return true
       
    })

    // 로그인
    //$('#loginForm').submit(function(){})
    //$('#loginForm').on('submit',function(){})

    //함수생성
    //function test(){ console.log('테스트함수 실행됨') }

    // 약관전체동의
    $('#chkAll').on('click', function () {
        console.log($('input[type=checkbox]'))

        $('input[type=checkbox]').attr("title", '타이틀')

        if (true) {
            $('input[type=checkbox]').prop('checked', true)
        } else {
            $('input[type=checkbox]').prop('checked', false)
        }

    })


    // 메인슬라이드
    const swiper1 = new Swiper('.mainSlide', {
        loop: true,

        pagination: {
            el: '.mainSlide .swiper-pagination',
        },

        navigation: {
            nextEl: '.mainSlide .swiper-button-next',
            prevEl: '.mainSlide .swiper-button-prev',
        },
    });

    // 브랜드스토리슬라이드
    const swiper2 = new Swiper('.brandSlide', {
        loop: true,
        /* slidesPerView: 'auto', */
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: '.brandSlide .swiper-button-next',
            prevEl: '.brandSlide .swiper-button-prev',
        },
    });

    //메뉴슬라이드
    var swiper3 = new Swiper(".menuSlide", {
        slidesPerView: 3,
        spaceBetween: 80,
        navigation: {
            nextEl: '.menu_wrap .swiper-button-next',
            prevEl: '.menu_wrap .swiper-button-prev',
        },
        pagination: {
            el: ".menuSlide .swiper-pagination",
            clickable: true,
        },
    });




})