import FeaturedProject from "../components/FeaturedProject";
import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Contact from "../components/sections/Contact";
import Head from "next/head";

export default function Home() {
	return (
		<>
			<Head>
				<title>Jimmy Lam</title>
				<meta
					name="viewport"
					content="user-scalable=no, initial-scale=1.0, width=device-width, minimum-scale=1, maximum-scale=1"
				/>
				<meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
				<meta
					name="description"
					content="Jimmy Lam is a materials engineer turns self-taught full-stack web developer with emphasis on the front-end stack"
				/>

				<meta name="apple-mobile-web-app-capable" content="yes" />
			</Head>
			<section className="page">
				<Hero />
			</section>
			<section className="page" id="about">
				<About />
			</section>

			<section className="page page-tall" id="projects">
				<FeaturedProject />
			</section>

			<section className="page" id="contact">
				<Contact />
			</section>
		</>
	);
}
