import React, { useState, useEffect } from "react";
import { Helmet, HelmetProvider } from 'react-helmet-async';
import PropTypes from "prop-types";
import anime from "animejs";
import { IconLoader } from "./icons";

const Loader = ({ finishLoading }) => {
	const [isMounted, setIsMounted] = useState(false);

	const animate = () => {
		const loader = anime.timeline({
			complete: () => finishLoading(),
		});

		loader
			.add({
				targets: "#logo path",
				delay: 300,
				duration: 1500,
				easing: "easeInOutQuart",
				strokeDashoffset: [anime.setDashoffset, 0],
			})
			// .add({
			// 	targets: "#logo #A",
			// 	duration: 700,
			// 	easing: "easeInOutQuart",
			// 	opacity: 1,
			// })
			// .add({
			// 	targets: "#logo #B",
			// 	duration: 700,
			// 	easing: "easeInOutQuart",
			// 	opacity: 1,
			// })
			// .add({
			// 	targets: "#logo #C",
			// 	duration: 700,
			// 	easing: "easeInOutQuart",
			// 	opacity: 1,
			// })
			.add({
				targets: "#logo",
				delay: 500,
				duration: 300,
				easing: "easeInOutQuart",
				opacity: 0,
				scale: 0.1,
			})
			.add({
				targets: ".loader",
				duration: 200,
				easing: "easeInOutQuart",
				opacity: 0,
				zIndex: -1,
			});
	};

	useEffect(() => {
		const timeout = setTimeout(() => setIsMounted(true), 10);
		animate();
		return () => clearTimeout(timeout);
	}, []);

	return (
		<HelmetProvider>
			<div className="loader fixed z-[99] flex h-full w-full items-center justify-center bg-primary-900" ismounted={isMounted.toString()}>
				<Helmet bodyAttributes={{ class: `overflow-hidden` }} />
				<div className="logo-wrapper opacity-1 w-max max-w-[150px] transition-all">
					<IconLoader className="my-0 mx-auto block h-full w-full text-primary-200" />
				</div>
			</div>
		</HelmetProvider>
	);
};

Loader.propTypes = {
	finishLoading: PropTypes.func.isRequired,
};

export default Loader;
