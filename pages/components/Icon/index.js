import React from "react";
import Email from "./Email";
import LinkedIn1 from "./LinkedIn1";
import LinkedIn2 from "./LinkedIn2";
import Github from "./Github";

export default function Icon({ name }) {
	switch (name) {
		case "email":
			return <Email />;
		case "LinkedIn2":
			return <LinkedIn2 />;
		case "LinkedIn1":
			return <LinkedIn1 />;
		case "github":
			return <Github />;
		default:
			return null;
	}
}
