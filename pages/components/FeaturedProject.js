import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInUp } from "./utils/animations/framer-defs";
import useIntersectAnimation from "./hooks/useIntersectAnimation";

export default function FeaturedProject({
	title,
	links,
	descriptions,
	tags,
	features,
	img,
}) {
	const [control, ref] = useIntersectAnimation();

	return (
		<div ref={ref} className="project">
			<motion.div
				className="info"
				initial="hidden"
				animate={control}
				variants={fadeInUp}
			>
				<h3>Featured Project</h3>
				<div className="header">
					<h2>{title}</h2>
					{links && links.map((link, idx) => <div key={idx}>{link.title}</div>)}
				</div>

				{descriptions.map((paragraph, idx) => (
					<p key={idx}>{paragraph}</p>
				))}

				<h5>Features:</h5>
				<ul>
					{features.map((feature, idx) => (
						<li key={idx}>{feature}</li>
					))}
				</ul>

				<div className="tags">
					{tags.map((tag, idx) => (
						<div key={idx}>{tag}</div>
					))}
				</div>
			</motion.div>
			<motion.div
				className="img"
				initial="hidden"
				animate={control}
				variants={fadeInUp}
			>
				<Image
					src={img}
					width={644}
					height={429}
					layout="fixed"
					quality={100}
				/>
			</motion.div>
		</div>
	);
}
