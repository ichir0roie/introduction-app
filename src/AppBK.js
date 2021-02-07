import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// python mdLinks auto generator start
import AndroidApps from "./mdForJs/AndroidApps";
import Github from "./mdForJs/Github";
import Introduction from "./mdForJs/Introduction";
import PageInfo from "./mdForJs/PageInfo";
var mdPages = [
["AndroidApps", <AndroidApps />],
["Github", <Github />],
["Introduction", <Introduction />],
["PageInfo", <PageInfo />],
];
// python mdLinks auto generator end

function elemLi(page) {
	var href = "/" + page[0];
	return (
		<li>
			<a href={href}>{page[0]}</a>
		</li>
	);
}
function elemRt(page) {
	var path = "/" + page[0];
	return <Route path={path}>{page[1]}</Route>;
}

const elemLis = [];
const elemRts = [];

for (var i = 0; i < mdPages.length; i++) {
	elemLis.push(elemLi(mdPages[i]));
	elemRts.push(elemRt(mdPages[i]));
}

function App() {
	return (
		<div>
			<header>
				<div class="container text-center">
					<div class="fh5co-navbar-brand">
						<a class="fh5co-logo" href="/">
							Ichir0roie
						</a>
					</div>
					<nav id="fh5co-main-nav" role="navigation">
						<ul>{elemLis}</ul>
					</nav>
				</div>
			</header>
			<body>
				<Router>
					<Suspense fallback={<div>Loading...</div>}>
						<Switch>
							<Route exact path="/">
								<h1>ムダにReactで作った自己紹介ページ！！</h1>
							</Route>
							{elemRts}
						</Switch>
					</Suspense>
				</Router>
			</body>
		</div>
	);
}

export default App;
