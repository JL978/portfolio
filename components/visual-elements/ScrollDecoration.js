import React from "react";
import { motion } from "framer-motion";
import { fadeInUp } from "../utils/animations/framer-defs";

export default function ScrollDecoration() {
	return (
		<div className="scroll">
			<motion.div initial="hidden" animate="visible" variants={fadeInUp}>
				<p>Scroll</p>
				<div className="line"></div>
			</motion.div>
		</div>
	);
}
