import React from "react";
import { Tooltip } from 'react-tooltip'

function Contact() {
	const handleClick = e => {
		e.stopPropagation()
		navigator.clipboard.writeText('amid.esfahani@gmail.com')
		return false
	}

	return (
		<>
			<div className="flex flex-col items-center justify-center">
				<h2 className="relative mb-5 flex w-full items-center justify-center whitespace-nowrap text-5xl font-bold text-gray-200">Get In Touch</h2>
				<div className="mt-4 text-sm text-gray-500 text-center">
					<p className="text-center">I can help with your web development needs and create a great user experience. Let's connect!</p>
				</div>
				<button data-tooltip-id="email-copied" onClick={handleClick} className="cursor-pointer mt-4 rounded border border-primary-400 bg-transparent py-4 px-6 text-primary-400">
					Say Hello
				</button>
				<Tooltip id="email-copied" content="Email Copied!" openOnClick />
			</div>
		</>
	);
}

export default Contact;
