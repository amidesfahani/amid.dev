import React from "react";

const IconLogo = ({ className, ...props }) => (
	// <svg fill="current" aria-hidden="true" role="img" data-name="app-logo" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 443.87 384.69">
	// 	<title>Logo</title>
	// 	<path d="M221.1,0l150.77,261.12h-94.57c-5.33,0-10.26-2.83-12.95-7.43L173.44,98.12c-2.71-4.64-2.74-10.37-.06-15.03,9.84-17.14,34.12-59.4,47.72-83.09Z"/>
	// 	<path d="M0,384.54L151.76,123.99l46.97,82.08c2.65,4.63,2.64,10.31-.02,14.93l-89.87,156.17c-2.68,4.66-7.64,7.53-13.02,7.52-19.76-.03-68.5-.11-95.82-.15Z"/>
	// 	<path d="M443.87,383.61l-301.53-.09,47.31-81.88c2.67-4.62,7.58-7.47,12.91-7.5l180.19-.89c5.38-.03,10.35,2.82,13.05,7.47,9.91,17.1,34.37,59.26,48.07,82.89Z"/>
	// </svg>
	<svg {...props} className={className} xmlns="http://www.w3.org/2000/svg" fill="current" aria-hidden="true" data-name="app-logo" viewBox="0 0 443.87 384.69">
		<path d="m221.1 0 150.77 261.12H277.3c-5.33 0-10.26-2.83-12.95-7.43L173.44 98.12a14.981 14.981 0 0 1-.06-15.03C183.22 65.95 207.5 23.69 221.1 0ZM0 384.54l151.76-260.55 46.97 82.08a14.988 14.988 0 0 1-.02 14.93l-89.87 156.17a14.981 14.981 0 0 1-13.02 7.52c-19.76-.03-68.5-.11-95.82-.15ZM443.87 383.61l-301.53-.09 47.31-81.88c2.67-4.62 7.58-7.47 12.91-7.5l180.19-.89c5.38-.03 10.35 2.82 13.05 7.47 9.91 17.1 34.37 59.26 48.07 82.89Z"/>
	</svg>
);

export default IconLogo;