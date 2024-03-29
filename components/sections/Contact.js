import React from "react";
import { motion } from "framer-motion";
import { fadeInLeft, fadeInRight } from "../utils/animations/framer-defs";
import useIntersectAnimation from "../hooks/useIntersectAnimation";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as yup from "yup";
import axios from "axios";

const schema = yup.object({
	name: yup.string().required(),
	email: yup.string().email().required(),
	message: yup.string().required(),
});

const errorStyle = {
	fontSize: "0.7rem",
	fontStyle: "italic",
	color: "#ff5252",
};

export default function Contact() {
	const [control, ref] = useIntersectAnimation();

	async function sendMessage(value, { setSubmitting, resetForm }) {
		const data = {
			service_id: "service_tpacwo9",
			template_id: "template_x88x1mn",
			user_id: "user_TIAYWzPwLRc3K7NXARH4F",
			template_params: value,
		};

		try {
			await axios({
				method: "POST",
				url: "https://api.emailjs.com/api/v1.0/email/send",
				data,
				// withCredentials: true,
			});
			setSubmitting(false);
			resetForm();
		} catch (err) {
			console.log(err);
		}
	}

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
					I am happy to chat through:
				</p>
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
				<Formik
					initialValues={{ name: "", email: "", message: "" }}
					validationSchema={schema}
					onSubmit={sendMessage}
				>
					{({ isSubmitting, handleSubmit }) => (
						<Form onSubmit={handleSubmit}>
							<h2>Leave a message</h2>
							<ErrorMessage name="name" style={errorStyle} component="div" />
							<Field
								type="text"
								name="name"
								placeholder="Your name"
								aria-label="your name"
							></Field>
							<ErrorMessage name="email" style={errorStyle} component="div" />
							<Field
								type="text"
								name="email"
								placeholder="Your email"
								aria-label="your email"
							></Field>
							<ErrorMessage name="message" style={errorStyle} component="div" />
							<Field
								type="text"
								placeholder="Your message"
								name="message"
								component="textarea"
								aria-label="leave a message"
							></Field>
							<input
								type="submit"
								value="send message"
								disabled={isSubmitting}
							></input>
						</Form>
					)}
				</Formik>
			</motion.div>
		</div>
	);
}
