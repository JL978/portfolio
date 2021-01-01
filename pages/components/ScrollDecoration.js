import React from "react";
import { motion } from "framer-motion";

const fadein = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
	},
};

export default function ScrollDecoration() {
	return (
		<div className="scroll">
			<motion.div initial="hidden" animate="visible" variants={fadein}>
				<p>Scroll</p>
				<div className="line"></div>
			</motion.div>
		</div>
	);
}
