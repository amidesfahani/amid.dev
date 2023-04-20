import React, { useState } from "react";
import Project from "./elements/Project";

function Projects() {
	return (
		<>
			<div className="flex flex-col items-start justify-start">
				<h2 className="relative mb-5 flex w-full items-center whitespace-nowrap text-2xl font-bold text-primary-400 after:relative after:ml-4 after:block after:h-px after:w-full after:bg-gray-600">Some Projects I’ve Built</h2>
				<ul className="m-0 list-none p-0">
					<Project className="mb-24" title="Shaparak Gallery" description={"ShaparakGallery, one of the firsts and top cosmetic and perfume retail e-commerce stores in Iran. Warehouse and product inventory management system, discount system, product sales in several models"} tech={["PHP", "MySql", "Laravel", "Nova", "Redis", "Vue", "jQuery"]} link={"https://www.shaparakgallery.com"} image={"shaparakgallery.png"} />
					<Project className="mb-24" title="Amid Esfahani" description={"A minimal, dark portfolio website for myself in multi language."} tech={["PHP", "MySql", "Laravel", "jQuery"]} link={"https://www.amidesfahani.ir"} image={"amidesfahani.png"} />
				</ul>
			</div>
		</>
	);
}

export default Projects;
