import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import PropTypes from "prop-types";

const Navbar = ({ title }) => {
    return (
        <nav className="container flex items-center">
            <div className="flex flex-auto items-center text-white text-lg ml-10">
                <FontAwesomeIcon icon={faGithub} className="text-4xl" />
                <h1 className="text-4xl px-1 mx-2 capitalize">{title}</h1>
            </div>
        </nav>
    );
};

Navbar.defaultProps = {
    title: "Github Finder",
};

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
};

export default Navbar;
