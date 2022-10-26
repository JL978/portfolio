import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInLeft, fadeInRight } from "../utils/animations/framer-defs";
import useIntersectAnimation from "../hooks/useIntersectAnimation";
import Icon from "../Icon";

const externalLInkStyle = {
	fontSize: "0.85rem",
	fontStyle: "italic",
};
export default function About() {
	const [control, ref] = useIntersectAnimation();

	return (
		<div ref={ref} className="about">
			<motion.div
				className="info"
				initial="hidden"
				animate={control}
				variants={fadeInRight}
			>
				<h3>about me</h3>
				<h2>Hi 👋 My Name Is Jimmy</h2>
				<p>That is me on the right there in a lab coat 😃</p>
				<p>
					In my past life, I was a materials engineer. I have since decided that the lab coat life was not for me and now I am a full-stack web developer.
				</p>
				<p>
					I am currently working as a software engineer at TXIO, developing financial web and mobile applications. 
				</p>
				<a href="#projects">
					<b>
						Check out some of my works <span>&#x2192;</span>
					</b>
				</a>
			</motion.div>
			<motion.div
				className="img"
				initial="hidden"
				animate={control}
				variants={fadeInLeft}
			>
				<Image
					src="/static/img/me.jpg"
					width={644}
					height={429}
					layout="responsive"
					quality={100}
					alt="Jimmy Lam"
				/>
			</motion.div>
		</div>
	);
}
