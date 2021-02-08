import React from "react";
import ReactMarkdown from "react-markdown";

function App(props) {
	return (
		<div>
			<header>
				<div class="container text-center">
					<div class="fh5co-navbar-brand">
						<a className="fh5co-logo" href="/">
							Ichir0roie
						</a>
					</div>
					<nav id="fh5co-main-nav" role="navigation">
						<ul>{props.ElemLis}</ul>
					</nav>
				</div>
			</header>
			<body>
				<ReactMarkdown>{props.mdText}</ReactMarkdown>
			</body>
		</div>
	);
}

export default App;
