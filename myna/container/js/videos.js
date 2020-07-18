var queryString = window.location.search;
var urlParams = new URLSearchParams(queryString);
var lang = urlParams.get('lang');
var latest_list = ["be-TpNWMCc8", "pukcy-8FbPg", "0gdy2yerZNg", "v8_iG56qLJk", "YmmaBS3_Ohc", "RIr-xKgQlMI", "P2YPG8PO9JU"];
var organic_list = ["b49_XnutptQ", "Pj4S_OQEDUU", "2qiNKen-rm0", "G_uJ-aXXTEY", "CSxygxIRGZ8", "dkZsIpKhdBs"];
var invention_list = ["d5PTKHRw2FQ", "lzGE4mBRPK0", "lt1vnLJu1GU", "X-p4P0SQytM", "KAV0w-UIobI"];
if(lang!="" && lang=="MH"){
    latest_list = ["c0XdPXa3T1I", "vsyrZozTbXI", "yEVcXdRfGFM", "2_PODAkg64M", "_SC6_a4SmsU", "AnKFHadJsko", "7bxmDDDxy9w"];
    organic_list = ["80v4K50MUoI", "algLQ3k6IzM", "dCMvqR7ew2Q", "3E_YChXnoD8", "972iwZJSDC4"];
    invention_list = ["d5PTKHRw2FQ", "lzGE4mBRPK0", "lt1vnLJu1GU", "X-p4P0SQytM", "KAV0w-UIobI"];
}
if(lang!="" && lang=="PJ"){
    latest_list = ["o90_Bx3yIZA", "PIohT3Wnn3k", "Y6wN74ElIys", "VShXHRbynwc", "uNrBeZJnAKY", "46-5yGVU_Yc", "_AHNO3NLjbY", "zX7EN3ppm_Q"];
    organic_list = ["Dv736bhwZxU", "cYwIjAMxqPg", "LLOSiCNu11w", "ow7Pl21P5K0", "xIHT3-nh4SU", "IJWjl3mnhLQ", "fkkIE_8-LtU", "Ojx5R76C4H0"];
    invention_list = ["HVPPsaI8tbE", "d5PTKHRw2FQ", "lzGE4mBRPK0", "lt1vnLJu1GU", "X-p4P0SQytM", "KAV0w-UIobI"];
}
var g_organic = {
	"EN": "Organic",
	"HN": "जैविक",
	"MH": "सेंद्रिय",
	"PJ": "ਜੈਵਿਕ"
};
var g_latest = {
	"EN": "Latest",
	"HN": "नवीनतम",
	"MH": "नवीनतम",
	"PJ": "ਤਾਜ਼ਾ"
};
var g_inventions = {
	"EN": "Inventions",
	"HN": "आविष्कार",
	"MH": "शोध",
	"PJ": "ਖੋਜ"
};
$(document).ready(function () {
	if (lang != "") {
		changeLanguage(lang);
	} else {
		changeLanguage("EN");
	}
	setVideos();
});

function changeLanguage(lang) {
	$("#organic-tab").html(g_organic[lang]);
	$("#latest-tab").html(g_latest[lang]);
	$("#inventions-tab").html(g_inventions[lang]);
}

function setVideos(){
    var latest_set = "";
    for (i = 0; i < latest_list.length; i++) {
      latest_set +=  '<div class="shimmer">'+
		                '<iframe class="frame" width="100%" height="315" src="https://www.youtube.com/embed/'+latest_list[i]+'" frameborder="0" allow="encrypted-media" allowfullscreen></iframe>'+
	                 '</div>';
    }
    $("#latest").html(latest_set);
    var organic_set = "";
    for (i = 0; i < organic_list.length; i++) {
      organic_set +=  '<div class="shimmer">'+
		                '<iframe class="frame" width="100%" height="315" src="https://www.youtube.com/embed/'+organic_list[i]+'" frameborder="0" allow="encrypted-media" allowfullscreen></iframe>'+
	                 '</div>';
    }
    $("#organic").html(organic_set);
        var invention_set = "";
    for (i = 0; i < invention_list.length; i++) {
      invention_set +=  '<div class="shimmer">'+
		                '<iframe class="frame" width="100%" height="315" src="https://www.youtube.com/embed/'+invention_list[i]+'" frameborder="0" allow="encrypted-media" allowfullscreen></iframe>'+
	                 '</div>';
    }
    $("#inventions").html(invention_set);
}