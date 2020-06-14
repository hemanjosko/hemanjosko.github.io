var g_title = {"EN":"Myna", "HN":"मैना"};
var g_start = {"EN":"Let's Start", "HN":"शुरू करे "};
var g_first = {"EN":"Dear Farmer<br/>I am Myna, I will try to provide you lots of information related farming,<br/> price of crops, subsidy information, government schemes and weather <br/>", 
"HN":"प्रिय किसान भाई,<br/>मेरा नाम मैना है, में आपको खेती सम्बन्धी देशभर की जानकारियां <br/>एवं सरकारी नियम व सब्सिडी, फसलों की वर्त्तमान कीमत, <br/>मौसम और भी कई जानकारियां में आपको <br/>देने की कोशिश करुँगी"}
$( document ).ready(function() {
	var queryString = window.location.search;
	var urlParams = new URLSearchParams(queryString);
	var lang = urlParams.get('lang')
	if(lang!=""){
		changeLanguage(lang);
	}else{
		changeLanguage("EN");
	}
});

function changeLanguage(lang){
	$(".navbar-brand").html(g_title[lang]);
	$(".customer-speak button").html(g_start[lang]);
	$(".myna-speak span").html(g_first[lang]);
}

