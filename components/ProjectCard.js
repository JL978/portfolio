import React from "react";
import Image from "next/image";
import Icon from "./Icon";

export default function ProjectCard({
	title,
	description,
	icons,
	onClick,
	src,
	alt,
}) {
	return (
		<div className="projectCard" onClick={onClick} initial="hidden">
			<div className="image">
				<Image
					src={src}
					layout="responsive"
					quality={100}
					alt={alt}
					fill
					style={{ objectFit: "cover" }}
				/>
			</div>		

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
