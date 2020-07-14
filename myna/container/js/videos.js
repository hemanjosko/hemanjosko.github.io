var queryString = window.location.search;
var urlParams = new URLSearchParams(queryString);
var lang = urlParams.get('lang');
var latest_list = ["be-TpNWMCc8", "pukcy-8FbPg", "0gdy2yerZNg", "v8_iG56qLJk", "YmmaBS3_Ohc", "RIr-xKgQlMI", "P2YPG8PO9JU"];
var organic_list = ["b49_XnutptQ", "Pj4S_OQEDUU", "2qiNKen-rm0", "G_uJ-aXXTEY", "CSxygxIRGZ8"];
var invention_list = ["ZbiP2VH-SW8", "d5PTKHRw2FQ", "lzGE4mBRPK0", "lt1vnLJu1GU", "X-p4P0SQytM", "KAV0w-UIobI"];
if(lang!="" && lang=="MH"){
    latest_list = ["c0XdPXa3T1I", "pukcy-8FbPg", "0gdy2yerZNg", "v8_iG56qLJk", "YmmaBS3_Ohc", "RIr-xKgQlMI", "P2YPG8PO9JU"];
    organic_list = ["b49_XnutptQ", "Pj4S_OQEDUU", "2qiNKen-rm0", "G_uJ-aXXTEY", "CSxygxIRGZ8"];
    invention_list = ["ZbiP2VH-SW8", "d5PTKHRw2FQ", "lzGE4mBRPK0", "lt1vnLJu1GU", "X-p4P0SQytM", "KAV0w-UIobI"];
}
if(lang!="" && lang=="PJ"){
    latest_list = ["o90_Bx3yIZA", "pukcy-8FbPg", "0gdy2yerZNg", "v8_iG56qLJk", "YmmaBS3_Ohc", "RIr-xKgQlMI", "P2YPG8PO9JU"];
    organic_list = ["b49_XnutptQ", "Pj4S_OQEDUU", "2qiNKen-rm0", "G_uJ-aXXTEY", "CSxygxIRGZ8"];
    invention_list = ["ZbiP2VH-SW8", "d5PTKHRw2FQ", "lzGE4mBRPK0", "lt1vnLJu1GU", "X-p4P0SQytM", "KAV0w-UIobI"];
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