import React from "react";
import { motion } from "framer-motion";

const fadein = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			// delayChildren: 0.3,
			staggerChildren: 0.1,
		},
	},
};

const down = {
	hidden: { y: -20, opacity: 0 },
	visible: { y: 0, opacity: 1 },
};

export default function NavBar() {
	return (
		<header>
			<nav>
				<div className="navLogo">
					<a href="/">
						<motion.h1 initial="hidden" animate="visible" variants={fadein}>
							JL
						</motion.h1>
					</a>
				</div>

				<motion.ul initial="hidden" animate="visible" variants={fadein}>
					<motion.li variants={down}>
						<a href="#about">About</a>
					</motion.li>
					<motion.li variants={down}>
						<a href="#projects">Project</a>
					</motion.li>
					<motion.li variants={down}>
						<a href="#contact">Contact</a>
					</motion.li>
				</motion.ul>
			</nav>
		</header>
	);
}
