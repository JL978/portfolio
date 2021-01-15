import React, { useState, useEffect } from "react";
import Icon from "./Icon";
import projectDescriptions from "./content/modalContent";
import Image from "next/image";
import useWindowSize from "./hooks/useWindowSize";

export default function ProjectModal({ closeModal, id }) {
	const [info, setInfo] = useState({});
	useEffect(() => {
		setInfo(projectDescriptions[id]);
	}, [id]);

	const { width } = useWindowSize();

	return (
		<div className="projectModal">
			<button onClick={closeModal}>
				<Icon name="x" />
			</button>
			<div className="content">
				{/* {info.img &&
					(width > 1100 ? (
						<Image
							src={info.img.large}
							width={872}
							height={953}
							layout="responsive"
							alt={info.imgAlt}
						/>
					) : (
						<Image
							src={info.img.small}
							width={1280}
							height={720}
							layout="responsive"
							alt={info.imgAlt}
						/>
					))} */}
				{info.demo && (
					<div className="img">
						{width > 1100 ? (
							<video muted autoPlay loop playsInline>
								<source src={info.demo.large.webm} type="video/webm" />
								<source src={info.demo.large.mp4} type="video/mp4" />
							</video>
						) : (
							<video muted autoPlay loop playsInline>
								<source src={info.demo.small.webm} type="video/webm" />
								<source src={info.demo.small.mp4} type="video/mp4" />
							</video>
						)}
					</div>
				)}

				<div className="info">
					<div className="header">
						<h3>Featured Project</h3>
						<h2>
							{info.title}{" "}
							{info.links &&
								info.links.map((link, idx) => (
									<a key={idx} href={link.url} rel="noreferrer" target="_blank">
										<Icon name={link.type} />
									</a>
								))}
						</h2>
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
