var language = window.navigator.language;

if (language == 'ru' || language == 'ru-md' || language == 'be' || language == 'uk') {
	var messageSolidarity = 'Война закончится (если вы этого захотите)';
	var messageTruth = 'Путин вам врет';
	var decide = Math.floor(Math.random() * 2)
	var messageToShow = '';

	if(decide == 0) {
	  messageToShow = messageSolidarity
	}
	else {
	  messageToShow = messageTruth
	}

	function removeMessage() {
	document.getElementById("truth-solidarity-message").remove()
	}

	document.body.innerHTML += '<div id="truth-solidarity-message" style="z-index: 42424242424242424242;position:absolute;width: 80%;height:80%;background-color:#fff;color:#000;text-align:center;margin-top:100px;font-size:30px;"><div style="position:relative"><span onClick="removeMessage()" style="font-size:40px;color:#000;position:absolute;top:0;right:0;cursor:pointer;">X</span>'+messageToShow+'</div></div>';
}
