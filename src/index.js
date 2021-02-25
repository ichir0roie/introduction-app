import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

import App from "./App";

// python mdLinks auto generator start
var mdPages = [
	["ホーム", "mdFiles/ホーム.md"],
	["自己紹介", "mdFiles/自己紹介.md"],
	["ポートフォリオ", "mdFiles/ポートフォリオ.md"],
	["このページの紹介", "mdFiles/このページの紹介.md"],
	["食費計算アプリの紹介", "mdFiles/食費計算アプリの紹介.md"],
	["経歴", "mdFiles/経歴.md"],
	["Github", "mdFiles/Github.md"],
];
// python mdLinks auto generator end

var ElemLis = mdPages.map((page) => (
	<button onClick={() => feachMd(page[1])}>{page[0]}</button>
));

var mdText = feachMd(mdPages[0][1]);
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
