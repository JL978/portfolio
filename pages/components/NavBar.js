import React from "react";

export default function NavBar() {
	return (
		<header>
			<nav>
				<div className="navLogo">
					<a href="/">
						<h1>JL</h1>
					</a>
				</div>

				<ul>
					<li>
						<a href="#about">About</a>
					</li>
					<li>
						<a href="#projects">Project</a>
					</li>
					<li>
						<a href="#contact">Contact</a>
					</li>
				</ul>
			</nav>
		</header>
	);
}
