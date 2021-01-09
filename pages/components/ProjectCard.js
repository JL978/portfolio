import React from "react";
import Icon from "./Icon";
import { motion } from "framer-motion";
import { fadeInUp } from "./utils/animations/framer-defs";

export default function ProjectCard({
	title,
	description,
	icons,
	onClick,
	control,
}) {
	return (
		<motion.div
			className="projectCard"
			onClick={onClick}
			initial="hidden"
			animate={control}
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
		</motion.div>
	);
}
