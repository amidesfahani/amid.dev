import React, { useState, useEffect } from "react";
import { Header, Hero, About, Experience, Projects, Services, Contact, Loader } from "./components";
import { IconGitHub, IconInstagram, IconLinkedin, IconTwitter } from "./components/icons";
import "./App.css";

function App() {
	const isHome = location.pathname === "/";
	const [isLoading, setIsLoading] = useState(isHome);

	useEffect(() => {
		if (isLoading) {
			return;
		}

		if (location.hash) {
			const id = location.hash.substring(1); // location.hash without the '#'
			setTimeout(() => {
				const el = document.getElementById(id);
				if (el) {
					el.scrollIntoView();
					el.focus();
				}
			}, 0);
		}
	}, [isLoading]);

	return (
		<div className="min-h-full">
			<div className="flex min-h-screen flex-col">
				<Header />
				{isLoading && isHome ? (
					<Loader finishLoading={() => setIsLoading(false)} />
				) : (
					<div id="content">
						<main className="min-h-screen w-full max-w-screen-2xl py-52 px-40 leading-normal">
							<section id="heroSection" className="mx-auto h-screen min-h-screen max-w-250">
								<Hero />
							</section>

							<section id="aboutSection" className="mx-auto h-screen min-h-screen max-w-250">
								<About />
							</section>

							<section id="experienceSection" className="mx-auto h-screen min-h-screen max-w-250">
								<Experience />
							</section>

							<section id="projectsSection" className="mx-auto min-h-screen max-w-250">
								<Projects />
							</section>

							<section id="servicesSection" className="mx-auto min-h-screen max-w-250">
								<Services />
							</section>

							<section id="contactSection" className="mx-auto mt-40 max-w-250">
								<Contact />
							</section>
						</main>

						<footer className="flex w-full max-w-screen-2xl items-center justify-center p-4 px-40 leading-normal">
							<div className="mt-8">
								<ul className="flex list-none flex-row items-center justify-start space-x-4">
									<li>
										<a href="#" aria-label="GitHub" target="_blank" rel="noreferrer">
											<IconGitHub className="h-5 w-5 stroke-gray-400 transition-all duration-300 hover:stroke-primary-400" />
										</a>
									</li>
									<li>
										<a href="#" aria-label="Instagram" target="_blank" rel="noreferrer">
											<IconInstagram className="h-5 w-5 stroke-gray-400 transition-all duration-300 hover:stroke-primary-400" />
										</a>
									</li>
									<li>
										<a href="#" aria-label="Twitter" target="_blank" rel="noreferrer">
											<IconTwitter className="h-5 w-5 stroke-gray-400 transition-all duration-300 hover:stroke-primary-400" />
										</a>
									</li>
									<li>
										<a href="#" aria-label="Linkedin" target="_blank" rel="noreferrer">
											<IconLinkedin className="h-5 w-5 stroke-gray-400 transition-all duration-300 hover:stroke-primary-400" />
										</a>
									</li>
								</ul>
							</div>
						</footer>
					</div>
				)}
			</div>
		</div>
	);
}

// document.documentElement.style.setProperty('--logo-color', newColor);

export default App;
