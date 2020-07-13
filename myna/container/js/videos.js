var queryString = window.location.search;
var urlParams = new URLSearchParams(queryString);
var lang = urlParams.get('lang');

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
});

function changeLanguage(lang) {
	$("#organic-tab").html(g_organic[lang]);
	$("#latest-tab").html(g_latest[lang]);
	$("#inventions-tab").html(g_inventions[lang]);
}
