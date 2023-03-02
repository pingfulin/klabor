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
   hour:17,
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
  
  function b_clic_g(){
   if ($("#m_date").val()|$("#m_date_en").val()=="") { alert("尚未點選日期時間");
   return false; }
   if ($("#tw_nam").val()=="") { alert("尚未輸入行程名稱");
   return false; }
   if ($("#tw_adr").val()=="") { alert("尚未輸入地址");   
   return false; }
   if ($("#tw_P").val()=="") { alert("尚未輸入樓層或場所");
   return false; }
   if ($("#tw_man").val()=="") { alert("尚未輸入承辦單位(人)");
   return false; }
   else{ 
   var d1= $("#m_date").val();
   var d1_t= d1.replace(/\s+/ig,"T");
   var d1_t1= d1_t.replace(/\/|\:/ig,"") + "00";
   var d2= $("#m_date_en").val();
   var d2_t= d2.replace(/\s+/ig,"T");
   var d2_t1= d2_t.replace(/\/|\:/ig,"") + "00";
   var d_tall= d1_t1 + "/" + d2_t1;
   var d_o= $("#tw_oth").val().replace(/\n|\r/ig,"%0A");
   var d_p= $("#tw_adr").val();
   var d_t= $("#tw_nam").val();
   var d_d= $("#tw_p").val() + "%0A" + $("#tw_man").val() + "%0A" + d_o + "%A" + d_d0;
   var d_all= "http://www.google.com/calendar/event?action=TEMPLATE&text=" + d_t + "&dates=" + d_tall + "&details=" + d_d + "&location=" + d_p;

   $.ajax({
 url : "https://www.googleapis.com/urlshortener/v1/url?key=AIzaSyAwtUL4kEGvD72EU-QY5Wcana4UemEVbB0",
 type : "POST",
 contentType : 'application/json; charset=utf-8',
 dataType : "json",
 data :'{ longUrl: "' + d_all +'"}',
 //function(result) {
    //console.log(result.success); // result是json物件
  //},
 success: function(result,status,xhr){
 var re_id= result.id
 window.location.replace('/klabor/test007.html?re_id='+ re_id + '&name=' + d_t + '&sta=' + status);

  }
});
  }
  }

function cal_bu_test(){
var now = new Date();
        today = now.toISOString();

        var twoHoursLater = new Date(now.getTime() + (2 * 1000 * 60 * 60));
        twoHoursLater = twoHoursLater.toISOString();
// Google api console clientID and apiKey 

 var clientId = '1090898156676-5n50dnr8t8kl6qc90feei25hddoj559f.apps.googleusercontent.com';
 var apiKey = 'AIzaSyCmBGO_PRZ5yE6IZZYkZHUrlEcW7gd64aU';

 // enter the scope of current project (this API must be turned on in the Google console)
   var scopes = 'https://www.googleapis.com/auth/calendar';


           gapi.client.setApiKey(apiKey);
           window.setTimeout(checkAuth, 1);


//To authenticate

    gapi.auth.authorize({ client_id: clientId, scope: scopes, immediate: true }, handleAuthResult);
        

// This is the resource we will pass while calling api function
var resource = {
            "summary": "My Event",
            "start": {
                "dateTime": today
            },
            "end": {
                "dateTime": twoHoursLater
            },
            "description":"We are organizing events",
            "location":"US",
            "attendees":[
            {
                    "email":"attendee1@gmail.com",
                    "displayName":"Jhon",
                    "organizer":true,
                    "self":false,
                    "resource":false,
                    "optional":false,
                    "responseStatus":"needsAction",
                    "comment":"This is my demo event",
                    "additionalGuests":3
                    
            },
            {    
                "email":"attendee2@gmail.com",
                    "displayName":"Marry",
                    "organizer":true,
                    "self":false,
                    "resource":false,
                    "optional":false,
                    "responseStatus":"needsAction",
                    "comment":"This is an official event",
                    "additionalGuests":3
            }
            ],
        };


gapi.client.load('calendar', 'v3', function () { // load the calendar api (version 3)
                var request = gapi.client.calendar.events.insert
                ({
                    'calendarId': 'pingfulinkcg@gmail.com', 
// calendar ID which id of Google Calendar where you are creating events. this can be copied from your Google Calendar user view.

                    "resource": resource 	// above resource will be passed here
                });                
});
}

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

    var chk_kind = $("#kind_s").selectedIndex
	if (chk_kind > 2 && $("#tw_adr").val()=="") { alert("尚未填寫地址");
    return false; }
	if (chk_kind > 2 && $("#tw_oth").val()=="") { alert("尚未填寫局長行程說明");
    return false; }	

   else{
   var d1= $("#m_date").val();//開始日期時間
   var de= $("#m_date_en").val();//結束日期時間
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
   var d_o1= $("#tw_man1").val().replace(/#|\?|\s/ig,"") + "%20" + $("#tw_teln1").val() + "%20" + $("#tw_tel1").val();
   var d_o2= $("#tw_man2").val().replace(/#|\?|\s/ig,"") + "%20" + $("#tw_teln2").val() + "%20" + $("#tw_tel2").val();
   var d_o3= $("#depart").val();
   var d_oo= $("#tw_oth").val().replace(/\n|\r/ig,"%0A");
   var d_o= d_o3 + "%0A" + d_o1 + "%0A" + d_o2 + "%0A" + d_oo;
   var d_p= $("#tw_adr").val();
   var kind_s= $("#kind_s").prop('selectedIndex');
   var d_t= $("#kind_s").val().replace(/#|\?|\s/ig,"") + d11y + $("#tw_cnam").val().replace(/#|\?|\s/ig,"");
   //var d_d= $("#tw_p").val() + "%0A" + $("#tw_man").val() + "%0A" +d_o;
   var d_all= "https://www.google.com/calendar/event?action=TEMPLATE&text=" + d_t + "&dates=" + d_tall + "&details=" + d_o + "&location=" + d_p;

   $.ajax({
 
 //url : "https://api-ssl.bitly.com/v3/shorten?format=txt&login=o_2p0k47gmqh&apiKey=R_eaee61dc34b6434eaf8adaeb449d52c9&longUrl=" + encodeURIComponent(d_all),
 url : "https://api.reurl.cc/shorten?reurl-api-key=4070ff49d794e13211553b663c974755ecd1b739999b04df8a38b58d65165567c4f5d6",
 type : "POST",
 contentType : 'application/json',
 dataType : "text",
 data : { url :  encodeURIComponent(d_all) },
	   
 success: function(result,status,xhr){
 var re_id= result.replace(/#|\?|\s|\n|\r/ig,"");//bitly縮址
  
 var mail_all= encodeURI('newsmail.html?re_id='+ re_id + '&name=' + d_t + '&man1=' + d_o1 + '&man2=' + d_o2 + '&dp=' + d_o3 + '&oth=' + d_oo + '&kind_s=' + kind_s )
 window.location.replace(mail_all);
 
},
 error: function(){alert("提交失敗，請重新輸入或電洽媒體聯絡人。請勿使用IE，請改用chrome登錄");
 return false;}, 
   });
  };
  }


 function b_clic(){
   if ($("#m_date").val()|$("#m_date_en").val()=="") { alert("尚未點選日期時間");
   return false; }
   if ($("#tw_nam").val()=="") { alert("尚未輸入行程名稱");
   return false; }
   if ($("#tw_adr").val()=="") { alert("尚未輸入地址");   
   return false; }
   if ($("#tw_P").val()=="") { alert("尚未輸入樓層或場所");
   return false; }
   if ($("#tw_man").val()=="") { alert("尚未輸入承辦單位(人)");
   return false; }
   else{ 
   var d1= $("#m_date").val();
   var d1_t= d1.replace(/\s+/ig,"T");
   var d1_t1= d1_t.replace(/\/|\:/ig,"") + "00";
   var d2= $("#m_date_en").val();
   var d2_t= d2.replace(/\s+/ig,"T");
   var d2_t1= d2_t.replace(/\/|\:/ig,"") + "00";
   var d_tall= d1_t1 + "/" + d2_t1;
   var d_o= $("#tw_oth").val().replace(/\n|\r/ig,"%0A");
   var d_p= $("#tw_adr").val();
   var d_t= $("#tw_nam").val();
   var d_d= $("#tw_p").val() + "%0A" + $("#tw_man").val() + "%0A" +d_o;
   var d_all= "https://www.google.com/calendar/event?action=TEMPLATE&text=" + d_t + "&dates=" + d_tall + "&details=" + d_d + "&location=" + d_p;

   $.ajax({
 
 //url : "https://api-ssl.bitly.com/v3/shorten?format=txt&login=o_2p0k47gmqh&apiKey=R_eaee61dc34b6434eaf8adaeb449d52c9&longUrl=" + encodeURIComponent(d_all),
 url : "https://api.reurl.cc/shorten?reurl-api-key=4070ff49d794e13211553b663c974755ecd1b739999b04df8a38b58d65165567c4f5d6",
 type : "POST",
 contentType : 'application/json',
 dataType : "text",
 data : { url :  encodeURIComponent(d_all) },
 success: function(result,status,xhr){
 var re_id= result
 window.location.replace('/klabor/test007.html?re_id='+ re_id + '&name=' + d_t + '&sta=' + status);

  }
});
  }
  }

function b_clicline(){
var d_o= $("#tw_oth").val();
$.post('https://script.google.com/macros/s/AKfycbxicS4rOF2qDv4Ecv8W12AZ8kXBrlisy9mfevLsh9Y9MbrCKIY/exec',
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

//發送line notify訊息
$.post('https://script.google.com/macros/s/AKfycbwyrB96NT2IBIOMOp6UL8Ue0HyIs92zYuZSyv3Blp-e5q6quivutdazwBqMsJaVKWgP/exec',
    {msg:d_o},
    function(e){
        console.log(e);
});

/*document.getElementById("mail_to").style.display = "none";*/

 var print_all= encodeURI('/klabor/newsprint.html?re_id=' + d_sh + '&name=' + d_t + '&print_m1=' + d_m1 + '&print_dp=' + d_dp);
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


	
