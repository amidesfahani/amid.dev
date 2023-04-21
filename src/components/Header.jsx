import React, { useState, useRef } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Link } from "react-scroll";
import { IconLogo } from "./icons";
import { useOnClickOutside } from "./../hooks";

function Header() {
	const [menuOpen, setMenuOpen] = useState(false);
	const toggleMenu = () => setMenuOpen(!menuOpen);

	const wrapperRef = useRef();
	useOnClickOutside(wrapperRef, () => setMenuOpen(false));

	return (
		<HelmetProvider>
			<Helmet>
				<body className={menuOpen ? "blurry h-full overflow-hidden" : "h-full overflow-x-hidden"} />
			</Helmet>
			<header className="fixed top-0 z-10 w-full bg-gray-900/80 px-8 pt-8 pb-4 backdrop-blur-md md:px-14 md:pt-10">
				<div className="relative flex items-center justify-between">
					<div className="inline-flex items-center justify-start">
						<IconLogo className="logo w-12 fill-primary-600" />
					</div>
					<button onClick={toggleMenu} className="relative z-10 -mr-4 flex items-center justify-center border-none p-4 outline-none lg:hidden">
						{menuOpen ? (
							<svg className="h-10 w-10 text-primary-400" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
								<path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round"></path>
							</svg>
						) : (
							<svg className="h-10 w-10 text-primary-400" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
								<path d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" strokeLinecap="round" strokeLinejoin="round"></path>
							</svg>
						)}
					</button>
					<ul aria-hidden={!menuOpen} className={"fixed top-0 bottom-0 right-0 z-[9] h-screen w-80 list-none flex-col items-center justify-center space-y-14 bg-gray-800 py-12 px-3 shadow shadow-gray-900 lg:relative lg:top-auto lg:bottom-auto lg:right-auto lg:h-auto lg:w-auto lg:flex-row lg:justify-end lg:space-y-0 lg:space-x-8 lg:bg-transparent lg:p-0 lg:shadow-none " + (menuOpen ? "flex" : "hidden lg:flex")}>
						<li>
							<Link href="/#about" onClick={() => setMenuOpen(false)} className="cursor-pointer transition-all duration-500 hover:text-primary-400" activeClass="text-yellow-400" to="aboutSection" spy={true} smooth={true} offset={-120} duration={500}>
								About
							</Link>
						</li>
						<li>
							<Link href="/#experience" onClick={() => setMenuOpen(false)} className="cursor-pointer transition-all duration-500 hover:text-primary-400" activeClass="text-yellow-400" to="experienceSection" spy={true} smooth={true} offset={-120} duration={500}>
								Experience
							</Link>
						</li>
						<li>
							<Link href="/#services" onClick={() => setMenuOpen(false)} className="cursor-pointer transition-all duration-500 hover:text-primary-400" activeClass="text-yellow-400" to="servicesSection" spy={true} smooth={true} offset={-120} duration={500}>
								Services
							</Link>
						</li>
						<li>
							<Link href="/#projects" onClick={() => setMenuOpen(false)} className="cursor-pointer transition-all duration-500 hover:text-primary-400" activeClass="text-yellow-400" to="projectsSection" spy={true} smooth={true} offset={-120} duration={500}>
								Projects
							</Link>
						</li>
						<li className="pt-5 lg:p-0">
							<Link href="/#contact" onClick={() => setMenuOpen(false)} className="cursor-pointer rounded bg-primary-600 p-4 text-primary-200 transition-all duration-500 hover:bg-primary-500 hover:text-white" to="contactSection" spy={true} smooth={true} offset={-120} duration={500}>
								Contact me
							</Link>
						</li>
					</ul>
				</div>
			</header>
		</HelmetProvider>
	);
}

export default Header;
