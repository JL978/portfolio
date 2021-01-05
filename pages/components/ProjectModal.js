import React from "react";
import Icon from "./Icon";

export default function ProjectModal({ closeModal }) {
	return (
		<div className="projectModal">
			<button onClick={closeModal}>
				<Icon name="x" />
			</button>
		</div>
	);
}
