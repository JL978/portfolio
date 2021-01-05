import React from "react";
import Icon from "./Icon";

export default function ProjectCard({ title, description, icons, openModal }) {
	return (
		<div className="projectCard" onClick={openModal}>
			<div className="img"></div>
			<div className="content">
				<h3>{title}</h3>
				<p>{description}</p>
				<div className="icons">
					{icons.map((icon) => (
						<Icon name={icon} />
					))}
				</div>
			</div>
		</div>
	);
}
