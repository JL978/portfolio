import React from "react";
import Icon from "./Icon";

export default function ProjectModal({
	closeModal,
	links,
	descriptions,
	features,
	tags,
	title,
}) {
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
						<h2>{title}</h2>
						{links &&
							links.map((link, idx) => <div key={idx}>{link.title}</div>)}
					</div>

					{descriptions &&
						descriptions.map((paragraph, idx) => <p key={idx}>{paragraph}</p>)}

					<h5>Features:</h5>
					<ul>
						{features &&
							features.map((feature, idx) => <li key={idx}>{feature}</li>)}
					</ul>

					<div className="tags">
						{tags && tags.map((tag, idx) => <div key={idx}>{tag}</div>)}
					</div>
				</div>
			</div>
		</div>
	);
}
