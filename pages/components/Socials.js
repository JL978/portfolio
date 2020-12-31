import React from "react";
import Icon from "./Icon";

export default function Socials() {
	return (
		<div className="socials">
			<ul>
				<li>
					<a href="https://github.com/JL978" target="_blank">
						<Icon name="github" />
					</a>
				</li>
				<li>
					<a
						href="https://www.linkedin.com/in/jimmy-lam-b3a678103/"
						target="_blank"
					>
						<Icon name="LinkedIn2" />
					</a>
				</li>
				<li>
					<a href="mailto:JimmyLam045@gmail.com">
						<Icon name="email" />
					</a>
				</li>
			</ul>
		</div>
	);
}
