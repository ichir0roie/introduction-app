import React from "react";
import ReactMarkdown from "react-markdown";
import "./App.css";

function App(props) {
	return (
		<div>
			<header>
				<div className="container text-center">
					<div className="fh5co-navbar-brand">
						<a
							className="fh5co-logo"
							href="http://ichir0roie.com/introduction/"
						>
							Ichir0roie
						</a>
					</div>
					<nav id="fh5co-main-nav" role="navigation">
						<ul>{props.ElemLis}</ul>
					</nav>
				</div>
			</header>
			<div className="Md-content">
				<ReactMarkdown>{props.mdText}</ReactMarkdown>
			</div>
		</div>
	);
}

export default App;
