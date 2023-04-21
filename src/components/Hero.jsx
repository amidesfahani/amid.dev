import React from "react";
import { IconGitHub, IconInstagram, IconLinkedin, IconTwitter } from "./icons";

function Hero() {
	return (
		<>
			<div className="mb-6 text-primary-400">Hi, my name is</div>
			<h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-primary-100">Amid Esfahani</h1>
			<h2 className="mt-3 text-3xl md:text-5xl lg:text-6xl font-bold text-primary-300">Senior Full Stack Developer</h2>
			<p className="mt-6 text-sm md:text-base lg:text-lg">I’m a software engineer specializing in building (and occasionally designing) exceptional digital experiences.</p>
			<div className="mt-8">
				<ul className="flex w-full list-none flex-row items-center justify-start space-x-4">
					<li>
						<a href="https://github.com/amidesfahani/" aria-label="GitHub" target="_blank" rel="noreferrer">
							<IconGitHub className="h-5 w-5 stroke-gray-400 transition-all duration-300 hover:stroke-primary-400" />
						</a>
					</li>
					<li>
						<a href="https://www.instagram.com/amidesfahani/" aria-label="Instagram" target="_blank" rel="noreferrer">
							<IconInstagram className="h-5 w-5 stroke-gray-400 transition-all duration-300 hover:stroke-primary-400" />
						</a>
					</li>
					<li>
						<a href="https://www.twitter.com/amidesfahani" aria-label="Twitter" target="_blank" rel="noreferrer">
							<IconTwitter className="h-5 w-5 stroke-gray-400 transition-all duration-300 hover:stroke-primary-400" />
						</a>
					</li>
					<li>
						<a href="https://www.linkedin.com/in/amidesfahani/" aria-label="Linkedin" target="_blank" rel="noreferrer">
							<IconLinkedin className="h-5 w-5 stroke-gray-400 transition-all duration-300 hover:stroke-primary-400" />
						</a>
					</li>
				</ul>
			</div>
		</>
	);
}

export default Hero;
