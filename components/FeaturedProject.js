import React, { useState } from "react";
import { motion } from "framer-motion";
import { fadeInUp } from "./utils/animations/framer-defs";
import useIntersectAnimation from "./hooks/useIntersectAnimation";
import ProjectCard from "./ProjectCard";
import Modal from "react-modal";
import ProjectModal from "./ProjectModal";
import cardDescriptions from "./content/cardContent";

Modal.setAppElement("#__next");

export default function FeaturedProject() {
	const [control, ref] = useIntersectAnimation();
	const [modalIsOpen, setModalIsOpen] = useState(false);
	const [id, setId] = useState("spotify");

	function closeModal() {
		setModalIsOpen(false);
	}
	function openModal(id) {
		setId(id);
		setModalIsOpen(true);
	}

	return (
		<div className="project">
			<h2>Featured Projects</h2>
			<motion.div
				className="projectGrid"
				initial="hidden"
				ref={ref}
				animate={control}
				variants={fadeInUp}
			>
				{cardDescriptions.map(({ id, ...props }) => (
						<ProjectCard
							key={id}
							onClick={() => openModal(id)}
							{...props}
						/>
					))}
			</motion.div>
			<Modal
				isOpen={modalIsOpen}
				onRequestClose={closeModal}
				contentLabel="Example Modal"
				className="modal"
				overlayClassName="modalOverlay"
				closeTimeoutMS={200}
			>
				<ProjectModal closeModal={closeModal} id={id} />
			</Modal>
		</div>
	);
}
