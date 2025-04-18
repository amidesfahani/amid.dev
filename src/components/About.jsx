import React from "react";

function About() {
	return (
		<>
			<div className="flex flex-col items-start justify-between lg:flex-row">
				<div className="flex w-full lg:w-auto flex-col items-start justify-start">
					<h2 className="relative mb-5 flex w-full items-center whitespace-nowrap text-2xl font-bold text-primary-400 after:relative after:ml-4 after:block after:h-px after:w-full after:bg-gray-600 lg:after:w-80">About me</h2>
					<p className="mt-4 w-full text-base md:text-lg lg:max-w-lg">Hello! My name is Amid and I am Software Developer. My interest in web development started back in 2006 when I decided to try editing html pages — turns out hacking a html page taught me a lot about HTML & CSS!</p>
					<p className="mt-4 w-full text-base md:text-lg lg:max-w-lg">I also teach programming these days. Especially for those interested in Python.</p>
					<div className="mt-5">
						<h3 className="md:text-lg">Technologies I’ve been working with:</h3>
						<ul className="mt-8 grid list-none grid-cols-3 gap-5 text-xs md:grid-cols-4 md:text-base lg:mt-5 lg:grid-cols-3 lg:text-sm">
							<li className="relative pl-5 before:absolute before:left-0 before:text-primary-400 before:content-['▹']">PHP</li>
							<li className="relative pl-5 before:absolute before:left-0 before:text-primary-400 before:content-['▹']">Python</li>
							<li className="relative pl-5 before:absolute before:left-0 before:text-primary-400 before:content-['▹']">.Net</li>
							<li className="relative pl-5 before:absolute before:left-0 before:text-primary-400 before:content-['▹']">JavaScript</li>
							<li className="relative pl-5 before:absolute before:left-0 before:text-primary-400 before:content-['▹']">jQuery</li>
							<li className="relative pl-5 before:absolute before:left-0 before:text-primary-400 before:content-['▹']">Vue</li>
							<li className="relative pl-5 before:absolute before:left-0 before:text-primary-400 before:content-['▹']">React</li>
							<li className="relative pl-5 before:absolute before:left-0 before:text-primary-400 before:content-['▹']">Node.js</li>
							<li className="relative pl-5 before:absolute before:left-0 before:text-primary-400 before:content-['▹']">Express.js</li>
							<li className="relative pl-5 before:absolute before:left-0 before:text-primary-400 before:content-['▹']">Nuxt.js</li>
							<li className="relative pl-5 before:absolute before:left-0 before:text-primary-400 before:content-['▹']">Nust.js</li>
							<li className="relative pl-5 before:absolute before:left-0 before:text-primary-400 before:content-['▹']">Laravel</li>
							<li className="relative pl-5 before:absolute before:left-0 before:text-primary-400 before:content-['▹']">Laravel Nova</li>
							<li className="relative pl-5 before:absolute before:left-0 before:text-primary-400 before:content-['▹']">Laravel Filmanet</li>
							<li className="relative pl-5 before:absolute before:left-0 before:text-primary-400 before:content-['▹']">CSS/Sass</li>
							<li className="relative pl-5 before:absolute before:left-0 before:text-primary-400 before:content-['▹']">Tailwind</li>
							<li className="relative pl-5 before:absolute before:left-0 before:text-primary-400 before:content-['▹']">Livewire</li>
							<li className="relative pl-5 before:absolute before:left-0 before:text-primary-400 before:content-['▹']">Bootstrap</li>
							<li className="relative pl-5 before:absolute before:left-0 before:text-primary-400 before:content-['▹']">Wordpress</li>
							<li className="relative pl-5 before:absolute before:left-0 before:text-primary-400 before:content-['▹']">Redis</li>
							<li className="relative pl-5 before:absolute before:left-0 before:text-primary-400 before:content-['▹']">RabbitMQ</li>
							<li className="relative pl-5 before:absolute before:left-0 before:text-primary-400 before:content-['▹']">Elastic Search</li>
							<li className="relative pl-5 before:absolute before:left-0 before:text-primary-400 before:content-['▹']">Rest API</li>
							<li className="relative pl-5 before:absolute before:left-0 before:text-primary-400 before:content-['▹']">Git</li>
							<li className="relative pl-5 before:absolute before:left-0 before:text-primary-400 before:content-['▹']">AWS CDK</li>
							<li className="relative pl-5 before:absolute before:left-0 before:text-primary-400 before:content-['▹']">Docker</li>
						</ul>
					</div>
				</div>
				<div className="relative mx-auto mt-12 max-w-xs lg:m-0">
					<div
						className="relative w-full rounded
					bg-primary-400 before:absolute before:top-0 before:left-0 before:h-full before:w-full
					after:absolute after:left-5 after:top-5 after:z-[-1] after:h-full after:w-full after:rounded after:border-4 after:border-primary-400
					after:transition-all after:duration-200
					hover:after:left-2 hover:after:top-2
					"
					>
						<div className="relative overflow-hidden rounded mix-blend-multiply hover:mix-blend-normal">
							<div className="max-w-xs">
								<img className="static max-w-full" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg height='500' width='500' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E" />
							</div>
							<div className="absolute inset-0 bg-primary-400 object-cover"></div>
							<picture>
								<img className="absolute left-0 top-0 right-0 bottom-0 h-full w-full object-cover" decoding="async" src="static/amid.webp" alt="Amid Esfahani" />
							</picture>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default About;
