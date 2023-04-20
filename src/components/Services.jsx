import React from "react";

function Services() {
	return (
		<>
			<div className="flex flex-col items-start justify-start">
				<h2 className="relative mb-5 flex w-full items-center whitespace-nowrap text-2xl font-bold text-primary-400 after:relative after:ml-4 after:block after:h-px after:w-full after:bg-gray-600">My Services</h2>
				<ul className="relative mt-4 grid list-none grid-cols-3 gap-4 p-0">
					<li className="relative">
						<div className="relative flex h-full items-start justify-between overflow-auto rounded bg-gray-800 px-8 py-7 shadow shadow-primary-700">
							<header>
								<h3 className="mb-4 text-lg font-bold text-gray-200">Web Development</h3>
								<div className="text-sm text-gray-400">
									<p>Web development services create web-based software for great user experience. I design, redesign and support web apps for high conversion and adoption rates.</p>
								</div>
							</header>
							<footer></footer>
						</div>
					</li>
					<li className="relative">
						<div className="relative flex h-full items-start justify-between overflow-auto rounded bg-gray-800 px-8 py-7 shadow shadow-primary-700">
							<header>
								<h3 className="mb-4 text-lg font-bold text-gray-200">Laravel Development</h3>
								<div className="text-sm text-gray-400">
									<p>Laravel is a web application framework with expressive, elegant syntax. We’ve already laid the foundation — freeing you to create without sweating the small things.</p>
								</div>
							</header>
							<footer></footer>
						</div>
					</li>
					<li className="relative">
						<div className="relative flex h-full items-start justify-between overflow-auto rounded bg-gray-800 px-8 py-7 shadow shadow-primary-700">
							<header>
								<h3 className="mb-4 text-lg font-bold text-gray-200">.NET Application Development</h3>
								<div className="text-sm text-gray-400">
									<p>.NET software development services cover engineering and evolution of web, mobile, and desktop applications with the use of .NET platform.</p>
								</div>
							</header>
							<footer></footer>
						</div>
					</li>
					<li className="relative">
						<div className="relative flex h-full items-start justify-between overflow-auto rounded bg-gray-800 px-8 py-7 shadow shadow-primary-700">
							<header>
								<h3 className="mb-4 text-lg font-bold text-gray-200">PHP Development and Consulting</h3>
								<div className="text-sm text-gray-400">
									<p>I help you select the technology mix for a planned PHP project or provide expert recommendations on how to solve the tech challenges of an ongoing project.</p>
								</div>
							</header>
							<footer></footer>
						</div>
					</li>
					<li className="relative">
						<div className="relative flex h-full items-start justify-between overflow-auto rounded bg-gray-800 px-8 py-7 shadow shadow-primary-700">
							<header>
								<h3 className="mb-4 text-lg font-bold text-gray-200">SEO Service</h3>
								<div className="text-sm text-gray-400">
									<p>SEO services are search engine optimization services intended to increase visibility and ultimately organic search traffic to websites.</p>
								</div>
							</header>
							<footer></footer>
						</div>
					</li>
					<li className="relative">
						<div className="relative flex h-full items-start justify-between overflow-auto rounded bg-gray-800 px-8 py-7 shadow shadow-primary-700">
							<header>
								<h3 className="mb-4 text-lg font-bold text-gray-200">Social Media Management</h3>
								<div className="text-sm text-gray-400">
									<p>Social media management: analyzing audiences, creating content, monitoring conversations, collaborating with influencers, providing community service, and measuring performance.</p>
								</div>
							</header>
							<footer></footer>
						</div>
					</li>
				</ul>
			</div>
		</>
	);
}

export default Services;
