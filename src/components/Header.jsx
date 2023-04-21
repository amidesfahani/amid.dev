import React, { useState, useRef } from "react";
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Link } from "react-scroll";
import { IconLogo } from "./icons";
import { useOnClickOutside } from './../hooks'

function Header() {
	const [menuOpen, setMenuOpen] = useState(false);
	const toggleMenu = () => setMenuOpen(!menuOpen);

	const wrapperRef = useRef();
	useOnClickOutside(wrapperRef, () => setMenuOpen(false));

	return (
		<HelmetProvider>
			<Helmet>
				<body className={menuOpen ? 'blurry overflow-hidden h-full' : 'overflow-x-hidden h-full'} />
			</Helmet>
			<header className="fixed top-0 z-10 w-full bg-gray-900/80 px-8 pt-8 md:px-14 md:pt-10 pb-4 backdrop-blur-md">
				<div className="relative flex items-center justify-between">
					<div className="inline-flex items-center justify-start">
						<IconLogo className="logo w-12 fill-primary-600" />
					</div>
					<button onClick={toggleMenu} className="relative z-10 p-4 -mr-4 outline-none border-none flex justify-center items-center">
						{
							menuOpen ?
							<svg className="text-primary-400 w-10 h-10" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
								<path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round"></path>
							</svg>
							: <svg className="text-primary-400 w-10 h-10" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
								<path d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" strokeLinecap="round" strokeLinejoin="round"></path>
							</svg>
						}
					</button>
					<ul aria-hidden={!menuOpen} className={"flex-col space-y-14 justify-center fixed top-0 bottom-0 right-0 py-12 px-3 w-80 h-screen z-[9] bg-gray-800 shadow shadow-gray-900 list-none items-center md:justify-end md:space-x-8 " + (menuOpen ? 'flex' : 'hidden')}>
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
						<li className="pt-5">
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
