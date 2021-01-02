import React from "react";
import { motion } from "framer-motion";
import { fadeInLeft, fadeInRight } from "../utils/animations/framer-defs";
import useIntersectAnimation from "../hooks/useIntersectAnimation";

export default function Contact() {
	const [control, ref] = useIntersectAnimation();

	return (
		<div ref={ref} className="contact">
			<motion.div
				className="info"
				initial="hidden"
				animate={control}
				variants={fadeInRight}
			>
				<h2>Contacts</h2>
				<p>
					I am open to opportunities right now. If you have a project you think
					I would be a good fit, please don't hesitate to contact me through any
					one of the following means
				</p>
				<h3>Phone</h3>
				<p>1 (647) 570-2405</p>
				<h3>Email</h3>
				<p>JimmyLam045@gmail.com</p>
			</motion.div>
			<div className="or">Or</div>
			<motion.div
				className="message"
				initial="hidden"
				animate={control}
				variants={fadeInLeft}
			>
				<form>
					<h2>Leave a message</h2>
					<input type="text" id="name" placeholder="Your name"></input>
					<input type="text" id="email" placeholder="Your email"></input>
					<textarea placeholder="Your message"></textarea>
					<input type="submit" value="send message"></input>
				</form>
			</motion.div>
		</div>
	);
}
