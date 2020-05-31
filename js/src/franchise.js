// franchise.js

(function($){

  var stepBox = $('#stepBox');
  var step_list = stepBox.find('.step_list');

  var checkList = [
    {num:1,title:"가맹점 창업 문의",content:"본사 홈페이지 또는 전화(080-223-1234)신청 및 접수"},
    {num:2,title:"접수 및 담당자 개별 상담",content:"회사소개, 투썸플레이스 프랜차이즈 사업 설명"},
    {num:3,title:"후보지 선정, 상권분석, 본사 개설 승인",content:"사업타당성 분석<br /> 가맹신청서 접수/정보공개서 제공"},
    {num:4,title:"가맹계약 체결",content:"계약 기간 3년 계약 만료 후 1년 단위 재계약<br /> 추가 비용 없음"},
    {num:5,title:"가맹금, 보증금, 교육비 입금",content:"가맹금:2000만원<br /> 보증금:1000만원<br /> 교육비:150만원"},
    {num:6,title:"시공: 점포실측, 디자인 결정 후 공사 진행",content:"실측 후 설계도면 작성, 점주님과 최종 협의<br /> 시공업체 선청(입찰), 공사 계약<br /> 공사 기간 약 25일~35일 예상"},
    {num:7,title:"직원채용 및 교육",content:"본사와 점주님 협의 후 직원 면접 및 채용<br /> 점주님 및 직원 교육(10일:이론,실습교육)"},
    {num:8,title:"인,허가 및 영업 준비",content:"각종 인/허가 증명서 발급<br /> 카드 승인 및 영업 관련 모든 사항 점검<br /> open 준비(리허설)"},
    {num:9,title:"점포오픈",content:"오픈 프로모션 진행<br /> 투썸플레이스 영업 시작"}
  ];

  
  step_list.append('<ul class="check_list clearfix"></ul>');
  var checkListUl = stepBox.find('.check_list');
  
  var textEl = function(i){
    var	listEl = '<li>\
            <a href="#">\
              <div class="num_box"><p>'+ checkList[i].num +'</p><i></i></div>\
              <dl><dt>'+ checkList[i].title +'</dt>\
                <dd>'+ checkList[i].content +'</dd>\
              </dl>\
            </a>\
            </li>';
    return listEl;
  };
  
  var i=0;
  for(; i<checkList.length; i++){	
    checkListUl.append( textEl(i) );
  }



})(jQuery);