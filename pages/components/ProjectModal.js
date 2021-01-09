import React, { useState, useEffect } from "react";
import Icon from "./Icon";
import projectDescriptions from "./content/modalContent";

export default function ProjectModal({ closeModal, id }) {
	const [info, setInfo] = useState({});
	useEffect(() => {
		setInfo(projectDescriptions[id]);
	}, [id]);

	return (
		<div className="projectModal">
			<button onClick={closeModal}>
				<Icon name="x" />
			</button>
			<div className="content">
				<div className="img"></div>
				<div className="info">
					<div className="header">
						<h3>Featured Project</h3>
						<h2>{info.title}</h2>
						{info.links &&
							info.links.map((link, idx) => <div key={idx}>{link.title}</div>)}
					</div>

					{info.descriptions &&
						info.descriptions.map((paragraph, idx) => (
							<p key={idx}>{paragraph}</p>
						))}

					<h5>Features:</h5>
					<ul>
						{info.features &&
							info.features.map((feature, idx) => <li key={idx}>{feature}</li>)}
					</ul>

					<div className="tags">
						{info.tags &&
							info.tags.map((tag, idx) => <div key={idx}>{tag}</div>)}
					</div>
				</div>
			</div>
		</div>
	);
}
