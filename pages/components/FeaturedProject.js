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
					{links && links.map((link) => <div>{link.title}</div>)}
				</div>

				{descriptions.map((paragraph) => (
					<p>{paragraph}</p>
				))}

				<h5>Features:</h5>
				<ul>
					{features.map((feature) => (
						<li>{feature}</li>
					))}
				</ul>

				<div className="tags">
					{tags.map((tag) => (
						<div>{tag}</div>
					))}
				</div>
			</div>
			<div className="img"></div>
		</div>
	);
}
