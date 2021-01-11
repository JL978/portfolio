const projectDescriptions = {
	spotify: {
		title: "Spotify web player clone",
		descriptions: [
			"My very first full-featured web application. A full clone of the Spotify web music player that I created to teach myself the basics of web application development",
			"All features were built from scratch using create-react-app for the frontend and Node.js/Express for the backend",
		],
		features: [
			"Infinite scrolling",
			"Live search",
			"Consume the Spotify API",
			"Custom Authentication/Authorization server",
			"Music player controls",
		],
		tags: ["React", "axios", "Node.js", "Express", "react-router"],
		img: {
			large: "/static/img/spotify-lg.gif",
			small: "/static/img/spotify-sm.gif",
		},
		links: [
			{ type: "external", url: "https://clonedspot.netlify.app/" },
			{ type: "github", url: "https://github.com/JL978/spotify-clone-client" },
		],
	},
	ttt: {
		title: "Multiplpayer tic-tac-toe game",
		descriptions: [
			"A multiplayer game that let users play tic-tac-toe games together",
			"The game states is stored on a custom socket.io server that allow for real-time gameplay",
		],
		features: [
			"Room creation",
			"Joining a room",
			"Real-time gameplay",
			"Responsive tic-tac-toe board",
		],
		tags: ["React", "socket.io", "Node.js", "react-router"],
		img: {
			large: "/static/img/ttt-lg.gif",
			small: "/static/img/ttt-sm.gif",
		},
		links: [
			{ type: "external", url: "https://react-ttt-app.netlify.app/" },
			{
				type: "github",
				url: "https://github.com/JL978/multiplayer-react-tic-tac-toe",
			},
		],
	},
	shopify: {
		title: "Shopify URL generator and shortener*",
		descriptions: [
			"A Shopify integrated app that lets the user generate a UTM tracking link for a product. The generated link is then shortened when saved for better user experience",
			"* Work in progress",
		],
		features: [
			"Consumes the Shopify StoreFront API",
			"Utilizes the Shopify Polaris UI component",
			"Autogenerate shortened link",
		],
		tags: ["Next.js", "PostgreSQL", "Formik", "Koa.js"],
		img: {
			large: "/static/img/shopify-lg.gif",
			small: "/static/img/shopify-sm.gif",
		},
		links: [{ type: "github", url: "https://github.com/JL978/utm-app" }],
	},
};

export default projectDescriptions;
