import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInUp } from "./utils/animations/framer-defs";
import useIntersectAnimation from "./hooks/useIntersectAnimation";
import ProjectCard from "./ProjectCard";
import Modal from "react-modal";
import ProjectModal from "./ProjectModal";
Modal.setAppElement("#__next");

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
				contentLabel="Example Modal"
				className="modal"
				overlayClassName="modalOverlay"
				closeTimeoutMS={200}
			>
				<ProjectModal
					closeModal={closeModal}
					title="Spotify web player clone"
					descriptions={[
						"My very first full-featured web application. A full clone of the Spotify web music player that I created to teach myself the basics of web application development. The app consumes the official Spotify API",
						"All features were built from scratch using the create-react-app cli for the frontend and Node.js for the backend",
					]}
					features={[
						"Infinite scrolling",
						"Live search",
						"Authentication/Authorization",
						"Music player controls",
					]}
					tags={["React", "axios", "Node.js", "Express", "react-router"]}
				/>
			</Modal>
		</div>
	);
}
