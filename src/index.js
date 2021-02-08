import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

import App from "./App";

// python mdLinks auto generator start

var testUrl = "http://localhost:3000/mdFiles/PageInfo.md";
var testUrl1 = "http://ichir0roie.com/introduction/mdFiles/PageInfo.md";
var testUrl2 = "http://localhost:3000/mdFiles/PageInfo.md2";
var testUrl3 = "http://localhost:3000/mdFiles/PageInfo.md3";

var mdPages = [
	["AndroidApps", testUrl],
	["Github", testUrl1],
	["Introduction", testUrl2],
	["PageInfo", testUrl3],
];
// python mdLinks auto generator end

var ElemLis = mdPages.map((page) => (
	<button onClick={() => feachMd(page[1])}>{page[0]}</button>
));

var mdText = "";
function feachMd(url) {
	fetch(url).then(function (response) {
		response.text().then(function (text) {
			mdText = text;

			ReactDOM.render(
				<React.StrictMode>
					<App ElemLis={ElemLis} mdText={mdText} />
				</React.StrictMode>,
				document.getElementById("dom-container")
			);
		});
	});
}

ReactDOM.render(
	<React.StrictMode>
		<App ElemLis={ElemLis} mdText={mdText} />
	</React.StrictMode>,
	document.getElementById("dom-container")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
