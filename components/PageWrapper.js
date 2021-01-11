import React from "react";
import NavBar from "./NavBar";
import ScrollDecoration from "./visual-elements/ScrollDecoration";
import Socials from "./visual-elements/Socials";
import WaterMark from "./visual-elements/WaterMark";

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
