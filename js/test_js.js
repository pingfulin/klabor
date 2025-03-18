var date_show_10 = {
   dayNames:["星期日","星期一","星期二","星期三","星期四","星期五","星期六"],
   dayNamesMin:["日","一","二","三","四","五","六"],
   monthNames:["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"],
   monthNamesShort:["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"],
   prevText:"上月",
   nextText:"次月",
   weekHeader:"週",
   showMonthAfterYear:true,
   dateFormat: 'yy/mm/dd',
   showTimepicker:false,
   showButtonPanel:true,
   changeYear : true,
   changeMonth : true,
   minDate :'getDate()',
   hour:0,
   minute:0,
   controlType:"select",
   alwaysSetTime:true,
   stepMinute:10,
   oneLine: true,
   onSelect: function(dateText1, inst){
      $("#m_date_en").val(dateText1);
   }
	};

   var date_show = {
   dayNames:["星期日","星期一","星期二","星期三","星期四","星期五","星期六"],
   dayNamesMin:["日","一","二","三","四","五","六"],
   monthNames:["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"],
   monthNamesShort:["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"],
   prevText:"上月",
   nextText:"次月",
   weekHeader:"週",
   showMonthAfterYear:true,
   dateFormat: 'yy/mm/dd',
   showTimepicker:true,
   showButtonPanel:true,
   changeYear : true,
   changeMonth : true,
   minDate :'Date()',
   //hour:0,
   //minute:0,
   controlType:"select",
   alwaysSetTime:true,
   stepMinute:10,
   oneLine: true,
   onSelect: function(dateText, inst){$("#m_date_en").datetimepicker('option', 'minDate', dateText);
	   $("#m_date_en").val("");
	}
   };
	
   var opt_time={
   timeOnlyTitle: '選擇時間',
   timeFormat: 'HH:mm',
   controlType:"select",
   stepMinute:10,
   showTime:false,
   showButtonPanel:false,
   alwaysSetTime:false,
   timeOnly:true,};
                
				 


	//$('#m_time').datetimepicker(opt_time);
   var m_date_en= {
   dayNames:["星期日","星期一","星期二","星期三","星期四","星期五","星期六"],
   dayNamesMin:["日","一","二","三","四","五","六"],
   monthNames:["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"],
   monthNamesShort:["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"],
   prevText:"上月",
   nextText:"次月",
   weekHeader:"週",
   showMonthAfterYear:true,
   dateFormat: 'yy/mm/dd',
   showTimepicker:true,
   showButtonPanel:true,
   changeYear : true,
   changeMonth : true,
   //minDate :'Date($("#m_date")',
   hour:12,
   minute:0,
   controlType:"select",
   alwaysSetTime:true,
   stepMinute:10,
   oneLine: true,
   onSelect: function(datetext) {
   var m_d = Date.parse($("#m_date").val());
   if (Date.parse(datetext) < m_d) {
   $("#m_date_en").val("");
   alert("結束時間大於起始時間，請重新點選");
   }
   }
   //defaultValue:gh($("#m_time").val()),
   //showHour: 9,
 
    };

function changekind(index) {
   $("#m_date").val("");
   $("#m_date_en").val("");
   $("#tw_oth").val("");
	$("#m_date").on('mousedown', function(){$("#m_date").datetimepicker(date_show)});
	$("#m_date_en").datetimepicker(m_date_en);
	$("#m_date").attr("readonly",true);
	$("#m_date_en").attr("readonly",true);

   //$("#m_date").off('mousedown', function(){$("#m_date").datetimepicker()});
   //$("#m_date_en").off('mousedown'.datetimepicker());

	if (index> 2) {
	//$("#m_date").off('mousedown', function(){$("#m_date").datetimepicker(date_show_10)});
	$("#tw_oth").attr("disabled",false);
	$("#tw_oth").attr("required",true);
	$("#tw_oth").addClass("req");
	$("#tw_adr").attr("required",true);
	$("#tw_adr").addClass("req");
   }
	else {
	//$("#m_date").off('mousedown', function(){$("#m_date").datetimepicker(date_show)});
	//$("#m_date_en").off('mousedown', function(){$("#m_date_en").datetimepicker(m_date_en)});
	//$("#m_date").on('mousedown', function(){$("#m_date").datetimepicker(date_show_10)});
	$("#tw_oth").attr("disabled",true);
	$("#tw_oth").attr("required",false);
	$("#tw_adr").attr("required",false);
	$("#tw_oth").addClass("opt");
	$("#tw_adr").addClass("opt");
	}
	}

  var c_d1= {
   countySel: "高雄市", // 城市預設值, 字串一定要用繁體的 "臺", 否則抓不到資料
   districtSel: "前鎮區", // 地區預設值
   zipcodeIntoDistrict: true, // 郵遞區號自動顯示在地區
   css: ["city form-control", "town form-control"], // 自訂 "城市"、"地區" class 名稱 
   countyName: "city", // 自訂城市 select 標籤的 name 值
   districtName: "town" // 自訂地區 select 標籤的 name 值  
  };

  function gh(datetext){
  var d1 = new Date(datetext);
  return d1;
  }

  $( function() {
    var adr = [
      "高雄市前鎮區鎮中路6號",
      "高雄市鳥松區大埤路117號",
	  "高雄市前金區中正四路261號",
	  "高雄市前鎮區中山三路132號",
	  "高雄市鳳山區青年路二段77號",
	  "高雄市三民區十全三路101號",
	  "高雄市大寮區捷西路300號",
	  "高雄市苓雅區四維三路2號",
	  "高雄市鳳山區光復路二段132號",
    ];
    var pla = [
      "1樓",
      "2樓",
      "3樓",
      "4樓",
      "5樓",
      "6樓",
      "7樓",
      "8樓",
      "9樓",
	  ];
    var nam = [
      "局務會議",
      "宣導會",

    ];
    var man1 = [
      "組織科",
      "條件科",
	  "就安科",
	  "職重科",
	  "秘書室",
	  "勞檢處",
	  "訓就中心",
	  "勞教中心",
	  "博訓中心",
	  "人事室",
	  "會計室",
	  "政風室",
    ];
	$( "#tw_adr" ).autocomplete({
      source: adr
    });
    $( "#tw_p" ).autocomplete({
      source: pla
    });
    $( "#tw_nam" ).autocomplete({
      source: nam
    });
    $( "#tw_man" ).autocomplete({
      source: man1
    });
	} );

function cal_bu(){
	if ($("#m_date").val()=="") { alert("尚未點選日期");
	return false; }
	if ($("#m_date_en").val()=="") { alert("尚未點選日期");
	return false; }
	if ($("#tw_cnam").val()=="") { alert("尚未輸入主題");
	return false; }
	if ($("#tw_man1").val()=="") { alert("尚未輸入主要聯絡人");   
	return false; }
	if ($("#tw_teln1").val()=="") { alert("尚未輸入電話");
   return false; }

    var chk_kind = $("#kind_s").prop("selectedIndex")
	if (chk_kind > 2 && $("#tw_adr").val()=="") { alert("尚未填寫地址");
    return false; }
	if (chk_kind > 2 && $("#tw_oth").val()=="") { alert("尚未填寫局長行程說明");
    return false; }	
var d1= $("#m_date").val();//開始日期時間
var de= $("#m_date_en").val();//結束日期時間
var d1_js = new Date(d1.replace(/(\d{4})\/(\d{2})\/(\d{2}) (\d{2}):(\d{2})/, '$1-$2-$3T$4:$5:00Z'));//轉換日期格式為js可識別的格式
var de_js = new Date(de.replace(/(\d{4})\/(\d{2})\/(\d{2}) (\d{2}):(\d{2})/, '$1-$2-$3T$4:$5:00Z'));//轉換日期格式為js可識別的格式
var day1 = d1_js.getUTCDay();//擷取星期幾，用標準UTC時間轉換
var daye = de_js.getUTCDay();//擷取星期幾
var hours1 = d1_js.getUTCHours();//擷取幾點
var hourse = de_js.getUTCHours();//擷取幾點

if (chk_kind > 2 && day1 === 2 && hours1 < 12) { alert("周二上午市政會議，請勿安排局長行程");//12點以前
    return false; }
if (chk_kind > 2 && daye === 2 && hourse < 12) { alert("周二上午市政會議，請勿安排局長行程");
    return false; }

else{
var $loadingIcon = $('#loadingIcon');
var display = $loadingIcon.css('display');
console.log('Current display property:', display); // 獲取當前的 display 屬性
$loadingIcon.css('display', 'block'); // 顯示圖標

//var d1= $("#m_date").val();//開始日期時間
//var de= $("#m_date_en").val();//結束日期時間
var d11 = d1.substr(0,10).split('/'); //擷取日期
var de1 = de.substr(0,10).split('/');
//取得民國年
var y01 = parseInt(d11[0])-1911;
var ye1 = parseInt(de1[0])-1911;
//取得月份
var m01 = d11[1];
var me1 = de1[1];
//取得日期
var d01 = d11[2];
var de1 = de1[2];
//將民國年月日的值指定給"預約日期"
var d11y= y01 + "/" + m01 + "/" + d01 + "_";

   var d1_t= d1.replace(/\/|\:/ig,"");//將西元日期及時間改成20220830T080000的步驟
   var d1_t0= d1_t.replace(/\s/ig,"T");
   var d1_t1= d1_t0 + "00";
   var de_t= de.replace(/\/|\:/ig,"");//將西元日期及時間改成20220830T080000的步驟
   var de_t0= de_t.replace(/\s/ig,"T");
   var de_t1= de_t0 + "00";
   //var d2= $("#m_date_en").val();
   //var d2_t= d2.replace(/\s+/ig,"T");
   //var d2_t1= d1_t + "T120000";
   var d_tall= d1_t1 + "/" + de_t1;
   var d_o1= $("#tw_man1").val().replace(/#|\?|\s|\=/ig,"") + "%20" + $("#tw_teln1").val() + "%20" + $("#tw_tel1").val();
   var d_o1_n= $("#tw_man1").val().replace(/#|\?|\s|\=/ig,"");//姓名
   var d_o1_t= $("#tw_teln1").val();
   var d_o1_c= $("#tw_tel1").val();
   var d_o2= $("#tw_man2").val().replace(/#|\?|\s|\=/ig,"") + "%20" + $("#tw_teln2").val() + "%20" + $("#tw_tel2").val();
   var d_o2_n= $("#tw_man2").val().replace(/#|\?|\s|\=/ig,"");//姓名
   var d_o2_t= $("#tw_teln2").val();
   var d_o2_c= $("#tw_tel2").val();
   var d_o3= $("#depart").val();
   var d_oo1= $("#tw_oth").val().replace(/\n|\r/ig,"%0A")//將段落符號取代成%0A
   let d_oo= d_oo1.replace(/#|\?|\s|\=/ig,"");//削去\S空白、段落?、=，以避免誤判
   d_oo = d_oo.replace(/%0A/g, "/."); // 將 %0A 替換為臨時字符
   d_oo = encodeURI(d_oo); // 使用 encodeURI 進行轉換
   d_oo = d_oo.replace(new RegExp("/.", 'g'), "%0A"); // 將臨時字符替換回 %
   var d_o= d_o3 + "%0A" + d_o1 + "%0A" + d_o2 + "%0A" + d_oo;
   //var d_o= encodeURI(d_o3) + "%0A" + encodeURI(d_o1_n) + "%20" + encodeURI(d_o1_t) + "%20" + encodeURI(d_o1_c) + "%0A" + encodeURI(d_o2_n) + "%20" + encodeURI(d_o2_t) + "%20" + encodeURI(d_o2_c) + "%0A" + encodeURI(d_oo);	   
   //var d_o= decodeURI(d_o_en);//將上述還原成中文，以利後續再encode一次
   var d_p= $("#tw_adr").val().replace(/#|\?|\s|\=/ig,"");
   var kind_s= $("#kind_s").prop('selectedIndex');
   var d_t= $("#kind_s").val().replace(/#|\?|\s/ig,"") + d11y + $("#tw_cnam").val().replace(/#|\?|\s/ig,"");
   //var d_d= $("#tw_p").val() + "%0A" + $("#tw_man").val() + "%0A" +d_o;
   var d_all_1= "https://www.google.com/calendar/event?action=TEMPLATE&text=" + encodeURI(d_t) + "&dates=" + d_tall + "&details=" + encodeURI(d_o3) + "%0A" + encodeURI(d_o1_n) + "%20" + encodeURI(d_o1_t) + "%20" + encodeURI(d_o1_c) + "%0A" + encodeURI(d_o2_n) + "%20" + encodeURI(d_o2_t) + "%20" + encodeURI(d_o2_c) + "%0A" + d_oo + "&location=" + encodeURI(d_p);
   //將上述含中文及符號與空格的部分encodeURI傳遞，才會被reurl縮址服務接受
   var d_all_2= {url: d_all_1};//先轉成reurl的欄位模式
   var d_all= encodeURIComponent(JSON.stringify(d_all_2)); //別忘了把主體参數轉成字串，否則資料會變成[object Object]，它無法被成功儲存在後台
const url= "https://api.reurl.cc/shorten";
fetch( url,
 {
    method: "POST",
        headers: {
        'Content-Type': 'application/json',
	'reurl-api-key': '4070ff49d794e13c16543b663c974755ecd1b235959b04df8a38b58d65165567c4f5d6',
        'Sec-CH-UA': '"Chromium";v="94", "Google Chrome";v="94", "Not;A Brand";v="99"',
        'Sec-CH-UA-Mobile': '?0',
        'Sec-CH-UA-Platform': '"Windows"',
        'Sec-CH-UA-Arch': '"x86"',
        'Sec-CH-UA-Bitness': '"64"',
        'Sec-CH-UA-Full-Version': '"94.0.4606.81"',
        'Sec-CH-UA-Model': '""',
        'Sec-CH-UA-Platform-Version': '"10.0.0"',
        'Sec-CH-UA-WoW64': '?0'
    },
    
    body: d_all
})
.then( response => response.json())
.then( data => {
    const re_id= data.short_url;
    let mail_all= 'newsmail.html?re_id='+ re_id + '&name=' + d_t + '&man1=' + d_o1 + '&man2=' + d_o2 + '&dp=' + d_o3 + '&oth=' + d_oo + '&kind_s=' + kind_s;
    window.location.replace(mail_all);
   })
 .catch(error => {
	alert(d_all);
    return false;})
   }
}

function b_clicline(){ //目前未用 用b_testline
var d_o= $("#tw_oth").val();
//通知line bot push
$.post('https://script.google.com/macros/s/AKfycbzVQMu81oI_DNUt_7dnYUaKN_L40JeVEjs0VDUmbvIQLp0pGG_QUO3B-8Vv9M5HLIbc/exec',
    {msg:d_o},
    function(e){
        console.log(e);
});
window.location.reload()
}

function b_line(){
var d_o= $("#show_re").val();
var d_sh= $("#show_a").text();
var d_href= "mailto:bolaboraffair@gmail.com?subject=[新聞稿通知]&body=" + d_o;
var dd_href= "mailto:bolaboraffair@gmail.com?subject=[核定檔案及照片]&body=寄送新聞稿檔案及照片" + d_o;
$.post('https://script.google.com/macros/s/AKfycbxicS4rOF2qDv4Ecv8W12AZ8kXBrlisy9mfevLsh9Y9MbrCKIY/exec',
    {msg:d_o},
    function(e){
        console.log(e);
});
window.alert("mail時\n請記得附上\n新聞稿、採訪通知的檔案");
window.open(d_href);
document.getElementById("mail_to").style.display = "none";
// document.getElementById("print_to").style.display = "inline";
// $("#h1_display").text("步驟3/3請點選列印檢核表，並依規定陳核。");
// document.getElementById("s01").style.display = "block";
 var print_all= encodeURI('/klabor/newsprint.html?re_id=' + d_sh +'&show=' + d_o);
 window.location.replace(print_all);	
}

function b_testline(){
var d_sh= $("#show_a").text();//縮址
var d_t= $("#show_t").val()//名稱
var d_m1= $("#show_m1").val()//承辦1
var d_dp= $("#show_dp").val()//單位
var d_o= $("#show_non").val();//發送line的內容

//通知telegram labornews bot
$.post('https://script.google.com/macros/s/AKfycbyCwHQSh3JWAzO0eq2h1o7Hc5LSVH6As2ZElkml1op2rHb2RwbXYhfenFVJDdc5r676/exec',
    {msg:d_o},
    function(e){
        console.log(e);
});

/*document.getElementById("mail_to").style.display = "none";*/

 var print_all= encodeURI('/klabor/newsprint.html?re_id=' + d_sh + '&name=' + d_t + '&print_m1=' + d_m1 + '&print_dp=' + d_dp);
 window.location.replace(print_all);	
}

function b_testline01(){
var d_sh= $("#show_a").text();//縮址
var d_t= $("#show_t").val()//名稱
var d_m1= $("#show_m1").val()//承辦1
var d_dp= $("#show_dp").val()//單位
var d_o= $("#show_non").val();//發送line的內容

//發送line notify訊息
$.post('https://script.google.com/macros/s/AKfycbwyrB96NT2IBIOMOp6UL8Ue0HyIs92zYuZSyv3Blp-e5q6quivutdazwBqMsJaVKWgP/exec',
    {msg:d_o},
    function(e){
        console.log(e);
});

/*document.getElementById("mail_to").style.display = "none";*/

 var print_all= encodeURI('/klabor/newsprint01.html?re_id=' + d_sh + '&name=' + d_t + '&print_m1=' + d_m1 + '&print_dp=' + d_dp);
 window.location.replace(print_all);	
}

function test_mail(url_kind){
if (url_kind<3) {//判斷是否為新聞稿或局長行程
var d_o= $("#show_re").val();
var d_sh= $("#show_a").text();
var d_href= encodeURI("https://mail.google.com/mail/u/0/?view=cm&tf=1&to=bolaboraffair@gmail.com&cc=pingfulinkcg@gmail.com&bcc&su=[新聞稿通知]&body=" + d_o + "&fs=1");
var d_href_c= encodeURI("mailto:bolaboraffair@gmail.com?subject=[新聞稿通知]&cc=pingfulinkcg@gmail.com&body=" + d_o);
var d_torf= browser_dect(); /* 判斷瀏覽器或操作系統 */
if (d_torf== "bis_yes") {
 return d_href_c;/* 使用mailto */
}
else {
return d_href; /* win系統使用網頁url */
}
}
else {
var d_o= $("#show_re").val();
var d_sh= $("#show_a").text();
var d_href= encodeURI("https://mail.google.com/mail/u/0/?view=cm&tf=1&to=laborchiefbooking@gmail.com&bcc&su=[局長行程預約]&body=" + d_o + "&fs=1");
var d_href_c= encodeURI("mailto:laborchiefbooking@gmail.com?subject=[局長行程預約]&body=" + d_o);
var d_torf= browser_dect(); /* 判斷瀏覽器或操作系統 */
if (d_torf== "bis_yes") {
 return d_href_c;/* 使用mailto */
}
else {
return d_href; /* win系統使用網頁url */
}
}
}
	
function test_mail01(url_kind){
if (url_kind<3) {//判斷是否為新聞稿或局長行程
var d_o= $("#show_re").val();
var d_sh= $("#show_a").text();
var d_href= encodeURI("https://mail.google.com/mail/u/0/?view=cm&tf=1&to=bolaboraffair@gmail.com&cc=pingfulinkcg@gmail.com&bcc&su=[新聞稿通知]&body=" + d_o + "&fs=1");
var d_href_c= encodeURI("mailto:bolaboraffair@gmail.com?subject=[新聞稿通知]&cc=pingfulinkcg@gmail.com&body=" + d_o);
var d_torf= browser_dect(); /* 判斷瀏覽器或操作系統 */
if (d_torf== "bis_yes") {
 return d_href_c;/* 使用mailto */
}
else {
return d_href; /* win系統使用網頁url */
}
}
else {
var d_o= $("#show_re").val();
var d_sh= $("#show_a").text();
var d_href= encodeURI("https://mail.google.com/mail/u/0/?view=cm&tf=1&to=laborchiefbooking@gmail.com&bcc&su=[局長行程預約]&body=" + d_o + "&fs=1");
var d_href_c= encodeURI("mailto:laborchiefbooking@gmail.com?subject=[局長行程預約]&body=" + d_o);
var d_torf= browser_dect(); /* 判斷瀏覽器或操作系統 */
if (d_torf== "bis_yes") {
 return d_href_c;/* 使用mailto */
}
else {
return d_href; /* win系統使用網頁url */
}
}
}

/*判斷瀏覽器或操作系統
 var sUserAgent= navigator.userAgent.toLowerCase();

        var bIsIpad= sUserAgent.match(/ipad/i) == "ipad";

        var bIsIphoneOs= sUserAgent.match(/iphone os/i) == "iphone os";

        var bIsMidp= sUserAgent.match(/midp/i) == "midp";

        var bIsUc7= sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";

        var bIsUc= sUserAgent.match(/ucweb/i) == "ucweb";

        var bIsAndroid= sUserAgent.match(/android/i) == "android";

        var bIsCE= sUserAgent.match(/windows ce/i) == "windows ce";

        var bIsWM= sUserAgent.match(/windows mobile/i) == "windows mobile";
		
	var bIsLine= sUserAgent.match(/line/i) == "line";

        if (bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsLine) {

          return d_href_c;  

        } else {
          return d_href;         

          }win系統使用網頁url */

function browser_dect() {
/*判斷瀏覽器或操作系統*/
 var sUserAgent= navigator.userAgent.toLowerCase();

        var bIsIpad= sUserAgent.match(/ipad/i) == "ipad";

        var bIsIphoneOs= sUserAgent.match(/iphone os/i) == "iphone os";

        var bIsMidp= sUserAgent.match(/midp/i) == "midp";

        var bIsUc7= sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";

        var bIsUc= sUserAgent.match(/ucweb/i) == "ucweb";

        var bIsAndroid= sUserAgent.match(/android/i) == "android";

        var bIsCE= sUserAgent.match(/windows ce/i) == "windows ce";

        var bIsWM= sUserAgent.match(/windows mobile/i) == "windows mobile";
		
	var bIsLine= sUserAgent.match(/line/i) == "line";

       if(bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsLine) {
         return "bis_yes";
       }
	else {
	 return "bis_no";
              }
}

function b_clic_b() {
 window.location.replace('/klabor/test006.html');
}

function reset1() {
 $('input').val("");
}

function b_return(u_turn) {
//先取得網址字串，假設此頁網址為「index.aspx?id=U001&name=GQSM」
var url = decodeURI(u_turn);

//再來用去尋找網址列中是否有資料傳遞(QueryString)
if(url.indexOf('?')!=-1)
 {
    //var id = "";
    //在此直接將各自的參數資料切割放進ary中
    var ary = url.split('?')[1].split('&');//[1]表示字串之後
    //此時ary的內容為：
    //ary[0] = 'id=U001'，ary[1] = 'name=GQSM'
    //return ary;
    //下迴圈去搜尋每個資料參數
    var ary01 = [];
	ary.forEach(function(item, i) {
    ary01.push(item.split('=')[1])//將每個=號後面的值寫入新的數列
});
	return ary01;
 }
 }

function b_return1(u_turn1) {
//先取得網址字串，假設此頁網址為「index.aspx?id=U001&name=GQSM」
var url1 = u_turn1;

//再來用去尋找網址列中是否有資料傳遞(QueryString)
if(url1.indexOf('?')!=-1)
{
    var na1 = "";
    //在此直接將各自的參數資料切割放進ary中
    var ary1 = url1.split('?')[1].split('&');
    //此時ary的內容為：
    //ary[0] = 'id=U001'，ary[1] = 'name=GQSM'
    
    //下迴圈去搜尋每個資料參數
    for(i=0;i<=ary1.length-1;i++)
    {
        //如果資料名稱為id的話那就把他取出來
        if(ary1[i].split('=')[0] == 'name')
	{na1 = ary1[i].split('=')[1];
		return na1;
    }
	    
}
}
}

function b_return2(u_turn2) {
//先取得網址字串，假設此頁網址為「index.aspx?id=U001&name=GQSM」
var url2 = u_turn2;

//再來用去尋找網址列中是否有資料傳遞(QueryString)
if(url2.indexOf('?')!=-1)
{
    var na2 = "";
    //在此直接將各自的參數資料切割放進ary中
    var ary2 = url2.split('?')[1].split('&');
    //此時ary的內容為：
    //ary[0] = 'id=U001'，ary[1] = 'name=GQSM'
    
    //下迴圈去搜尋每個資料參數
    for(i=0;i<=ary2.length-1;i++)
    {
        //如果資料名稱為id的話那就把他取出來
        if(ary2[i].split('=')[0] == 'man1')
	{na2 = ary2[i].split('=')[1];
		return na2;
    }
	    
}
}
}

function b_return3(u_turn3, search_o) {
//先取得網址字串，假設此頁網址為「index.aspx?id=U001&name=GQSM」
var url3 = decodeURI(u_turn3);
var search_s = search_o

//再來用去尋找網址列中是否有資料傳遞(QueryString)
if(url3.indexOf('?')!=-1)
{
    var na3 = "";
    //在此直接將各自的參數資料切割放進ary中
    var ary3 = url3.split('?')[1].split('&');
    //此時ary的內容為：
    //ary[0] = 'id=U001'，ary[1] = 'name=GQSM'
    
    //下迴圈去搜尋每個資料參數
    for(i=0;i<=ary3.length-1;i++)
    {
        //如果資料名稱為id的話那就把他取出來
        if(ary3[i].split('=')[0] == search_s)
	{na3 = ary3[i].split('=')[1];
		return na3;
    }
	    
}
}
}

 function copyInput(){
   document.getElementById('show_re').select();
   document.execCommand('copy');
 }

 function copyimg(){
   document.getElementById('canvas').select();
   this.href=canvas.toDataURL();
 } 
 
function QRCode(content, width, height){
	width = !!width ? width : 120 ;
	height = !!height ? height : 120;
	// 編碼，及qrcode大小
	content = encodeURIComponent(content);
    return 'https://chart.googleapis.com/chart?cht=qr&chl=' + content + '&chs=' + width + 'x' + height;
} 


function draw() {
  var ctx = document.getElementById('canvas').getContext('2d');
  image = new Image();
  var url_t01 = location.search;
  image.src = QRCode(b_return(url_t01));  
  image.onload = function() {
    ctx.drawImage(this, 0, 0, 120, 120);//qrcode的大小，正方形
    ctx.font = "18px Times New Roman";
    ctx.fillText('加入行程', 25, 140); //字的位置
  }


  //$("#QR01").attr("src", QRCode(b_return(url_t01), 200, 200));

}  
function b_clic_e(){
   if ($("#m_date").val()|$("#m_date_en").val()=="") { alert("尚未點選日期時間");
   return false; }
   if ($("#tw_nam").val()=="") { alert("尚未輸入行程名稱");
   return false; }
   if ($("#tw_adr").val()=="") { alert("尚未輸入地址");   
   return false; }
   if ($("#tw_P").val()=="") { alert("尚未輸入樓層或場所");
   return false; }
   else{ 
   var d1= $("#m_date").val();
   var d1_t= d1.replace(/\s+/ig,"T");
   var d1_t1= d1_t.replace(/\/|\:/ig,"") + "00";
   var d2= $("#m_date_en").val();
   var d2_t= d2.replace(/\s+/ig,"T");
   var d2_t1= d2_t.replace(/\/|\:/ig,"") + "00";
   var d_tall= d1_t1 + "/" + d2_t1;
   var d_p= $("#tw_adr").val();
   var d_t= $("#tw_nam").val();
   var d_d1= $("#tw_p").val();
   var d_d2= $("#tw_man").val;
   var d_d3= $("#tw_oth").val();

$.ajax({
 type : "POST",
 url: "https://script.google.com/macros/s/AKfycbzuT8cVmhMnhkQFFD91dH5J-EpvjUZmtg-XPYlSKWZSkTgZ9Zc/exec",
 // 填入網路應用程式網址
 contentType : "application/json",
 dataType : "json",
data : {
"method": "write",
"m_date": "d1",
"m_date_en": "d2",
"tw_nam": d_t,
"tw_adr": "d_p",
"tw_p": "d_d1",
"tw_man": "d_d2",
"tw_oth": "d_d3"
 },

});
}
}


	
