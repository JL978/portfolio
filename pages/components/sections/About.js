import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInLeft, fadeInRight } from "../utils/animations/framer-defs";
import useIntersectAnimation from "../hooks/useIntersectAnimation";

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
				<h2>Can I really make web apps out of nanoparticles?</h2>
				<p>Not really no, sorry for the clickbait title :)</p>
				<p>
					Although I did go to the University of Toronto for 5 years to be a
					materials engineer. That includes an year-long internship where I was
					making{" "}
					<b>nanoparticles that turn carbon dioxide into renewable fuels</b>
				</p>
				<p>
					That said, I discovered my love for programming during the very same
					internship by building <b>my first program</b> and I now dedicate my
					time self-learning and practicing full-stack web development
				</p>
				<p>
					I believe project-based learning is the fastest way to learn,
					therefore I have wasted no time building apps using techonolgies such
					as React, Node.js, Angular, Express.js, Socket.io, etc.
				</p>
				<a href="#projects">
					<b>
						Check out my projects <span>&#x2192;</span>
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
					layout="fixed"
					quality={100}
				/>
			</motion.div>
		</div>
	);
}
