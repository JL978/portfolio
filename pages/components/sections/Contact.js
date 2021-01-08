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

export default function Contact() {
	const [control, ref] = useIntersectAnimation();

	async function sendMessage(value, { setSubmitting, resetForm }) {
		try {
			await axios({
				method: "POST",
				url: "http://localhost:4200/message",
				data: value,
				withCredentials: true,
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
				<Formik
					initialValues={{ name: "", email: "", message: "" }}
					validationSchema={schema}
					onSubmit={sendMessage}
				>
					{({ isSubmitting, handleSubmit }) => (
						<Form onSubmit={handleSubmit}>
							<h2>Leave a message</h2>
							<ErrorMessage
								name="name"
								style={{
									fontSize: "0.7rem",
									fontStyle: "italic",
									color: "#ff5252",
								}}
								component="div"
							/>
							<Field type="text" name="name" placeholder="Your name"></Field>
							<ErrorMessage
								name="email"
								style={{
									fontSize: "0.7rem",
									fontStyle: "italic",
									color: "#ff5252",
								}}
								component="div"
							/>
							<Field type="text" name="email" placeholder="Your email"></Field>
							<ErrorMessage
								name="message"
								style={{
									fontSize: "0.7rem",
									fontStyle: "italic",
									color: "#ff5252",
								}}
								component="div"
							/>
							<Field
								type="text"
								placeholder="Your message"
								name="message"
								component="textarea"
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
