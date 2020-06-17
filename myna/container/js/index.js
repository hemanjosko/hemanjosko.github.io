var g_title = {"EN":"Myna", "HN":"मैना"};
var g_start = {"EN":"Let's Start", "HN":"शुरू करे "};
var g_first = {"EN":"Dear Farmer<br/>I am Myna, I will try to provide you lots of information related farming,<br/> price of crops, subsidy information, government schemes and weather <br/>", 
"HN":"प्रिय किसान भाई,<br/>मेरा नाम मैना है, में आपको खेती सम्बन्धी देशभर की जानकारियां <br/>एवं सरकारी नियम व सब्सिडी, फसलों की वर्त्तमान कीमत, <br/>मौसम और भी कई जानकारियां में आपको <br/>देने की कोशिश करुँगी"};
var click_once = 0;
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

function stateUrl(state){
	var temp = {
		"AN":"http://agri.and.nic.in",
		"AP":"http://www.apagrisnet.gov.in",
		"AR":"http://arunachalpradesh.nic.in",
		"AS":"https://agri-horti.assam.gov.in/",
		"BR":"http://krishi.bih.nic.in, http://krishimis.in",
		"CH":"http://agripb.gov.in",
		"CT":"http://agridept.cg.gov.in",
		"DN":"http://dnh.nic.in/Departments/Agriculture.aspx",
		"DD":"http://www.daman.nic.in/websites/zonal_agriculture_daman/index.asp",
		"DL":"http://agricoop.nic.in/",
		"GA":"http://agri.goa.gov.in",
		"GJ":"https://agri.gujarat.gov.in/",
		"HR":"http://agriharyana.gov.in/",
		"HP":"http://www.hpagriculture.com/",
		"JK":"http://www.jkapd.nic.in/",
		"JH":"http://www.jharkhand.gov.in/agri",
		"KA":"http://raitamitra.kar.nic.in/KAN/index.asp",
		"KL":"http://www.keralaagriculture.gov.in/",
		"LD":"http://lakagri.nic.in/",
		"MP":"http://mpkrishi.mp.gov.in/",
		"MH":"http://krishi.maharashtra.gov.in",
		"MN":"http://agrimanipur.gov.in/",
		"ML":"http://www.megagriculture.gov.in/",
		"MZ":"http://agriculturemizoram.nic.in/",
		"NL":"http://agringl.nic.in/",
		"OR":"http://agriodisha.nic.in/",
		"PY":"http://agri.puducherry.gov.in/",
		"PB":"http://agripb.gov.in/",
		"RJ":"http://www.krishi.rajasthan.gov.in, http://agriculture.rajasthan.gov.in/",
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

function firstStart(){
	$(".myna-speak span").html("Kya aap apne state ki website par jana chahenge?");
	$(".customer-speak").html(returnStateSelection()+
		'<br/><button type="button" onclick="openStateWebsite()" class="btn btn-primary rounded-pill">Okay</button>');
	
}

function openStateWebsite(){
	if(click_once==0){
		click_once = 1;
		var state = $(".customer-speak select").val();
		window.location.href = stateUrl(state);
		appJavaScriptInterface.makeToast('Loading ...', true);
		click_once = 0;
	}
}