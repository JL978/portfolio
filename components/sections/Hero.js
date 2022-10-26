import React from "react";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import {
	fadeInUp,
	fadeInRight,
	childrenStaggerDelay,
} from "../utils/animations/framer-defs";

export default function Hero() {
	const router = useRouter();

	return (
		<div className="hero">
			<div className="content">
				<motion.h1 initial="hidden" animate="visible" variants={fadeInRight}>
					Making pretty things that lives on the web
				</motion.h1>
				<motion.div
					initial="hidden"
					animate="visible"
					className="cta"
					variants={childrenStaggerDelay}
				>
					<motion.button
						variants={fadeInUp}
						onClick={() => router.push("/#about")}
					>
						Who?
					</motion.button>
					<a href="/static/files/JimmyLam_Resume2022.pdf" download>
						<motion.button
							variants={fadeInUp}
							// onClick={() => router.push("/#contact")}
							className="button-secondary"
						>
							Resume
						</motion.button>
					</a>
				</motion.div>
			</div>
		</div>
	);
}
