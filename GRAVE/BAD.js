function load(url) {
	var oReq = new XMLHttpRequest();
	var returnText = "";
	oReq.open("GET", url);
	oReq.onload = function () {
		returnText = oReq.response;
	};
	//oReq.overrideMimeType("text/plain; charset=utf-8");
	oReq.responseType = "text";
	oReq.send();
	return returnText;
}

function load(url) {
	var returnText = "";

	fetch(url).then(function (response) {
		response.text().then(function (text) {
			returnText = text;
		});
	});

	return returnText;
}

fetch(url).then(function (response) {
	response.text().then(function (text) {
		returnText = text;
		console.log(returnText);
		console.log(response.status);
	});
});
