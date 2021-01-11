import React from "react";
import Icon from "../Icon";
import { motion } from "framer-motion";
import { fadeInRight, childrenStagger } from "../utils/animations/framer-defs";

export default function Socials() {
	return (
		<div className="socials">
			<motion.ul initial="hidden" animate="visible" variants={childrenStagger}>
				<motion.li variants={fadeInRight}>
					<a
						href="https://github.com/JL978"
						target="_blank"
						rel="noreferrer"
						aria-label="github"
					>
						<Icon name="github" />
					</a>
				</motion.li>
				<motion.li variants={fadeInRight}>
					<a
						href="https://www.linkedin.com/in/jimmy-lam-b3a678103/"
						target="_blank"
						rel="noreferrer"
						aria-label="linkedin"
					>
						<Icon name="LinkedIn2" />
					</a>
				</motion.li>
				<motion.li variants={fadeInRight}>
					<a href="mailto:JimmyLam045@gmail.com" aria-label="email">
						<Icon name="email" />
					</a>
				</motion.li>
			</motion.ul>
		</div>
	);
}
