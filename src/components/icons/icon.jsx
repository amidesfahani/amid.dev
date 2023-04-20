import React from "react";
import PropTypes from "prop-types";
import { IconLoader ,IconLogo, IconGitHub, IconInstagram, IconLinkedin, IconTwitter } from "./";

const Icon = ({ name }) => {
	switch (name) {
		case "Loader":
			return <IconLoader />;
		case "Logo":
			return <IconLogo />;
		case "GitHub":
			return <IconGitHub />;
		case "Instagram":
			return <IconInstagram />;
		case "Linkedin":
			return <IconLinkedin />;
		case "Twitter":
			return <IconTwitter />;
	}
};

Icon.propTypes = {
	name: PropTypes.string.isRequired,
};

export default Icon;
