window.onload = function(){
    $.noConflict();
    var daynightImg = document.querySelector(".daynightbtn > img");
    var sideDayNight = document.querySelector("#sidebar > div > ul > li img");
    dayornight = false;

    //메뉴 해와 달 버튼
    //$(".menu .daynightbtn, #sidebar .daynightbtn").on("click", sunmoonToggle)     //아래 a연결 해와달 연결에 on("click)으로 연결시킴
    var sunmoonToggle = function(){
        //console.log(dayornight + " 밤입니다")
        if(dayornight){
            //-------------------------밤 일때-----------------------------
            daynightImg.setAttribute("src","images/daynightNightBtn.svg");
            $(daynightImg).css("animation","none");
            sideDayNight.setAttribute("src","images/daynightNightBtn.svg");
            $(sideDayNight).css("animation","none");
            $("*").css({
                "color" : "rgb(53 47 58)",
            });
            $("#uppertop a, .menu > nav a, header > #room a#lighton").css({
                "color" : "rgb(215 209 221)"
            });
            $(".wrap, .box1300").css({
                "background-color" : "rgb(19 17 40)"
            });
            $( "#contents").css({
                "background-color" : "linear-gradient(0deg, rgba(240,199,120,0.2) 0%, rgba(240,199,120,0.8) 80%, rgba(240,199,120,1) 100%)"
            });
            $("#sidebar").css({
                "background-color": "rgb(211 147 35)"
            });
            $("#sidebar > div > li").css({
                "border-top" : "1px dotted rgb(255,255,255,.3)",
                "border-bottom" : "1px dotted rgb(255,255,255,.3)"
            });
            $("header #room").css({
                "background-image" : "url(images/roomnight.png)"
            });
            $("header > #room p").css("background-color","rgba(255, 255, 255, 0.3")
            $("#contents > section > div.seemore").css("backgroundColor", "rgb(159 138 101)")
            $(".swiper-slide").css({
                "background-color" : "rgba(255, 255, 255, 0.3)"
            })
            $(".conts3 > article > div.contact").css({
                "background-color": "rgb(143 125 92)",
            })

        }else{
            //-------------------------낮 일때-----------------------------
            daynightImg.setAttribute("src","images/daynightDayBtn.svg");
            $(daynightImg).css("animation","dayroll 10s linear infinite");
            sideDayNight.setAttribute("src","images/daynightDayBtn.svg");
            $(sideDayNight).css("animation","dayroll 10s linear infinite");
            $("*").css({
                "color" : "rgb(25 126 94)",
            });
            $(".wrap, .box1300").css({
                "background-color" : "rgb(161 204 235)"
            });
            $( "#contents").css({
                //"background-color" : "rgb(255 237 207)"
                "background-color" : "linear-gradient(0deg, rgba(255, 237, 207,0.2) 0%, rgba(255, 237, 207,0.8) 80%, rgba(255, 237, 207,1) 100%)"
            });
            $("#sidebar").css({
                "background-color": "rgba(255, 237, 207, 0.5)"
            });
            $("#sidebar > div > li").css({
                "border-top" : "1px dotted rgb(25 126 94)",
                "border-bottom" : "1px dotted rgb(25 126 94)"
            })
            $("header #room").css({
                "background-image" : "url(images/roomday.png)"
            });
            $("header > #room p").css("background-color","rgba(255, 255, 255, 0.7");
            $("#contents > section > div.seemore").css("backgroundColor", "rgb(179 145 138)")
            $(".swiper-slide").css({
                "background-color" : "rgb(204 128 111)"
            })
            $(".swiper-slide > div.infopage * ").css({
                "color" : "rgb(76 55 37)"
            })
            $(".myinfo > p").css({
                "color" : "rgb(76 55 37)",
            })
            $(".conts3 > article > div.contact").css({
                "background-color": "rgb(179 159 159)",
            })
        };
        //console.log(dayornight + " 낮입니다")
        dayornight = !dayornight;
        //dayornight를 위 식의 결과인 !dayornight로 재정의해줌
    }
  
    
    //header #room lamp
    var lampBtn = document.querySelector("#room > div > div#lamp > img");
    var clickBtn = document.querySelector("#room > div > p");
    var lamplight = document.querySelector("header > #room > div.lamplight");
    var content = document.querySelector("div#contents");
    var lamponoff = true;
    // console.log(lamplight)
    var lampToggle = lampBtn.onclick = function(){
        if(lamponoff){
            lamplight.style.opacity = '1';
            lamplight.style.visibility= 'visible';
            content.style.opacity = '1';
            content.style.visibility = 'visible';
            $(".wrap").css({
                "height" : "auto",
                "overflow" : "visible",
                "background-size" : "auto"
            });
            $("header nav li:nth-child(3) a").attr('href','#goportfolio');
            $("header nav li:nth-child(4) a").attr('href','#goaboutme');
            $("header nav li:nth-child(5) a").attr('href','#goetc');
         }else {
            lamplight.style.opacity = '0';
            lamplight.style.visibility= 'hidden';  
            content.style.opacity = '0';
            content.style.visibility = 'hidden';
            $(".wrap").css({
                "height" : "100%",
                "overflow" : "hidden",
                "background-size" : "cover"
            });
        }
        lamponoff = !lamponoff;
    };
    var clickToggle = clickBtn.onclick = function(){
        if(lamponoff){
            lamplight.style.opacity = '1';
            lamplight.style.visibility= 'visible';
            content.style.opacity = '1';
            content.style.visibility = 'visible';
            $(".wrap").css({
                "height" : "auto",
                "overflow" : "visible",
                "background-size" : "auto"
            });
            $("header nav li:nth-child(3) a").attr('href','#goportfolio');
            $("header nav li:nth-child(4) a").attr('href','#goaboutme');
            $("header nav li:nth-child(5) a").attr('href','#goetc');
         }else {
            lamplight.style.opacity = '0';
            lamplight.style.visibility= 'hidden';  
            content.style.opacity = '0';
            content.style.visibility = 'hidden';
            $(".wrap").css({
                "height" : "100%",
                "overflow" : "hidden",
                "background-size" : "cover"
            });
            $("header nav li a").attr('href','#')
        }
        lamponoff = !lamponoff;
    }


    //포트폴리오 슬라이드
    const swiper = new Swiper('.swiper', {
        // Optional parameters
        // direction: 'vertical',
        loop: true,
        // effect: slide,
        mousewheel: false,
        slidesPerView: 1,
        slidesPerGroup: 1,
        breakpoints:{
            1500:{
                spaceBetween: 50
            },
            300:{
                spaceBetween: 30,
            }
        },

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

    });

    //포트폴리오 속 사진 클릭시 해당 페이지 이동
    var gow3cPF = document.getElementById("w3cportfolio");
    gow3cPF.onclick = function(){
        window.open("https://jsj0832.cafe24.com/wwa9/css/w3cportfolio.html","_blank")
    };
    gow3cPF.addEventListener("keypress", function(e){
        if(e.code === 'Enter'){
            window.open("https://jsj0832.cafe24.com/wwa9/css/w3cportfolio.html","_blank")
        }
    }, false)
    var gochilsal = document.getElementById("chilsal");
    gochilsal.onclick = function(){
        window.open("https://jsj0832.cafe24.com/homework/portfolio/chilsal/chilsal-index.html", "_blank");
    };
    gochilsal.addEventListener("keypress", function(e){
        if(e.code === "Enter"){
            window.open("https://jsj0832.cafe24.com/homework/portfolio/chilsal/chilsal-index.html", "_blank");
        };
    });
    var gowildsoul = document.getElementById("wildsoul");
    gowildsoul.onclick = function(){
        window.open("https://jsj0832.cafe24.com/homework/portfolio/wildsoul/wildsoul.html" ,"_blank")
    };
    gowildsoul.addEventListener('keypress', function(e){
        if(e.code === 'Enter'){
            window.open("https://jsj0832.cafe24.com/homework/portfolio/wildsoul/wildsoul.html" ,"_blank")            
        };
    });
    var goroomlight = document.getElementById("roomlight")
    goroomlight.onclick = function(){
        window.open("https://jsj0832.cafe24.com/homework/portfolio/mainpage/index.html")
    };
    goroomlight.addEventListener("keydown", function(e) {
        if(e.code === "Enter"){
            window.open("https://jsj0832.cafe24.com/homework/portfolio/mainpage/index.html")
        };
    });


    //conts about me클릭이벤트
    var openAbMe = document.querySelector("#openAbMe");
    var openMyInfo = document.querySelector(".conts1 article")
    var myInfo = document.querySelector(".myinfo")
    var openSeeMore = document.querySelector(".seemore")
    // conts1 about me progress
    var progressWrap = document.querySelector(".progress");
    var progressBar3 = document.getElementById("progress-bar3");
    
    var openAbMeMethod = function(){
        if(!dayornight){
            openAbMe.style.top = "-10%"
            setTimeout(() => {
                openMyInfo.style.visibility = "visible";
                openMyInfo.style.opacity = "1";
                openMyInfo.style.height = "100%";
                myInfo.style.height = "100%";
                myInfo.style.transform = "translateY(0px)";
                openSeeMore.style.transform = "translateY(0%)";
               
                //js progressbar 3 이벤트 
                var per3 = document.getElementById("per3");
                perValue= 0;
                var per3Percent = setInterval(function(){
                        perValue++;
                        per3.innerText = perValue + "%";
                        if(perValue >= 55){
                            clearInterval(per3Percent);
                        }
                    },50);
                
                var chgColor = setInterval(jsPercent, 1000) ; 
                function jsPercent(){
                    progressBar3.style.transition = "3s";
                    progressBar3.style.height = "55%";
                    progressBar3.style.backgroundColor = `rgb( ${Math.random()*(255 - 0) + 50}, ${Math.random()*(255 - 0) + 50}, ${Math.random()*(255 - 0) + 50})`;
                }   

            },500);
            openSeeMore.children[0].innerText = "닫기"
            
        }else{
            openMyInfo.style.visibility = "hidden";
            openMyInfo.style.opacity = "0";
            // openMyInfo.style.padding= "0";
            openMyInfo.style.height = "0%";
            myInfo.style.transform = "translateY(999px)";
            setTimeout(() => {
                openAbMe.style.top = "50%"
                openSeeMore.style.transform = "translateY(-200%)";
                //openSeeMore.style.transition= "1s";
            }, 800);  
            openSeeMore.children[0].innerText = "더 알아보기";
            
            
        }
        dayornight = !dayornight;
    }      
    openAbMe.onclick = function(){
        openAbMeMethod();
    }
    openSeeMore.onclick = function(){
        openAbMeMethod();
    };
    openSeeMore.addEventListener("keypress", function(e){
        if(e.code === 'Enter'){
            openAbMeMethod();
        }
    },false)


    //스크롤링 이벤트 
    $(window).scroll(function(){
        $(".conts2 .conts-title, .conts2 #portfolio").each(function(){
            var bottom_of_element = $(this).offset().top + $(this).outerHeight() / 0.5;
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            console.log($(".conts2 #portfolio").offset() )
            if(bottom_of_window > bottom_of_element){
                console.log("hi")
                $(this).css({
                    "transform" : "translateY(0%)"
                })
                $(".conts2 #portfolio").css({
                    "transform" : "translateY(0%)",
                    "height" : "100%",
                });
            }
        });
        

        //sidebar fixed
        if($("#sidebar").offset().top > 300){
           // console.log($("#sidebar").offset().top)
            $("#sidebar").css({
                "transform" : "translateX(0)"
            })
        }else if($("#sidebar").offset().top <= 300){
           
            $("#sidebar").css({
                "transform" : "translateX(999px)"
            })
        };
    });

    //contact sns 연결
    var tStory = document.getElementById("tstory");
    var tStoryLink = 'https://gotyoudong.tistory.com/'
    tStory.onclick = function(){
        window.open(tStoryLink)
    }
    
    //a 연결
    var lightOn = document.getElementById("lighton");
    // window.onkeydown = (e) => console.log(e);
    lightOn.addEventListener("keypress", actEnter, false);
    function actEnter(e){
        if(e.keyCode === 13){
            clickToggle();
        };
    }

    //a 연결 해와 달
    $(".daynightbtn > img, #sidebar > div > ul > li img").keypress(actEnter2).on("click", sunmoonToggle)
    function actEnter2(e){
        if(e.keyCode === 13) {
            sunmoonToggle();
        };
    }
    
    

}   

