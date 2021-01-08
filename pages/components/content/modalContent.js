export const projectDescriptions = [
	{
		id: "spotify",
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
	},
	{
		id: "ttt",
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
	},
	{
		id: "shopify",
		title: "Shopify URL generator and shortener",
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
	},
];
