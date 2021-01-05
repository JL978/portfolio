import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInUp } from "./utils/animations/framer-defs";
import useIntersectAnimation from "./hooks/useIntersectAnimation";
import ProjectCard from "./ProjectCard";
import Modal from "react-modal";
Modal.setAppElement("#__next");

const modalStyle = {
	content: {
		position: "absolute",
		top: "40px",
		left: "40px",
		right: "40px",
		bottom: "40px",
		border: "1px solid #ccc",
		background: "#fff",
		overflow: "auto",
		WebkitOverflowScrolling: "touch",
		borderRadius: "4px",
		outline: "none",
		padding: "20px",
		zIndex: "1000",
	},
	overlay: {
		zIndex: "1000",
	},
};

export default function FeaturedProject({
	title,
	links,
	descriptions,
	tags,
	features,
	img,
}) {
	// const [control, ref] = useIntersectAnimation();
	const [modalIsOpen, setModalIsOpen] = useState(false);

	function closeModal() {
		setModalIsOpen(false);
	}
	function openModal() {
		setModalIsOpen(true);
	}

	return (
		<div className="project">
			{/* <motion.div
				className="info"
				initial="hidden"
				animate={control}
				variants={fadeInUp}
			> */}

			<h2>Featured Projects</h2>
			<div className="projectGrid">
				{[0, 1, 2].map((i) => (
					<ProjectCard
						key={i}
						title="Spotify web player clone"
						description="A full-featured clone of the Spotify music Web Player that consumes the official Spotify API"
						icons={["react", "node", "spotify"]}
						openModal={openModal}
					/>
				))}
			</div>
			<Modal
				isOpen={modalIsOpen}
				onRequestClose={closeModal}
				// style={modalStyle}
				contentLabel="Example Modal"
				className="modal"
				overlayClassName="modalOverlay"
			></Modal>
			{/* <div className="header">
					<h2>{title}</h2>
					{links && links.map((link, idx) => <div key={idx}>{link.title}</div>)}
				</div>

				{descriptions.map((paragraph, idx) => (
					<p key={idx}>{paragraph}</p>
				))}

				<h5>Features:</h5>
				<ul>
					{features.map((feature, idx) => (
						<li key={idx}>{feature}</li>
					))}
				</ul>

				<div className="tags">
					{tags.map((tag, idx) => (
						<div key={idx}>{tag}</div>
					))}
				</div>
			</motion.div>
			<motion.div
				className="img"
				initial="hidden"
				animate={control}
				variants={fadeInUp}
			>
				<Image
					src={img}
					width={644}
					height={429}
					layout="fixed"
					quality={100}
				/>
			</motion.div> */}
		</div>
	);
}
