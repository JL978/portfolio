import React from "react";
import Icon from "./Icon";

export default function Socials() {
	return (
		<div className="socials">
			<ul>
				<li>
					<a>
						<Icon name="github" />
					</a>
				</li>
				<li>
					<a>
						<Icon name="LinkedIn2" />
					</a>
				</li>
				<li>
					<a>
						<Icon name="email" />
					</a>
				</li>
			</ul>
		</div>
	);
}
