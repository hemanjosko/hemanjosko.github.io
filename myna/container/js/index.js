var queryString = window.location.search;
var urlParams = new URLSearchParams(queryString);
var lang = urlParams.get('lang');

var g_title = {"EN":"Myna", "HN":"मैना"};
var g_start = {"EN":"Let's Start", "HN":"शुरू करे "};
var g_first = {"EN":"Dear Farmer<br/>I am Myna, I will try to provide you lots of information related farming,<br/> price of crops, subsidy information, government schemes and weather <br/>", 
"HN":"प्रिय किसान भाई,<br/>मेरा नाम मैना है, में आपको खेती सम्बन्धी देशभर की जानकारियां <br/>एवं सरकारी नियम व सब्सिडी, फसलों की वर्त्तमान कीमत, <br/>मौसम और भी कई जानकारियां में आपको <br/>देने की कोशिश करुँगी"};
var g_option = {"EN":"Dear farmer brother, Today I can show you the weather and I can show your states official website","HN":"प्रिय किसान भाई, आज मैं आपको मौसम दिखा सकता हूं और मैं आपके राज्यों की आधिकारिक वेबसाइट दिखा सकता हूँ"};
var g_first_option = {"EN":"Let's see website of State Official Agricultural Government<br/><br/>Select your state", "HN":"आइए देखते हैं राज्य आधिकारिक कृषि सरकार की वेबसाइट<br/><br/>अपना राज्य चुनें"};
var g_second_option = {"EN":"Let's see how is weather today", "HN":"आइए देखें कि आज कैसा है मौसम"};
var click_once = 0;
var g_okay = {"EN":"Okay","HN":"ठीक है"};
var g_website = {"EN":"Government Website","HN":"सरकारी वेबसाइट"};
var g_weather = {"EN":"Weather","HN":"मौसम"};
var g_loading = {"EN":"Loading...","HN":"कृपया प्रतीक्षा करे..."};
var g_myna_msg = {"EN":"Hello I am myna and I am farmer friend","HN":"हैलो मैं मैना हूं और मैं किसान की दोस्त हूँ "};
var g_videos = {"EN":"Videos","HN":"वीडियो"};
var g_prices = {"EN":"Prices","HN":"कीमत"};
var g_third_option = {"EN":"See agricultural and informational videos", "HN":"कृषि और सूचनात्मक वीडियो देखें"};
var g_fourth_option = {"EN":"See the current prices of crops", "HN":"फसलों की वर्तमान कीमतों को देखें"};
var g_goback = {"EN":"<< Go back", "HN":"<< पिछे जाइये "};
$( document ).ready(function() {
	if(lang!=""){
		changeLanguage(lang);
	}else{
		changeLanguage("EN");
	}
	$(".navbar-brand").attr("onclick","appJavaScriptInterface.makeToast('"+g_myna_msg[lang]+"', true)");
});

function changeLanguage(lang){
	$(".navbar-brand").html(g_title[lang]);
	$(".customer-speak button").html(g_start[lang]);
	$(".myna-speak span").html(g_first[lang]);
}

function stateUrl(state){
	var temp = {
		"AN":"http://agri.and.nic.in",
		"AP":"http://www.apagrisnet.gov.in",
		"AR":"http://www.agri.arunachal.gov.in/",
		"AS":"https://agri-horti.assam.gov.in/",
		"BR":"https://state.bihar.gov.in/",
		"CH":"http://chandigarh.gov.in/dept_agri.htm",
		"CT":"http://agridept.cg.gov.in",
		"DN":"http://dnh.nic.in/Departments/Agriculture.aspx",
		"DD":"https://daman.nic.in/agriculture.aspx",
		"DL":"http://agricoop.nic.in/",
		"GA":"https://agri.goa.gov.in/",
		"GJ":"https://agri.gujarat.gov.in/",
		"HR":"http://agriharyana.gov.in/",
		"HP":"http://www.hpagriculture.com/",
		"JK":"http://www.jkapd.nic.in/",
		"JH":"http://www.jharenvis.nic.in/Database/AGRICULTUREINJHARKHAND_2327.aspx",
		"KA":"http://raitamitra.kar.nic.in/KAN/index.asp",
		"KL":"http://www.keralaagriculture.gov.in/",
		"LD":"https://lakshadweep.gov.in/notice/department-of-agriculture-checklist-of-candidates-applied-for-the-post-of-mse-part-v/",
		"MP":"http://mpkrishi.mp.gov.in/",
		"MH":"http://krishi.maharashtra.gov.in",
		"MN":"http://agrimanipur.gov.in/",
		"ML":"https://megagriculture.gov.in/",
		"MZ":"http://agriculturemizoram.nic.in/",
		"NL":"https://agriculture.nagaland.gov.in/",
		"OR":"http://agriodisha.nic.in/",
		"PY":"https://agri.py.gov.in/",
		"PB":"https://agri.punjab.gov.in/",
		"RJ":"http://agriculture.rajasthan.gov.in/",
		"SK":"http://www.sikkimagrisnet.org",
		"TN":"http://www.tn.gov.in/department/2",
		"TG":"http://agri.telangana.gov.in/",
		"TR":"http://agri.tripura.gov.in/",
		"UP":"http://upagripardarshi.gov.in/StaticPages/UttarPradesh4.aspx",
		"UT":"http://agriculture.uk.gov.in/",
		"WB":"https://wb.gov.in/portal/web/guest/agriculture"
	}
	return temp[state];
}

function returnStateSelection(){
	var state = '<select class="form-control"><option value="AN">Andaman and Nicobar Islands</option>'+
'<option value="AP">Andhra Pradesh</option>'+
'<option value="AR">Arunachal Pradesh</option>'+
'<option value="AS">Assam</option>'+
'<option value="BR">Bihar</option>'+
'<option value="CH">Chandigarh</option>'+
'<option value="CT">Chhattisgarh</option>'+
'<option value="DN">Dadra and Nagar Haveli</option>'+
'<option value="DD">Daman and Diu</option>'+
'<option value="DL">Delhi</option>'+
'<option value="GA">Goa</option>'+
'<option value="GJ">Gujarat</option>'+
'<option value="HR">Haryana</option>'+
'<option value="HP">Himachal Pradesh</option>'+
'<option value="JK">Jammu & Kashmir</option>'+
'<option value="JH">Jharkhand</option>'+
'<option value="KA">Karnataka</option>'+
'<option value="KL">Kerala</option>'+
'<option value="LD">Lakshadweep</option>'+
'<option value="MP">Madhya Pradesh</option>'+
'<option value="MH">Maharashtra</option>'+
'<option value="MN">Manipur</option>'+
'<option value="ML">Meghalaya</option>'+
'<option value="MZ">Mizoram</option>'+
'<option value="NL">Nagaland</option>'+
'<option value="OR">Odisha</option>'+
'<option value="PY">Puducherry</option>'+
'<option value="PB">Punjab</option>'+
'<option value="RJ">Rajasthan</option>'+
'<option value="SK">Sikkim</option>'+
'<option value="TN">Tamilnadu</option>'+
'<option value="TG">Telangana</option>'+
'<option value="TR">Tripura</option>'+
'<option value="UP">Uttar Pradesh</option>'+
'<option value="UT">Uttarakhand</option>'+
'<option value="WB">West Bengal</option></select>';
return state;
}

function openStateWebsite(){
	if(click_once==0){
		click_once = 1;
		var state = $(".customer-speak select").val();
		window.location.href = stateUrl(state);
		appJavaScriptInterface.makeToast(g_loading[lang], true);
		click_once = 0;
	}
}

function listStart(){
	$(".myna-speak span").html(g_option[lang]);
	$(".customer-speak").html('<button type="button" onclick="firstStart()" class="mr-1 mt-1 btn btn-primary rounded-pill">'+g_website[lang]+'</button>'+
	'<button type="button" onclick="seccondStart()" class="mr-1 mt-1 btn btn-primary rounded-pill">'+g_weather[lang]+'</button>'+
	'<button type="button" onclick="thirdStart()" class="mr-1 mt-1 btn btn-primary rounded-pill">'+g_videos[lang]+'</button>'+
	'<button type="button" onclick="fourthStart()" class="mr-1 mt-1 btn btn-primary rounded-pill">'+g_prices[lang]+'</button>'+
	'<button type="button" onclick="openMainPage()" class="mr-1 mt-1 btn btn-primary rounded-pill">'+g_goback[lang]+'</button>');
}

function firstStart(){
	$(".myna-speak span").html(g_first_option[lang]);
	$(".customer-speak").html(returnStateSelection()+'<br/><button type="button" onclick="openStateWebsite()" class="mr-1 mt-1 btn btn-primary rounded-pill">'+g_okay[lang]+'</button>'+
	'<button type="button" onclick="openMainPage()" class="mr-1 mt-1 btn btn-primary rounded-pill">'+g_goback[lang]+'</button>');
	
}
function seccondStart(){
	$(".myna-speak span").html(g_second_option[lang]);
	$(".customer-speak").html('<button type="button" onclick="openWeatherWebsite()" class="mr-1 mt-1 btn btn-primary rounded-pill">'+g_okay[lang]+'</button>'+
	'<button type="button" onclick="openMainPage()" class="mr-1 mt-1 btn btn-primary rounded-pill">'+g_goback[lang]+'</button>');
}
function thirdStart(){
	$(".myna-speak span").html(g_third_option[lang]);
	$(".customer-speak").html('<button type="button" onclick="gothirdStart()" class="mr-1 mt-1 btn btn-primary rounded-pill">'+g_okay[lang]+'</button>'+
	'<button type="button" onclick="openMainPage()" class="mr-1 mt-1 btn btn-primary rounded-pill">'+g_goback[lang]+'</button>');
}

function fourthStart(){
	$(".myna-speak span").html(g_fourth_option[lang]);
	$(".customer-speak").html('<button type="button" onclick="goFourthStart()" class="mr-1 mt-1 btn btn-primary rounded-pill">'+g_okay[lang]+'</button>'+
	'<button type="button" onclick="openMainPage()" class="mr-1 mt-1 btn btn-primary rounded-pill">'+g_goback[lang]+'</button>');
}

function goFourthStart(){
	window.location.href = "https://agmarknet.gov.in/";
	appJavaScriptInterface.makeToast(g_loading[lang], true);
}

function openWeatherWebsite(){
	window.location.href = "https://www.accuweather.com/";
	appJavaScriptInterface.makeToast(g_loading[lang], true);
}
function gothirdStart(){
	window.location.href = "https://hemanjosko.github.io/myna/videos.html?lang="+lang;
	appJavaScriptInterface.makeToast(g_loading[lang], true);
}
function openMainPage(){
	$("#body-container .col").html('<p class="myna-speak"><img width="100" class="img-fluid mb-2" alt="Responsive image" src="container/images/hellobird.png"/><br/><span></span></p>'+
	'<p class="customer-speak"><button type="button" onclick="listStart()" class="btn btn-primary rounded-pill"></button></p><div class="clear"></div>');
	changeLanguage(lang);
}
function shareApp(){
	appJavaScriptInterface.shareApp("खेती की देश विदेश की सभी जानकारियां और सही सलाह पाने के लिए अभी डाउनलोड करें  - Myna - Smart Krishi Network ");
}