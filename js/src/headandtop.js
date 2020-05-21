// main.js

(function($){
  // start
  var win = $(window);
  var headBox =$('#headBox');
  var h1 = $('h1');
  var gnbMenu = headBox.find('.menu');
  var unb = $('.unb');
  var pullBtn = $('#pull');
  console.log(pullBtn);
  var winW = $(window).width();

  var pullLogoText = '<div class="pull_logo hidden_wrap"><a href="./main.html"><span>a twosome place</span></a></div>';
  headBox.before(pullLogoText);
  var pullLogo = $('.pull_logo');

  var mob = function(){
    gnbMenu.hide();
    pullBtn.on('click',function(e){
      e.preventDefault();
      gnbMenu.toggle();
      $(this).toggleClass('action');
    });
  };

  var pcFull =function(){
    $(window).on('scroll',function(){
      var winScroll = $(window).scrollTop();
      // console.log(winScroll);
      if(winScroll<=150){
        h1.css({display:'block'});
        pullLogo.css({display:'none'});
        gnbMenu.css({float:'none', margin:'auto', marginTop: '20px'});
        unb.css({top:0});
      }else{
        h1.css({display:'none'});
        pullLogo.css({display:'block'});
        gnbMenu.css({float:'right', margin:0, marginTop: '20px', marginRight:'5%'});
        unb.css({top:'20px'});
      }
    });
  }

  if(winW<1024){
    mob();
  }else if(winW>=1024){
    pcFull();
  }

  // resize -------------------------------------------------------
  win.on('resize',function(){
    var nowWinW = win.width();
    var deviceWidthCheck = (winW !== nowWinW);

    if(deviceWidthCheck){
      location.reload(); 
    }
  });
  
  // top ------------------------------------------------------------
  var topMvBtn = $('.top_btn_area');

  $(window).on('scroll', function(){
    var winScroll = $(window).scrollTop();
    (winScroll>=300)? topMvBtn.stop().fadeIn(300) : topMvBtn.stop().fadeOut(300);
  });

  topMvBtn.on('click',['a'],function(e){
    $('html, body').animate({scrollTop:0},300);
  });

  // end
})(jQuery);