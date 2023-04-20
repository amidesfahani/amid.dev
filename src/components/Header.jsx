import React from "react";
import { Link } from "react-scroll";
import { IconLogo } from "./icons";

function Header() {
	return (
		<header className="fixed top-0 z-10 w-full bg-gray-900/80 px-14 pt-10 pb-4 backdrop-blur-md">
			<div className="flex items-center justify-between">
				<div className="inline-flex items-center justify-start">
					<IconLogo className="logo w-12 fill-primary-600" />
				</div>
				<ul className="flex list-none items-center justify-end space-x-8">
					<li>
						<Link className="cursor-pointer transition-all duration-500 hover:text-primary-400" activeClass="text-yellow-400" to="aboutSection" spy={true} smooth={true} offset={-120} duration={500}>
							About
						</Link>
					</li>
					<li>
						<Link className="cursor-pointer transition-all duration-500 hover:text-primary-400" activeClass="text-yellow-400" to="experienceSection" spy={true} smooth={true} offset={-120} duration={500}>
							Experience
						</Link>
					</li>
					<li>
						<Link className="cursor-pointer transition-all duration-500 hover:text-primary-400" activeClass="text-yellow-400" to="servicesSection" spy={true} smooth={true} offset={-120} duration={500}>
							Services
						</Link>
					</li>
					<li>
						<Link className="cursor-pointer transition-all duration-500 hover:text-primary-400" activeClass="text-yellow-400" to="projectsSection" spy={true} smooth={true} offset={-120} duration={500}>
							Projects
						</Link>
					</li>
					<li>
						<Link className="rounded bg-primary-600 p-4 text-primary-200 transition-all duration-500 hover:bg-primary-500 hover:text-white" to="contactSection" spy={true} smooth={true} offset={-120} duration={500}>
							Contact me
						</Link>
					</li>
				</ul>
			</div>
		</header>
	);
}

export default Header;
