import React from "react";

export default function FeaturedProject({
	title,
	links,
	descriptions,
	tags,
	features,
	image,
}) {
	return (
		<div className="project">
			<div className="info">
				<h3>Featured Project</h3>
				<div className="header">
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
			</div>
			<div className="img"></div>
		</div>
	);
}
