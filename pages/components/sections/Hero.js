import React from "react";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

const titleTransition = {
	hidden: { opacity: 0, x: -40 },
	visible: {
		opacity: 1,
		x: 0,
	},
};

const ctaTransition = {
	hidden: { opacity: 0, scale: 0 },
	visible: {
		opacity: 1,
		scale: 1,
		transition: {
			delayChildren: 0.3,
			staggerChildren: 0.2,
		},
	},
};

const buttonTransition = {
	hidden: { y: 20, opacity: 0 },
	visible: { y: 0, opacity: 1 },
};

export default function Hero() {
	const router = useRouter();

	return (
		<div className="hero">
			<div className="content">
				<motion.h1
					initial="hidden"
					animate="visible"
					variants={titleTransition}
				>
					Making web apps from nanoparticles
				</motion.h1>
				<motion.div
					initial="hidden"
					animate="visible"
					className="cta"
					variants={ctaTransition}
				>
					<motion.button
						variants={buttonTransition}
						onClick={() => router.push("/#about")}
					>
						How?
					</motion.button>
					<motion.button
						variants={buttonTransition}
						onClick={() => router.push("/#contact")}
						className="button-secondary"
					>
						Contact me
					</motion.button>
				</motion.div>
			</div>
		</div>
	);
}
