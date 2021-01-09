import React from "react";
import Icon from "./Icon";
import { fadeInUp } from "./utils/animations/framer-defs";

export default function ProjectCard({ title, description, icons, onClick }) {
	return (
		<div
			className="projectCard"
			onClick={onClick}
			initial="hidden"
			variants={fadeInUp}
		>
			<div className="img"></div>
			<div className="content">
				<h3>{title}</h3>
				<p>{description}</p>
				<div className="icons">
					{icons.map((icon, idx) => (
						<Icon key={idx} name={icon} />
					))}
				</div>
			</div>
		</div>
	);
}
