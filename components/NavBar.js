import React from "react";
import { motion } from "framer-motion";
import {
	fadeIn,
	fadeInDown,
	childrenStagger,
} from "./utils/animations/framer-defs";

export default function NavBar() {
	return (
		<header>
			<nav>
				<div className="navLogo">
					<a href="/">
						<motion.h1 initial="hidden" animate="visible" variants={fadeIn}>
							JL
						</motion.h1>
					</a>
				</div>

				<motion.ul
					initial="hidden"
					animate="visible"
					variants={childrenStagger}
				>
					<motion.li variants={fadeInDown}>
						<a href="#about">About</a>
					</motion.li>
					<motion.li variants={fadeInDown}>
						<a href="#projects">Projects</a>
					</motion.li>
					<motion.li variants={fadeInDown}>
						<a href="#contact">Contact</a>
					</motion.li>
				</motion.ul>
			</nav>
		</header>
	);
}
