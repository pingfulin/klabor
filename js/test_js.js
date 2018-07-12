
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
   minDate :'getDate()',
   hour:8,
   minute:0,
   controlType:"select",
   alwaysSetTime:true,
   stepMinute:10,
   oneLine: true,
   onSelect: function () {
   $('#m_date_en').val("");

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
   //minDate :'getDate()',
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
	
  var c_d1= {
   countySel: "高雄市", // 城市預設值, 字串一定要用繁體的 "臺", 否則抓不到資料
   districtSel: "前鎮區", // 地區預設值
   zipcodeIntoDistrict: true, // 郵遞區號自動顯示在地區
   css: ["city form-control", "town form-control"], // 自訂 "城市"、"地區" class 名稱 
   countyName: "city", // 自訂城市 select 標籤的 name 值
   districtName: "town" // 自訂地區 select 標籤的 name 值  
  };
  function gh(i){
  var d1 = new Date(i);
  return d1.getHours();
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
   var d_all= "http://www.google.com/calendar/event?action=TEMPLATE&text=" + d_t + "&dates=" + d_tall + "&details=" + d_d + "&location=" + d_p;

   $.ajax({
 url : "https://www.googleapis.com/urlshortener/v1/url?key=AIzaSyAwtUL4kEGvD72EU-QY5Wcana4UemEVbB0",
 type : "POST",
 contentType : 'application/json; charset=utf-8',
 dataType : "json",
 data :'{ longUrl: "' + d_all +'"}',

 success: function(result,status,xhr){
  var re_id= result.id
  window.location.replace('/klabor/test007.html?re_id='+ re_id + '&name=' + d_t + '&sta=' + status);

  }
});
  }
  }

function b_clic_b() {
 window.location.replace('/klabor/test006.html');
}

function reset1() {
 window.location.replace('/klabor/test006.html');
}

function b_return(u_turn) {
//先取得網址字串，假設此頁網址為「index.aspx?id=U001&name=GQSM」
var url = u_turn;

//再來用去尋找網址列中是否有資料傳遞(QueryString)
if(url.indexOf('?')!=-1)
{
    var id = "";
    //在此直接將各自的參數資料切割放進ary中
    var ary = url.split('?')[1].split('&');
    //此時ary的內容為：
    //ary[0] = 'id=U001'，ary[1] = 'name=GQSM'
    
    //下迴圈去搜尋每個資料參數
    for(i=0;i<=ary.length-1;i++)
    {
        //如果資料名稱為id的話那就把他取出來
        if(ary[i].split('=')[0] == 're_id')
	{ id = ary[i].split('=')[1];
		return id;
    }
    }	    
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

 function copyInput(){
   document.getElementById('show_re').select();
   document.execCommand('copy');
 }

 function copyimg(){
   document.getElementById('canvas').select();
   this.href=canvas.toDataURL();
 } 
 
function QRCode(content, width, height){
	width = !!width ? width : 200 ;
	height = !!height ? height : 200;
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
    ctx.drawImage(this, 0, 0, 200, 200);//qrcode的大小，正方形
    ctx.font = "18px Times New Roman";
    ctx.fillText('加入行程', 55, 190); //字的位置
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

	
