import React from "react";
import Icon from "./Icon";

export default function Socials() {
	return (
		<div className="socials">
			<ul>
				<li>
					<a href="#github">
						<Icon name="github" />
					</a>
				</li>
				<li>
					<a href="#li">
						<Icon name="LinkedIn2" />
					</a>
				</li>
				<li>
					<a href="#email">
						<Icon name="email" />
					</a>
				</li>
			</ul>
		</div>
	);
}
