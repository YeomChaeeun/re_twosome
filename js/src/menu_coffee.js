// menu_coffe.js
var newList_01, newList_02, newList_03, newList_04;

(function($){
  // start

  // newList_01 -----------------------------------------------------------------------------------
  newList_01 = [
    {img:'mb_401.png',pcImg:'mb_401.png', imgNarr:'이미지설명', title:'흑당 곡물라떼', content:'ladsfasdforem........'},
    {img:'mb_402.png',pcImg:'mb_402.png', imgNarr:'이미지설명', title:'아이스 흑당 곡물라떼', content:'Lorem ipsum dolor sit amet '},
    {img:'mb_403.png',pcImg:'mb_403.png', imgNarr:'이미지설명', title:'상그리아 에이드', content:'lorem...dfs asdf adsfasdf.'},
    {img:'mb_404.png',pcImg:'mb_404.png', imgNarr:'이미지설명', title:'레몬 셔벗 에이드', content:'lorem........'},
    {img:'mb_405.png',pcImg:'mb_405.png', imgNarr:'이미지설명', title:'블루베리 요거트 드링크', content:'lorem........'},
    {img:'mb_406.png',pcImg:'mb_406.png', imgNarr:'이미지설명', title:'요거트 드링크', content:'lorem........'},
    {img:'mb_407.png',pcImg:'mb_407.png', imgNarr:'이미지설명', title:'자몽에이드', content:'lorem........'},
    {img:'mb_408.png',pcImg:'mb_408.png', imgNarr:'이미지설명', title:'오렌지에이드', content:'lorem........'},
    {img:'mb_409.png',pcImg:'mb_409.png', imgNarr:'이미지설명', title:'초콜릿 라떼', content:'lorem........'},
    {img:'mb_410.png',pcImg:'mb_410.png', imgNarr:'이미지설명', title:'아이스 초콜릿 라떼', content:'lorem........'}
  ];

  var imgUrl ='../img/menu/coffee/';

  var menuBox = $('#menuBox');
  menuBox.append('<ul class="menu_list menu_01 clearfix active"></ul>');
  var menuBoxUl_01 = menuBox.children('.menu_01');
  
  var textEl = function(i){
    var	listEl = '<li>\
            <a href="#">\
              <div class="img_bg"><span class="hidden">'+ newList_01[i].imgNarr +'</span></div>\
              <dl><dt>'+ newList_01[i].title +'</dt>\
                <!--<dd>'+ newList_01[i].content +'</dd>-->\
              </dl>\
            </a>\
            </li>';
    return listEl;
  };
  
  var i=0;
  for(; i<newList_01.length; i++){	
    menuBoxUl_01.append( textEl(i) );
    menuBoxUl_01.children('li').eq(i).find('.img_bg').css({
                                backgroundImage:'url('+ imgUrl +newList_01[i].img +')',
                                backgroundRepeat:'no-repeat',
                                backgroundPosition:'50% 50%'
                              })
  }
  // //newList_01 ------------------------------------------------------------------------------

  // newList_02 --------------------------------------------------------------------------------
  newList_02 = [
    {img:'mb_101.png',pcImg:'mb_101.png', imgNarr:'이미지설명', title:'달고나 카페 라떼', content:'ladsfasdforem........'},
    {img:'mb_102.png',pcImg:'mb_102.png', imgNarr:'이미지설명', title:'롱블랙', content:'Lorem ipsum dolor sit amet '},
    {img:'mb_103.png',pcImg:'mb_103.png', imgNarr:'이미지설명', title:'아이스 롱블랙', content:'lorem...dfs asdf adsfasdf.'},
    {img:'mb_104.png',pcImg:'mb_104.png', imgNarr:'이미지설명', title:'아이스 숏라떼', content:'lorem........'},
    {img:'mb_105.png',pcImg:'mb_105.png', imgNarr:'이미지설명', title:'카페 아메리카노', content:'lorem........'},
    {img:'mb_106.png',pcImg:'mb_106.png', imgNarr:'이미지설명', title:'카푸치노', content:'lorem........'},
    {img:'mb_107.png',pcImg:'mb_107.png', imgNarr:'이미지설명', title:'카페라떼', content:'lorem........'}
  ];

  menuBox.append('<ul class="menu_list menu_02 clearfix"></ul>');
  var menuBoxUl_02 = menuBox.children('.menu_02');
  
  var textEl = function(i){
    var	listEl = '<li>\
            <a href="#">\
              <div class="img_bg"><span class="hidden">'+ newList_02[i].imgNarr +'</span></div>\
              <dl><dt>'+ newList_02[i].title +'</dt>\
                <!--<dd>'+ newList_02[i].content +'</dd>-->\
              </dl>\
            </a>\
            </li>';
    return listEl;
  };
  
  var i=0;
  for(; i<newList_02.length; i++){	
    menuBoxUl_02.append( textEl(i) );
    menuBoxUl_02.children('li').eq(i).find('.img_bg').css({
                                backgroundImage:'url('+ imgUrl +newList_02[i].img +')',
                                backgroundRepeat:'no-repeat',
                                backgroundPosition:'50% 50%'
                              })
  }

  // //newList_02 ------------------------------------------------------------------------------


  // newList_03 --------------------------------------------------------------------------------
  newList_03 = [
    {img:'mb_201.png',pcImg:'mb_201.png', imgNarr:'이미지설명', title:'망고 바나나 라떼', content:'ladsfasdforem........'},
    {img:'mb_202.png',pcImg:'mb_201.png', imgNarr:'이미지설명', title:'제주 말차 프라페', content:'ladsfasdforem........'},
    {img:'mb_203.png',pcImg:'mb_202.png', imgNarr:'이미지설명', title:'로얄 밀크티 쉐이크', content:'Lorem ipsum dolor sit amet '},
    {img:'mb_204.png',pcImg:'mb_203.png', imgNarr:'이미지설명', title:'스트로베리 피치 프라페', content:'lorem...dfs asdf adsfasdf.'},
    {img:'mb_205.png',pcImg:'mb_204.png', imgNarr:'이미지설명', title:'커피 쉐이크', content:'lorem........'},
    {img:'mb_206.png',pcImg:'mb_205.png', imgNarr:'이미지설명', title:'초코 쉐이크', content:'lorem........'},
    {img:'mb_207.png',pcImg:'mb_205.png', imgNarr:'이미지설명', title:'바닐라 쉐이크', content:'lorem........'},
    {img:'mb_208.png',pcImg:'mb_206.png', imgNarr:'이미지설명', title:'요거 프라페', content:'lorem........'},
    {img:'mb_209.png',pcImg:'mb_207.png', imgNarr:'이미지설명', title:'모카칩 프라페', content:'lorem........'},
    {img:'mb_210.png',pcImg:'mb_208.png', imgNarr:'이미지설명', title:'카라멜 프라페', content:'lorem........'},
    {img:'mb_211.png',pcImg:'mb_208.png', imgNarr:'이미지설명', title:'망고 프라페', content:'lorem........'}
  ];

  menuBox.append('<ul class="menu_list menu_03 clearfix"></ul>');
  var menuBoxUl_03 = menuBox.children('.menu_03');
  
  var textEl = function(i){
    var	listEl = '<li>\
            <a href="#">\
              <div class="img_bg"><span class="hidden">'+ newList_03[i].imgNarr +'</span></div>\
              <dl><dt>'+ newList_03[i].title +'</dt>\
                <!--<dd>'+ newList_03[i].content +'</dd>-->\
              </dl>\
            </a>\
            </li>';
    return listEl;
  };
  
  var i=0;
  for(; i<newList_03.length; i++){	
    menuBoxUl_03.append( textEl(i) );
    menuBoxUl_03.children('li').eq(i).find('.img_bg').css({
                                backgroundImage:'url('+ imgUrl +newList_03[i].img +')',
                                backgroundRepeat:'no-repeat',
                                backgroundPosition:'50% 50%'
                              })
  }

  // //newList_03 ------------------------------------------------------------------------------


  // newList_04 --------------------------------------------------------------------------------
  newList_04 = [
    {img:'mb_301.png',pcImg:'mb_301.png', imgNarr:'이미지설명', title:'TWG 흑당 버블 밀크티', content:'ladsfasdforem........'},
    {img:'mb_302.png',pcImg:'mb_302.png', imgNarr:'이미지설명', title:'허니레몬티', content:'ladsfasdforem........'},
    {img:'mb_303.png',pcImg:'mb_303.png', imgNarr:'이미지설명', title:'아이스 애플민트티', content:'Lorem ipsum dolor sit amet '},
    {img:'mb_304.png',pcImg:'mb_304.png', imgNarr:'이미지설명', title:'애플민트티', content:'Lorem ipsum dolor sit amet '},
    {img:'mb_305.png',pcImg:'mb_305.png', imgNarr:'이미지설명', title:'아이스 그나와 민트티', content:'Lorem ipsum dolor sit amet '},
    {img:'mb_306.png',pcImg:'mb_306.png', imgNarr:'이미지설명', title:'그나와 민트티', content:'lorem...dfs asdf adsfasdf.'},
    {img:'mb_307.png',pcImg:'mb_307.png', imgNarr:'이미지설명', title:'카모마일', content:'lorem...dfs asdf adsfasdf.'},
    {img:'mb_308.png',pcImg:'mb_308.png', imgNarr:'이미지설명', title:'프렌치 얼그레이', content:'lorem........'},
    {img:'mb_309.png',pcImg:'mb_309.png', imgNarr:'이미지설명', title:'1837 블랙티', content:'lorem........'},
    {img:'mb_310.png',pcImg:'mb_310.png', imgNarr:'이미지설명', title:'허니레몬 아이스티', content:'lorem........'},
    {img:'mb_311.png',pcImg:'mb_311.png', imgNarr:'이미지설명', title:'로얄 밀크티', content:'lorem........'}
  ];

  menuBox.append('<ul class="menu_list menu_04 clearfix"></ul>');
  var menuBoxUl_04 = menuBox.children('.menu_04');
  
  var textEl = function(i){
    var	listEl = '<li>\
            <a href="#">\
              <div class="img_bg"><span class="hidden">'+ newList_04[i].imgNarr +'</span></div>\
              <dl><dt>'+ newList_04[i].title +'</dt>\
                <!--<dd>'+ newList_04[i].content +'</dd>-->\
              </dl>\
            </a>\
            </li>';
    return listEl;
  };
  
  var i=0;
  for(; i<newList_04.length; i++){	
    menuBoxUl_04.append( textEl(i) );
    menuBoxUl_04.children('li').eq(i).find('.img_bg').css({
                                backgroundImage:'url('+ imgUrl +newList_04[i].img +')',
                                backgroundRepeat:'no-repeat',
                                backgroundPosition:'50% 50%'
                              })
  }

  // //newList_04 ------------------------------------------------------------------------------

  // tab 버튼 동작
  var subMenu = $('.sub_menu');
  var subMenuLi = subMenu.find('li');
  var menuBoxUl = menuBox.find('ul');

  var menuList = menuBox.find('.menu_list');
  var menuBoxLi;

  subMenuLi.find('a').on('click focus',function(e){
    e.preventDefault();
    var thisIt = $(this).parent('li');
    var subMenuLiIndex = thisIt.index();
    // console.log(thisIndex);
    menuBoxUl.eq(subMenuLiIndex).show();
    menuBoxUl.eq(subMenuLiIndex).siblings().hide();

    thisIt.siblings().removeClass('active');
    thisIt.addClass('active');
  })

  // zoom mouseenter
  
  menuBoxLi = menuList.children('li');    
  menuBoxLi.find('a').on('mouseenter focus',function(e){
    e.preventDefault();
    var thisIt = $(this).parent('li');

    thisIt.addClass('zoom');
    thisIt.siblings().removeClass('zoom');
  });

  menuBoxLi.find('a').on('mouseleave',function(e){
    e.preventDefault();
    menuBoxLi.removeClass('zoom');
  });


  // modal



  // end
})(jQuery);