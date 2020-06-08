// menu_coffe.js
var newList_01, newList_02, newList_03, newList_04;

(function($){
  // start

  // newList_01 -----------------------------------------------------------------------------------
  newList_01 = [
    {img:'mb_401.png',pcImg:'mb_401.png', imgNarr:'이미지설명', price:'4,500', title:'흑당 곡물라떼', content:'다양한 곡물로 맛을 내어 고소하고 한 끼 식사로 손색없는 라떼'},
    {img:'mb_402.png',pcImg:'mb_402.png', imgNarr:'이미지설명', price:'4,500', title:'아이스 흑당 곡물라떼', content:'다양한 곡물로 맛을 내어 고소하고 한 끼 식사로 손색없는 라떼'},
    {img:'mb_403.png',pcImg:'mb_403.png', imgNarr:'이미지설명', price:'4,500', title:'상그리아 에이드', content:'레드 와인 풍미에 신선한 생과일을 더해 청량하게 즐기는 무알코올 상그리아 에이드'},
    {img:'mb_404.png',pcImg:'mb_404.png', imgNarr:'이미지설명', price:'4,500', title:'레몬 셔벗 에이드', content:'드라이한 샴페인 향과 생라임, 민트잎이 어우러져 시원하고 청량하게 즐기는 에이드 '},
    {img:'mb_405.png',pcImg:'mb_405.png', imgNarr:'이미지설명', price:'4,500', title:'블루베리 요거트 드링크', content:'깊고 진한 블루베리 풍미와 요거트의 조화를 느낄 수 있는 음료 '},
    {img:'mb_406.png',pcImg:'mb_406.png', imgNarr:'이미지설명', price:'4,500', title:'요거트 드링크', content:'요거트의 깊은 풍미를 즐길 수 있는 음료 '},
    {img:'mb_407.png',pcImg:'mb_407.png', imgNarr:'이미지설명', price:'4,500', title:'자몽에이드', content:'자몽의 상큼함과 청량감이 입안 가득 느껴지는 자몽 에이드'},
    {img:'mb_408.png',pcImg:'mb_408.png', imgNarr:'이미지설명', price:'4,500', title:'오렌지에이드', content:'오렌지를 그대로 갈아 넣은 상큼한 오렌지 에이드 '},
    {img:'mb_409.png',pcImg:'mb_409.png', imgNarr:'이미지설명', price:'4,500', title:'초콜릿 라떼', content:'초콜릿의 풍부한 맛과 휘핑크림, 초코칩이 조화로운 달콤한 초콜릿 음료'},
    {img:'mb_410.png',pcImg:'mb_410.png', imgNarr:'이미지설명', price:'4,500', title:'아이스 초콜릿 라떼', content:'초콜릿의 풍부한 맛과 휘핑크림, 초코칩이 조화로운 달콤한 초콜릿 음료'}
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
    {img:'mb_101.png',pcImg:'mb_101.png', imgNarr:'이미지설명', price:'4500', title:'달고나 카페 라떼', content:'로스팅 슈가 향의 에스프레소 크림과 추억의 달고나가 어우러진 카페 라떼'},
    {img:'mb_102.png',pcImg:'mb_102.png', imgNarr:'이미지설명', price:'4500', title:'롱블랙', content:'아메리카노보다 진하고 부드러운 커피 플레이버를 느낄 수 있는 에스프레소 음료'},
    {img:'mb_103.png',pcImg:'mb_103.png', imgNarr:'이미지설명', price:'4500', title:'아이스 롱블랙', content:'아메리카노보다 진하고 부드러운 커피 플레이버를 느낄 수 있는 에스프레소 음료'},
    {img:'mb_104.png',pcImg:'mb_104.png', imgNarr:'이미지설명', price:'4500', title:'아이스 숏라떼', content:'에스프레소와 우유가 어우러져 진한 바디감과 부드러운 풍미를 느낄 수 있는 에스프레소 음료'},
    {img:'mb_105.png',pcImg:'mb_105.png', imgNarr:'이미지설명', price:'4500', title:'카페 아메리카노', content:'진하게 로스팅한 커피 원두에서 에스프레소를 추출하여 투썸 고유의 원두 풍미를 느낄 수 있는 에스프레소 음료'},
    {img:'mb_106.png',pcImg:'mb_106.png', imgNarr:'이미지설명', price:'4500', title:'카푸치노', content:'풍부하고 진한 농도의 에스프레소 위에 스팀밀크와 부드럽고 풍부한 양의 우유거품을 올린 에스프레소 음료'},
    {img:'mb_107.png',pcImg:'mb_107.png', imgNarr:'이미지설명', price:'4500', title:'카페라떼', content:'풍부하고 진한 농도의 에스프레소와 스팀밀크 위에 부드러운 우유 거품을 살짝 올려준 에스프레소 음료 '}
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
    {img:'mb_201.png',pcImg:'mb_201.png', imgNarr:'이미지설명', price:'4500', title:'망고 바나나 라떼', content:'달콤한 망고와 바나나의 조화를 느낄 수 있는 부드러운 라떼'},
    {img:'mb_202.png',pcImg:'mb_201.png', imgNarr:'이미지설명', price:'4500', title:'제주 말차 프라페', content:'제주산 말차와 연유 블렌딩이 조화로운 프리미엄 말차 프라페'},
    {img:'mb_203.png',pcImg:'mb_202.png', imgNarr:'이미지설명', price:'4500', title:'로얄 밀크티 쉐이크', content:'은은한 얼그레이 향이 감도는 블랙티와 진한 소프트 아이스크림이 어우러진 투썸 아이스크림 디저트 음료'},
    {img:'mb_204.png',pcImg:'mb_203.png', imgNarr:'이미지설명', price:'4500', title:'스트로베리 피치 프라페', content:'딸기와 복숭아의 상큼함이 조화롭게 어우러진 스무디 타입 음료'},
    {img:'mb_205.png',pcImg:'mb_204.png', imgNarr:'이미지설명', price:'4500', title:'커피 쉐이크', content:'에스프레소의 쌉싸름함과 아이스크림의 달콤함을 동시에 즐길 수 있는 쉐이크'},
    {img:'mb_206.png',pcImg:'mb_205.png', imgNarr:'이미지설명', price:'4500', title:'초코 쉐이크', content:'바닐라 아이스크림과 발로나 초콜릿의 진한 풍미를 즐길 수 있는 쉐이크'},
    {img:'mb_207.png',pcImg:'mb_205.png', imgNarr:'이미지설명', price:'4500', title:'바닐라 쉐이크', content:'바닐라 아이스크림과 우유를 블렌딩한 부드럽고 달콤한 쉐이크'},
    {img:'mb_208.png',pcImg:'mb_206.png', imgNarr:'이미지설명', price:'4500', title:'요거 프라페', content:'요거 파우더와 우유가 조화된, 깔끔하고 상큼한 맛의 요거트 아이스 블렌디드'},
    {img:'mb_209.png',pcImg:'mb_207.png', imgNarr:'이미지설명', price:'4500', title:'모카칩 프라페', content:'모카향이 은은하게 입안에 감돌아 달콤하고 향긋함을 동시에 느낄 수 있는 프라페'},
    {img:'mb_210.png',pcImg:'mb_208.png', imgNarr:'이미지설명', price:'4500', title:'카라멜 프라페', content:'커피 프라페에 달콤한 카라멜 시럽을 가미하고, 그 위에 휘핑크림과 카라멜 소스로 토핑하여 풍부한 카라멜 향을 느낄 수 있는 프라페'},
    {img:'mb_211.png',pcImg:'mb_208.png', imgNarr:'이미지설명', price:'4500', title:'망고 프라페', content:'열대 망고의 시원한 맛을 느낄 수 있는 프라페'}
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
    {img:'mb_301.png',pcImg:'mb_301.png', imgNarr:'이미지설명', price:'4500', title:'TWG 흑당 버블 밀크티', content:'TWG 프렌치 얼그레이의 고급스러운 맛이 느껴지는 흑당 버블 밀크티'},
    {img:'mb_302.png',pcImg:'mb_302.png', imgNarr:'이미지설명', price:'4500', title:'허니레몬티', content:'진한 TWG 프렌치 얼그레이 베이스에 달콤한 꿀과 상큼한 레몬이 더해진 티'},
    {img:'mb_303.png',pcImg:'mb_303.png', imgNarr:'이미지설명', price:'4500', title:'아이스 애플민트티', content:'TWG 그나와 민트티와 애플이 어우러진 베리에이션 티'},
    {img:'mb_304.png',pcImg:'mb_304.png', imgNarr:'이미지설명', price:'4500', title:'애플민트티', content:'TWG 그나와 민트티와 애플이 어우러진 베리에이션 티'},
    {img:'mb_305.png',pcImg:'mb_305.png', imgNarr:'이미지설명', price:'4500', title:'아이스 그나와 민트티', content:'홍차, 녹차, 민트가 블렌딩 된 청량한 타입의 TWG 티'},
    {img:'mb_306.png',pcImg:'mb_306.png', imgNarr:'이미지설명', price:'4500', title:'그나와 민트티', content:'홍차, 녹차, 민트가 블렌딩 된 청량한 타입의 TWG 티'},
    {img:'mb_307.png',pcImg:'mb_307.png', imgNarr:'이미지설명', price:'4500', title:'카모마일', content:'카페인이 없어 누구나 편안하게 즐길 수 있는 허브티로 풍부한 벌꿀향과 황금빛이 특징인 Tea'},
    {img:'mb_308.png',pcImg:'mb_308.png', imgNarr:'이미지설명', price:'4500', title:'프렌치 얼그레이', content:'TWG의 대표적인 얼그레이 계열의 홍차. 클래식하면서 우아한 시트러스 과일향과 수레국화의 향긋한 향이 특징인 Tea'},
    {img:'mb_309.png',pcImg:'mb_309.png', imgNarr:'이미지설명', price:'4500', title:'1837 블랙티', content:'TWG Tea의 시그니처 제품으로 버뮤다 삼각지대의 과일이 블렌딩되어 홍차의 은은한 맛과 스트로베리의 뒷맛이 좋아 대중에게 가장 사랑받고 있는 Tea'},
    {img:'mb_310.png',pcImg:'mb_310.png', imgNarr:'이미지설명', price:'4500', title:'허니레몬 아이스티', content:'진한 TWG TEA 프렌치 얼그레이 베이스에 달콤한 꿀과 상큼한 레몬이 더해진 TWG 아이스티'},
    {img:'mb_311.png',pcImg:'mb_311.png', imgNarr:'이미지설명', price:'4500', title:'로얄 밀크티', content:'향긋한 홍차향이 부드러운 우유와 어우러진 정통 밀크티 '}
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