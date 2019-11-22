// http://translate.google.com/translate_tts?ie=UTF-8&tl=en&client=tw-ob&q=textyouwannaberead
chrome.browserAction.onClicked.addListener(function (tab) {
	// for the current tab, inject the "inject.js" file & execute it
	chrome.tabs.executeScript(tab.ib, {
		file: 'inject.js'
	});
});
