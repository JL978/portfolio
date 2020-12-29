import React from "react";
import NavBar from "./NavBar";
import ScrollDecoration from "./ScrollDecoration";
import Socials from "./Socials";
import WaterMark from "./WaterMark";

export default function PageWrapper({ children }) {
	return (
		<>
			<NavBar />
			{children}
			<Socials />
			<ScrollDecoration />
			<WaterMark />
		</>
	);
}
