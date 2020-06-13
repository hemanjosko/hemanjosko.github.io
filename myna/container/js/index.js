$( document ).ready(function() {
	var queryString = window.location.search;
	var urlParams = new URLSearchParams(queryString);
	var lang = urlParams.get('lang')
	alert(lang);
});