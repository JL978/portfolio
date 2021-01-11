const fadeInRight = {
	hidden: { opacity: 0, x: -40 },
	visible: { opacity: 1, x: 0 },
};
const fadeInLeft = {
	hidden: { opacity: 0, x: 40 },
	visible: { opacity: 1, x: 0 },
};

const childrenStaggerDelay = {
	hidden: { scale: 1 },
	visible: {
		scale: 1,
		transition: {
			delayChildren: 0.3,
			staggerChildren: 0.2,
		},
	},
};

const fadeInUp = {
	hidden: { y: 20, opacity: 0 },
	visible: { y: 0, opacity: 1 },
};

const fadeInDown = {
	hidden: { y: -20, opacity: 0 },
	visible: { y: 0, opacity: 1 },
};

const fadeIn = {
	hidden: { opacity: 0 },
	visible: { opacity: 1 },
};

const childrenStagger = {
	hidden: { opacity: 1 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.1,
		},
	},
};

export {
	fadeInUp,
	fadeInRight,
	childrenStaggerDelay,
	childrenStagger,
	fadeIn,
	fadeInDown,
	fadeInLeft,
};
