// menu_coffe.js

(function($){
  // start

  // newList_01 -----------------------------------------------------------------------------------
  var newList_01 = [
    {img:'mb_101.png',pcImg:'mb_101.png', imgNarr:'이미지설명', title:'아메리카노', content:'ladsfasdforem........'},
    {img:'mb_102.png',pcImg:'mb_102.png', imgNarr:'이미지설명', title:'아메리카노', content:'Lorem ipsum dolor sit amet '},
    {img:'mb_103.png',pcImg:'mb_103.png', imgNarr:'이미지설명', title:'아메리카노', content:'lorem...dfs asdf adsfasdf.'},
    {img:'mb_104.png',pcImg:'mb_104.png', imgNarr:'이미지설명', title:'아메리카노', content:'lorem........'},
    {img:'mb_105.png',pcImg:'mb_105.png', imgNarr:'이미지설명', title:'아메리카노', content:'lorem........'},
    {img:'mb_106.png',pcImg:'mb_106.png', imgNarr:'이미지설명', title:'아메리카노', content:'lorem........'},
    {img:'mb_107.png',pcImg:'mb_107.png', imgNarr:'이미지설명', title:'아메리카노', content:'lorem........'}

  ];

  var imgUrl ='../../../img/menu/crop_menu/coffee/';

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
                                backgroundPosition:'50% 50%',
                                backgroundSize:'cover'
                              })
  }
  // //newList_01 ------------------------------------------------------------------------------

  // newList_02 --------------------------------------------------------------------------------
  var newList_02 = [
    {img:'mb_201.png',pcImg:'mb_201.png', imgNarr:'이미지설명', title:'아메리카노', content:'ladsfasdforem........'},
    {img:'mb_202.png',pcImg:'mb_202.png', imgNarr:'이미지설명', title:'아메리카노', content:'Lorem ipsum dolor sit amet '},
    {img:'mb_203.png',pcImg:'mb_203.png', imgNarr:'이미지설명', title:'아메리카노', content:'lorem...dfs asdf adsfasdf.'},
    {img:'mb_204.png',pcImg:'mb_204.png', imgNarr:'이미지설명', title:'아메리카노', content:'lorem........'},
    {img:'mb_205.png',pcImg:'mb_205.png', imgNarr:'이미지설명', title:'아메리카노', content:'lorem........'},
    {img:'mb_206.png',pcImg:'mb_206.png', imgNarr:'이미지설명', title:'아메리카노', content:'lorem........'},
    {img:'mb_207.png',pcImg:'mb_207.png', imgNarr:'이미지설명', title:'아메리카노', content:'lorem........'},
    {img:'mb_208.png',pcImg:'mb_208.png', imgNarr:'이미지설명', title:'아메리카노', content:'lorem........'}

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
                                backgroundPosition:'50% 50%',
                                backgroundSize:'cover'
                              })
  }

  // //newList_02 ------------------------------------------------------------------------------


  // newList_03 --------------------------------------------------------------------------------
  var newList_03 = [
    {img:'mb_301.png',pcImg:'mb_301.png', imgNarr:'이미지설명', title:'아메리카노', content:'ladsfasdforem........'},
    {img:'mb_302.png',pcImg:'mb_302.png', imgNarr:'이미지설명', title:'아메리카노', content:'Lorem ipsum dolor sit amet '},
    {img:'mb_303.png',pcImg:'mb_303.png', imgNarr:'이미지설명', title:'아메리카노', content:'lorem...dfs asdf adsfasdf.'},
    {img:'mb_304.png',pcImg:'mb_304.png', imgNarr:'이미지설명', title:'아메리카노', content:'lorem........'},
    {img:'mb_305.png',pcImg:'mb_305.png', imgNarr:'이미지설명', title:'아메리카노', content:'lorem........'},
    {img:'mb_306.png',pcImg:'mb_306.png', imgNarr:'이미지설명', title:'아메리카노', content:'lorem........'},
    {img:'mb_307.png',pcImg:'mb_307.png', imgNarr:'이미지설명', title:'아메리카노', content:'lorem........'},
    {img:'mb_308.png',pcImg:'mb_308.png', imgNarr:'이미지설명', title:'아메리카노', content:'lorem........'}

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
                                backgroundPosition:'50% 50%',
                                backgroundSize:'cover'
                              })
  }

  // //newList_03 ------------------------------------------------------------------------------


  // newList_04 --------------------------------------------------------------------------------
  var newList_04 = [
    {img:'mb_401.png',pcImg:'mb_401.png', imgNarr:'이미지설명', title:'아메리카노', content:'ladsfasdforem........'},
    {img:'mb_402.png',pcImg:'mb_402.png', imgNarr:'이미지설명', title:'아메리카노', content:'Lorem ipsum dolor sit amet '},
    {img:'mb_403.png',pcImg:'mb_403.png', imgNarr:'이미지설명', title:'아메리카노', content:'lorem...dfs asdf adsfasdf.'},
    {img:'mb_404.png',pcImg:'mb_404.png', imgNarr:'이미지설명', title:'아메리카노', content:'lorem........'},
    {img:'mb_405.png',pcImg:'mb_405.png', imgNarr:'이미지설명', title:'아메리카노', content:'lorem........'},
    {img:'mb_406.png',pcImg:'mb_406.png', imgNarr:'이미지설명', title:'아메리카노', content:'lorem........'},
    {img:'mb_407.png',pcImg:'mb_407.png', imgNarr:'이미지설명', title:'아메리카노', content:'lorem........'},
    {img:'mb_408.png',pcImg:'mb_408.png', imgNarr:'이미지설명', title:'아메리카노', content:'lorem........'}

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
                                backgroundPosition:'50% 50%',
                                backgroundSize:'cover'
                              })
  }

  // //newList_04 ------------------------------------------------------------------------------

  // tab 버튼 동작
  var subMenu = $('.sub_menu');
  var subMenuLi = subMenu.find('li');
  var menuBoxUl = menuBox.find('ul');

  subMenuLi.find('a').on('click focus',function(e){
    e.preventDefault();
    var thisIt = $(this).parent('li');
    var thisIndex = thisIt.index();
    // console.log(thisIndex);
    menuBoxUl.eq(thisIndex).show();
    menuBoxUl.eq(thisIndex).siblings().hide();

    thisIt.siblings().removeClass('active');
    thisIt.addClass('active');
  })


  // end
})(jQuery);