$(function(){
    $('#fullpage').fullpage({
        // sectionsColor: [ '#484848' , '#2E4159' , '#8F8EBF' , '#9392d3' , '#5F5DA6' , '#4F4D8C' ,'#385a7a' , '#0B2559'],
        sectionsColor: [ '#b4aeb8' , '#eceaf8' , '#9d9ea0' , '#ccc'],
        anchors:       ['Home','About','Responsive','Graphic'],
		autoScrolling:true,
		scrollHorizontally:false,
        navigation:true,
        controlArrows: true,
        // navigationPosition:'left',
        afterLoad: function(anchorLink, index){
            // console.log(index + '번째 섹션');

            // if index(eq) addClass on
            if(index==1){
                console.log(index);
                $('.header_left h1 .img2').addClass('on');
                $('.header_left h1 .img1').removeClass('on');
                $('.home h1').addClass('on');
                $('.home .cic1').addClass('on');
                $('.home .cic2').addClass('on');
                $('.home .cic3').addClass('on');
                $('.home .cic4').addClass('on');
                $('.home .cic5').addClass('on');
                $('.home .cic6').addClass('on');
                $('.home .h2_1_ani').addClass('on');
                $('.home .h2_2_ani').addClass('on');
            }
            else if(index==2){
                console.log(index);
                $('.header_left h1 .img1').addClass('on');
                $('.header_left h1 .img2').removeClass('on');
                $('.about h2').addClass('on');
                $('.about .box2').addClass('on');
            }
            else if(index==3){
                console.log(index);
                $('.header_left h1 .img2').addClass('on');
                $('.header_left h1 .img1').removeClass('on');
                $('.responsive h2').addClass('on');
                $('.slide_wrap .rsp_slide').addClass('on');
                $('.slide_wrap .web_slide').addClass('on');
                $('.slide_wrap .m_slide').addClass('on');
                $('.responsive .respon_text .respon_text1').addClass('on');
                $('.responsive .respon_text .respon_text2').addClass('on');
            }
            else if(index==4){
                console.log(index);
                $('.header_left h1 .img1').addClass('on');
                $('.header_left h1 .img2').removeClass('on');
                $('.graphic h2').addClass('on');
                $('.gp_wrap .gp_inner_2').addClass('on');
                $('.gp_wrap .gp_inner_3').addClass('on');
                $('.gp_inner .gp_a').addClass('on');
            }
            //last section
            if(index==5){
                alert("끝까지 봐주셔서 감사합니다.");
            }
        },
        // afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){
        //     console.log("현재슬라이드 번호=" + slideIndex);
        // }
	});

    // gnb li
    $('.gnb li').mouseenter(function(){
        $(this).siblings().removeClass('on');
        $(this).addClass('on');
    });
    $('.gnb li').mouseleave(function(){
        $(this).removeClass('on');
    });

    //m_btn
    let sw = 0;
    $('.m_btn').click(function(){
        if(sw==0){
            $('.line').addClass('on');
            $('.cover').animate({'left':0});
            $('.cover .line').children().addClass('on');
            $('.header_right').animate({'width':'100px'});
            $('.gnb').addClass('on');
            sw=1;
        }else{
            $('.line').removeClass('on');
            $('.cover').animate({'left':'-100%'});
            $('.cover .line').children().removeClass('on');
            $('.header_right').animate({'width':'35%'});
            $('.gnb').removeClass('on');
            sw=0;
        }
    });

    //cover ul li
    $('.cover ul li').click(function(){
        $('.line').removeClass('on');
        $('.cover').delay(1000).animate({'left':'-100%'});
        $('.cover .line').children().removeClass('on');
        $('.header_right').animate({'width':'35%'});
        $('.gnb').removeClass('on');
        sw=0;
    });

 // about box2/3
    let sw1 = 0;
    $('.about .wrap .box1').click(function(){
        $(this).toggleClass('on');
        if(sw1==0){
            $('.about .wrap .box2').hide();
            $('.about .wrap .box3').fadeIn();
            sw1=1;
        }else{
            $('.about .wrap .box2').fadeIn();
            $('.about .wrap .box3').hide();
            sw1=0;
        }
    })

    // rsp slide
    $('.rsp_slide').slick({
        dots:false,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear'
    });
    // web slide
    $('.web_slide').slick({
        dots:false,
        infinite: true,
        speed: 500,
        cssEase: 'linear'
    });
    // m_slide
    $('.m_slide').slick({
        dots:false,
        infinite: true,
        speed: 500,
        cssEase: 'linear'
    });

   //box a scale
    $('.box a').mouseenter(function(){
        $('.box a').addClass('on');
        $(this).css( "transform", "translateX(-50%) scale(1.1)" );
        $(this).css( "transition", "all 0.1s ease-in");
    })
    $('.box a').mouseleave(function(){
        $('.box a').removeClass('on');
        $(this).css( "transform", "translateX(-50%) scale(1)" );
        $(this).css( "transition", "all 0.1s ease-out");
    })

    // cover fadeout
    $('.cover2').click(function(){
        $(this).fadeOut(300);
    })

    // gp_inner li
    $('.gp_inner li').click(function(){
        let num2 = $(this).index();
        // console.log(num2);
        $('.cover2').show(500);
        $('.cover2 li').removeClass('on');
        $('.cover2 li').eq(num2).addClass('on');
    })
});