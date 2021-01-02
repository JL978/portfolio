import { useAnimation } from "framer-motion";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export default function useIntersectAnimation() {
	const control = useAnimation();
	const [ref, inView] = useInView({ threshold: 0.5 });

	useEffect(() => {
		if (inView) {
			control.start("visible");
		}
	}, [inView]);

	return [control, ref];
}
