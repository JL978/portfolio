import React from "react";
import NavBar from "./NavBar";
import Socials from "./Socials";

export default function PageWrapper({ children }) {
	return (
		<>
			<NavBar />
			{children}
			<Socials />
		</>
	);
}
