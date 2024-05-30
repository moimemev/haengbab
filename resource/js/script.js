$(document).ready(function(){
    //단일 메뉴 보이기
    $('#gnb > li').mouseenter(function(){  
        $(this).addClass('on');
    })

    $('#gnb > li').mouseleave(function(){
        console.log("show");
        $(this).removeClass('on');
    })
    
    // FAQ ----------------------------------------------
    $('.faq-box ul li dl dt').click(function(){     
        console.log($(this).parent().parent().hasClass('active'));
        if( $(this).parent().parent().hasClass('active')){
            $(this).parent().parent().removeClass('active');
        }else{
            $(this).parent().parent().addClass('active');
            $(this).parent().parent().siblings().removeClass('active');
        }
    })

    // Login ----------------------------------------------    
    $('#loginForm').on('submit',function(){       
        let id_err_msg = $('.inp_txt #userId').parent().next('.err_msg');
        let pw_err_msg = $('.inp_txt #userPw').parent().next('.err_msg');

        //유효성 검사
        id_err_msg.hide();  
        pw_err_msg.hide();

        //아이디 체크
        let id_str = $('#userId').val();
        let pw_str = $('#userPw').val();
       
        //아이디 : 글자 수 제한(4~12자)
        if(idLength(id_str)==false){
            showIdErrMsg("아이디는 4~16자 이내로 입력하세요");
            $('.inp_txt #userId').focus();
            return false;
        }

        //아이디 : 영어 또는 숫자만 가능
        // if(checkNumberAndEnglish(id_str)==false){
        //     showIdErrMsg("아이디는 영어와 숫자만 입력하세요");
        //     $('.inp_txt #userId').focus();
        //     return false;
        // }

        //아이디 : 이메일 형식 체크
        if(checkEmailFormat(id_str)==false){
            showIdErrMsg("아이디는 이메일 형식으로 입력하세요");
            $('.inp_txt #userId').focus();
            return false;
        }

        //비밀번호 : 8글자 이상, 영문, 숫자, 특수문자 사용
       if(checkPassword(pw_str)==false){
            showPwErrMsg("비밀번호는 4자이상, 영문, 숫자, 특수문자를 입력하세요");
            $('.inp_txt #userPw').focus();
            return false;
       }

       if(id_str=="abcd@naver.com" && pw_str == "1234a!"){
        alert("회원정보가 일치합니다.");
       }else{
        alert("회원정보가 일치하지 않습니다.")
        return false;
       }

        function showIdErrMsg(str){
            id_err_msg.show();
            id_err_msg.text(str);
        }

        function showPwErrMsg(str){
            pw_err_msg.show();
            pw_err_msg.text(str);
        }
    })

     // 회원가입 ----------------------------------------------   
    //약관동의
    $('#chkAll').on('click',function(){
        //attr : 속성 바꾸기
        $('input[type=checkbox]').attr('title',"타이틀");

        //prop : 상태 바꾸기
        let isChecked = $(this).is(':checked');
        if(isChecked){
            $('input[type=checkbox]').prop('checked',true);
        }else{
            $('input[type=checkbox]').prop('checked',false);
        }
    })

    //약관내용보기
    $('.btn_view').on('click',function()   {     
        $(this).parent().next('.scroll_wrap').stop().slideToggle();
        // $(this).parent().siblings().next('.scroll_wrap').slideUp();
    })

    /*
    페이지 이동
    $('.btn_next').on('click', function(){
        window.location.href = 'join_step2.html';
    })
    */

    //회원정보 입력
    const email = $('#userEmail');
    const pw = $('#userPw');
    const pw2 = $('#userPwRe');
    const phone = $('#userTel');
    const chkDuplicate = $('#joinForm .btn_chk');

    email.on('blur',function(){        
        if(checkInputValue(email)==false){
            return false;
        }        
        hideInputErrMsg(input);
        return true;
    })

    pw.on('blur',function(){
        if(checkInputValue(pw)==false){
            return false;
        }  

        //비밀번호 : 8글자 이상, 영문, 숫자, 특수문자 사용
        pw_str = pw.val();
        if(checkPassword(pw_str)==false){
            showInputErrMsg(pw,"비밀번호는 4자이상, 영문, 숫자, 특수문자를 입력하세요");
            // pw.focus();
            return false;
        }
        hideInputErrMsg(input);
        return true;
    })

    //비밀번호 확인
    pw2.on('blur',function(){
        if(checkInputValue(pw2)==false){
            return false;
        }  

        //일치여부 체크
        if(pw.val()!=pw2.val()){
            showInputErrMsg(pw2, "비밀번호가 일치하지 않습니다.");
            return false;
        }
        hideInputErrMsg(input);
        return true;
    })

    phone.on('blur',function(){
        if(checkInputValue(phone)==false){
            return false;
        } 

        //하이픈 체크
        if(checkNumber(phone.val())==false){
            showInputErrMsg(phone, "입력창에 숫자만 입력해 주세요");
            phone.focus();
            return false;
        }

        //10자 이상 입력 체크
        if(phone.val().length<10){
            showInputErrMsg(phone, "10자이상 입력해 주세요");
            phone.focus();
            return false;
        }

        hideInputErrMsg(phone);
        return true;
    })

    //중복확인 버튼
    chkDuplicate.on('click',function(){
        
        let id_str = $('#joinForm #userEmail').val();

        if(checkInputValue(email)==false){
            return false;
        }   

        //중복일 때
        if(id_str=="abc@abc.com"){
            showInputErrMsg(email,"중복된 아이디 입니다.");
            return false;
        }

        hideInputErrMsg(input);
        return;
    })

    // 비밀번호 보기 버튼
    $('#joinForm .btn_pwview').on('click',function(){
        let input = $(this).parent().children('input');        

        //아이콘 변경
        if(input.attr('type')=='password'){
            //입력창 속성 변경
            input.attr('type','text');

            $(this).find('.xi-eye').attr('class','xi-eye-off');
        }else{
            input.attr('type','password');
            $(this).find('.xi-eye-off').attr('class','xi-eye');
        }        
    })   

    function checkInputValue(input){
        if(input.val().length<1){   
            showInputErrMsg(input,"입력 내용이 없습니다.");
            // input.focus();
            return false;
        }
        hideInputErrMsg(input);
        return true;
    }

    function hideInputErrMsg(input){
        input.parent().next('.err_msg').hide();
    }

    function showInputErrMsg(input, str){
        input.parent().next('.err_msg').show();
        input.parent().next('.err_msg').text(str);
    }

    function idLength(str){
        return str.length >=4 && str.length <=16; 
    }

    function checkNumberAndEnglish(str){
        return /^[A-Za-z0-9][A-Za-z0-9]*$/.test(str);
    }

    function checkNumber(str){
        return /^[0-9]*$/.test(str);
    }

    function checkEmailFormat(str){     
       let email_regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
        if(!email_regex.test(str)){ 
            return false; 
        }else{
            return true;
        }
    }

    function checkPassword(str){
        return /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{4,}$/.test(str);
    }
})