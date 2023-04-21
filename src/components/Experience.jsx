import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

function Experience() {
	const [tabIndex, setTabIndex] = useState(0);

	return (
		<>
			<div className="flex flex-col items-start justify-start">
				<h2 className="relative mb-5 flex w-full items-center whitespace-nowrap text-2xl font-bold text-primary-400 after:relative after:ml-4 after:block after:h-px after:w-full after:bg-gray-600">Where I've Worked</h2>
				<Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)} forceRenderTabPanel={true} selectedTabPanelClassName="Experience__panel--selected">
					<div className="flex flex-col md:flex-row w-full items-start justify-start">
						<TabList className="relative hidden md:flex md:w-1/5 md:flex-col">
							<Tab className="flex h-10 w-full cursor-pointer select-none appearance-none items-center justify-start whitespace-nowrap border-l-[2px] border-gray-600 bg-transparent px-5 pb-px text-left text-gray-400 outline-none transition-all duration-200 hover:bg-gray-600/20">Zaman</Tab>
							<Tab className="flex h-10 w-full cursor-pointer select-none appearance-none items-center justify-start whitespace-nowrap border-l-[2px] border-gray-600 bg-transparent px-5 pb-px text-left text-gray-400 outline-none transition-all duration-200 hover:bg-gray-600/20">Tadbir</Tab>
							<Tab className="flex h-10 w-full cursor-pointer select-none appearance-none items-center justify-start whitespace-nowrap border-l-[2px] border-gray-600 bg-transparent px-5 pb-px text-center text-gray-400 outline-none transition-all duration-200 hover:bg-gray-600/20">Shaparak</Tab>
							<Tab className="flex h-10 w-full cursor-pointer select-none appearance-none items-center justify-start whitespace-nowrap border-l-[2px] border-gray-600 bg-transparent px-5 pb-px text-center text-gray-400 outline-none transition-all duration-200 hover:bg-gray-600/20">iBelit</Tab>
							<Tab className="flex h-10 w-full cursor-pointer select-none appearance-none items-center justify-start whitespace-nowrap border-l-[2px] border-gray-600 bg-transparent px-5 pb-px text-left text-gray-400 outline-none transition-all duration-200 hover:bg-gray-600/20">Artimes Co</Tab>
							<Tab className="flex h-10 w-full cursor-pointer select-none appearance-none items-center justify-start whitespace-nowrap border-l-[2px] border-gray-600 bg-transparent px-5 pb-px text-left text-gray-400 outline-none transition-all duration-200 hover:bg-gray-600/20">Silver Design</Tab>

							<div style={{ transform: "translateY(calc(" + tabIndex + " * var(--tab-height)))", transition: "transform 0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0.1s" }} className="tab-highlight hidden md:block absolute top-0 left-0 z-10 h-10 w-[2px] rounded bg-primary-400"></div>
						</TabList>
						<div className="w-full md:w-4/5 mt-5 md:mt-0 flex flex-col items-start justify-start space-y-10">
							<TabPanel>
								<div className="border-b border-gray-800 pb-5 md:border-b-0 md:pb-0">
									<h3 className="mb-1 text-xl">
										<span className="text-gray-200">Full Stack Developer</span>
										<span className="text-primary-400">
											{" "}
											@ <a href="">Zaman</a>
										</span>
									</h3>
									<p className="text-sm text-gray-500">May 2022 - Present</p>
									<div className="mt-6">
										<ul className="list-none text-sm">
											<li className="mb-3 pl-6">I work as a senior full-stack programmer in Zaman company.</li>
											<li className="mb-3 pl-6">My specialized field of activity in this company is programming on Laravel framework, building API and working with AWS CDK.</li>
											<li className="mb-3 pl-6">
												I work in Zaman company on{" "}
												<a className="text-primary-400 hover:text-primary-600" href="https://pricemycar.com.au/" rel="nofollow">
													PriceMyCar
												</a>{" "}
												and{" "}
												<a className="text-primary-400 hover:text-primary-600" href="https://www.carexpert.com.au/" rel="nofollow">
													CarExpert
												</a>{" "}
												projects.
											</li>
											<li className="mb-3 pl-6">Interfaced with clients on a weekly basis, providing technological expertise</li>
										</ul>
									</div>
								</div>
							</TabPanel>

							<TabPanel>
								<div className="border-b border-gray-800 pb-5 md:border-b-0 md:pb-0">
									<h3 className="mb-1 text-xl">
										<span className="text-gray-200">Python Teacher</span>
										<span className="text-primary-400">
											{" "}
											@ <a href="">Tadbir</a>
										</span>
									</h3>
									<p className="text-sm text-gray-500">Feb 2022 - Present</p>
									<div className="mt-6">
										<ul className="list-none text-sm">
											<li className="mb-3 pl-6">Teaching programming and software development in Python.</li>
										</ul>
									</div>
								</div>
							</TabPanel>

							<TabPanel>
								<div className="border-b border-gray-800 pb-5 md:border-b-0 md:pb-0">
									<h3 className="mb-1 text-xl">
										<span className="text-gray-200">Full-Stack Developer - CTO</span>
										<span className="text-primary-400">
											{" "}
											@ <a href="">Shaparak</a>
										</span>
									</h3>
									<p className="text-sm text-gray-500">Mar 2021 - Present</p>
									<div className="mt-6">
										<ul className="list-none text-sm">
											<li className="mb-3 pl-6">
												<a href="https://www.shaparakgallery.com/" rel="nofollow" className="text-primary-400 hover:text-primary-600">
													ShaparakGallery.com
												</a>
												, one of the firsts and top cosmetic and perfume retail e-commerce stores in Iran.
											</li>
											<li className="mb-3 pl-6">For Shaparak, I implemented an online store platform based on the Laravel framework and MySql database.</li>
											<li className="mb-3 pl-6">Online storage system and automating most parts of the website was one of the most important challenges of the client.</li>
											<li className="mb-3 pl-6">I did personnel management and training, website and server performance and stability monitoring, server management, SEO and website content optimization.</li>
										</ul>
									</div>
								</div>
							</TabPanel>

							<TabPanel>
								<div className="border-b border-gray-800 pb-5 md:border-b-0 md:pb-0">
									<h3 className="mb-1 text-xl">
										<span className="text-gray-200">Founder - Full Stack Developer</span>
										<span className="text-primary-400">
											{" "}
											@ <a href="">iBelit</a>
										</span>
									</h3>
									<p className="text-sm text-gray-500">Mar 2021 - Present</p>
									<div className="mt-6">
										<ul className="list-none text-sm">
											<li className="mb-3 pl-6">
												<a href="https://www.ibelit.com/" className="text-primary-400 hover:text-primary-600">
													iBelit.com
												</a>
												, an Online ticket reservation system in Iran. I developed windows and mobile application for tickets barcode checking. multiple ways to reserve a ticket: online, telegram bot, windows application.
											</li>
										</ul>
									</div>
								</div>
							</TabPanel>

							<TabPanel>
								<div className="border-b border-gray-800 pb-5 md:border-b-0 md:pb-0">
									<h3 className="mb-1 text-xl">
										<span className="text-gray-200">Full Stack Developer - Support</span>
										<span className="text-primary-400">
											{" "}
											@ <a href="">Artimes Sannat Hormozgan</a>
										</span>
									</h3>
									<p className="text-sm text-gray-500">Sep 2012 - Feb 2013</p>
									<div className="mt-6">
										<ul className="list-none text-sm">
											<li className="mb-3 pl-6">In this trading company, I worked on an office automation project. I did all the implementation and programming of this project.</li>
										</ul>
									</div>
								</div>
							</TabPanel>

							<TabPanel>
								<div className="border-b border-gray-800 pb-5 md:border-b-0 md:pb-0">
									<h3 className="mb-1 text-xl">
										<span className="text-gray-200">Web Developer</span>
										<span className="text-primary-400">
											{" "}
											@ <a href="">Silver Design</a>
										</span>
									</h3>
									<p className="text-sm text-gray-500">Feb 2010 - Aug 2011</p>
									<div className="mt-6">
										<ul className="list-none text-sm">
											<li className="mb-3 pl-6">I worked as a designer and programmer in this team of 4 people and worked on several projects related to corporate and personal websites, online store, online concert ticket sales system.</li>
										</ul>
									</div>
								</div>
							</TabPanel>
						</div>
					</div>
				</Tabs>
			</div>
		</>
	);
}

export default Experience;
