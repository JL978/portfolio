import FeaturedProject from "./components/FeaturedProject";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Contact from "./components/sections/Contact";

export default function Home() {
	return (
		<>
			<section className="page">
				<Hero />
			</section>
			<section className="page" id="about">
				<About />
			</section>

			<section className="page page-tall" id="projects">
				<FeaturedProject
					title="Spotify Web Player Clone"
					descriptions={[
						"My very first full-featured web application. A full clone of the Spotify web music player that I created to teach myself the basics of web application development. The app consumes the official Spotify API",
						"All features were built from scratch using the create-react-app cli for the frontend and Node.js for the backend",
					]}
					features={[
						"Infinite scroll playlists",
						"Authentication and authorization",
						"Music player controls",
						"Live search",
					]}
					tags={["React", "Axios", "Node.js", "Express", "react-router-dom"]}
					img="/static/img/Authed.gif"
				/>
			</section>

			<section className="page" id="contact">
				<Contact />
			</section>
		</>
	);
}
