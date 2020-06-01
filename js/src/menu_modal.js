// menu.js

(function($){
  // start
  var menuBox = $('#menuBox');
  var bigModalText = '<div class="big_modal">\
            <div class="big_img">\
              <div class="close_btn"><button type="button"><span class="hidden">닫기</span></button></div>\
            </div>\
            <div class="big_bg"></div></div>';

  menuBox.append(bigModalText);
  var bigModal = menuBox.children('.big_modal');
  var bigModalBtn = bigModal.find('.close_btn');
  var bigImg = bigModal.find('.big_img');
  var bigBg = bigModal.find('.big_bg');

  var bigUrl = '../img/menu/coffee/';

  var menuList = menuBox.find('.menu_list');
  var menuBoxLi = menuList.children('li');    
  var subMenu = $('.sub_menu');
  var subMenuLi = subMenu.find('li');
  
  var menuListIndex = 0;
  var i = 0;
  var subMenuLiIndex = 0;

  var modalList = newList_01;

  var Fnmodal = function(subMenuLiIndex){
    if(subMenuLiIndex==0){
      console.log('subMenu : '+(subMenuLiIndex+1));
      return newList_01;
    }else if(subMenuLiIndex==1){
      console.log('subMenu : '+2);
      return newList_02;
    }else if(subMenuLiIndex==2){
      console.log('subMenu : '+3);
      return newList_03;
    }else if(subMenuLiIndex==3){
      console.log('subMenu : '+4);
      return newList_04;
    }
  }

  subMenuLi.find('a').on('click focus',function(e){
    e.preventDefault();
    subMenuLiIndex = $(this).parent('li').index();
    // modalList = 'newList_0'+(subMenuLiIndex+1);
    modalList = Fnmodal(subMenuLiIndex);
    console.log(modalList);
  });


  menuBoxLi.find('a').on('click',function(e){
    e.preventDefault();
    var itIndex = $(this).parent('li').index();
    n = itIndex;

    bigImg.css({backgroundImage:'url('+bigUrl+modalList[itIndex].img+')',backgroundSize:'50%',backgroundPosition:'50% 50%',backgroundRepeat:'no-repeat'});

    bigModal.fadeIn(function(){
      $(window).on('keyup',function(evt){
        var keyCode = evt.keyCode;
        // console.log(keyCode);
        // 왼37, 오른39, 빠져나가기27
        if(keyCode ===37){
          n-=1;
          if(n<0){n=modalList.length-1;}
          bigImg.css({backgroundImage:'url('+bigUrl+modalList[n].img+')'});
        }else if(keyCode ===39){
          n+=1;
          if(n>modalList.length-1){n=0;}
          bigImg.css({backgroundImage:'url('+bigUrl+modalList[n].img+')'});
        }else if(keyCode ===27){
          bigModal.fadeOut(400,function(){
            menuBoxLi.eq(0).find('a').focus();
          });
        }
      });
    });
    
  });
  

  bigModalBtn.on('click',function(e){
    e.preventDefault();
    bigModal.fadeOut();
  });
  bigBg.on('click',function(){
    bigModal.fadeOut();
  });

  // end
})(jQuery);