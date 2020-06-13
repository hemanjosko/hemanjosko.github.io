const queryString = window.location.search;

const urlParams = new URLSearchParams(queryString);

const lang = urlParams.get('lang')

alert(lang);