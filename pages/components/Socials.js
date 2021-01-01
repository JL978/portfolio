import React from "react";
import Icon from "./Icon";
import { motion } from "framer-motion";

const parent = {
	hidden: { opacity: 1 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.1,
		},
	},
};

const child = {
	hidden: { opacity: 0, x: -30 },
	visible: { opacity: 1, x: 0 },
};

export default function Socials() {
	return (
		<div className="socials">
			<motion.ul initial="hidden" animate="visible" variants={parent}>
				<motion.li variants={child}>
					<a href="https://github.com/JL978" target="_blank">
						<Icon name="github" />
					</a>
				</motion.li>
				<motion.li variants={child}>
					<a
						href="https://www.linkedin.com/in/jimmy-lam-b3a678103/"
						target="_blank"
					>
						<Icon name="LinkedIn2" />
					</a>
				</motion.li>
				<motion.li variants={child}>
					<a href="mailto:JimmyLam045@gmail.com">
						<Icon name="email" />
					</a>
				</motion.li>
			</motion.ul>
		</div>
	);
}
