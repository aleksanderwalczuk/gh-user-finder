import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Navbar = ({ title }) => {
    return (
        <nav className="container flex justify-between items-center mx-auto">
            <div className="flex flex-auto items-center text-white text-lg ml-10">
                <FontAwesomeIcon icon={faGithub} className="text-4xl" />
                <h1 className="text-4xl px-1 mx-2 capitalize">{title}</h1>
            </div>
            <div >
                <ul className="flex text-white text-md">
                    <li className='mx-2'><Link to={'/'}>Home</Link></li>
                    <li className='mx-2'><Link to={'/about'}>About</Link></li>
                </ul>
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
