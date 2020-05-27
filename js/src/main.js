// main.js

(function($){
  //start
  var coffeeBox = $('#coffeeBox');
  var mainBg = coffeeBox.children('.main_bg');
  var mainBgWrap = mainBg.children('.main_bg_wrap');
  var mainBgLi = mainBgWrap.children('li');

  var mainBgLiLast = mainBgLi.eq(-1).clone(true);
  mainBgWrap.prepend(mainBgLiLast);

  mainBgLi = mainBgWrap.children('li');
  var mainBgLiLen = mainBgLi.length;

  var liWidth = 100/mainBgLiLen;
  mainBgWrap.css({width:mainBgLiLen*100+'%',transform:'translateX(-' + liWidth + '%)'});
  mainBgLi.css({width:liWidth+'%'});
  // console.log(mainBgLiLen);

  var slideBtn = $('.next');
  var n = 0;
  var timed = 600;


  // button slide
  slideBtn.on('click',function(e){
    e.preventDefault();
    n+=1;

    mainBgWrap.stop().animate({marginLeft: n*-100 + '%'}, function(){
      if(n>=mainBgLiLen-2){
        n = -1;
        mainBgWrap.css({marginLeft: n*-100 + '%'});
      }
    });
  })


  // 자동 슬라이드 기능
  var SetSlideInterval;
  var mySlideGo = function(){
    SetSlideInterval = setInterval(function(){
      slideBtn.trigger('click');
    }, timed*6);
  }
  var mySlideStop = function(){
    clearInterval(SetSlideInterval);  
  }

  mySlideGo(); 
  coffeeBox.on({mouseenter:mySlideStop,mouseleave:mySlideGo});


  //end
})(jQuery);