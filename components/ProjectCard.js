import React from "react";
import Image from "next/image";
import Icon from "./Icon";

export default function ProjectCard({
	title,
	description,
	icons,
	onClick,
	imgSrc,
}) {
	return (
		<div className="projectCard" onClick={onClick} initial="hidden">
			<Image
				className="img"
				src={imgSrc}
				width={1473}
				height={905}
				layout="responsive"
				quality={80}
			/>

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
