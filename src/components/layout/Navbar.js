import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import PropTypes from "prop-types";

export default class Navbar extends Component {
    static defaultProps = {
        title: "Github Finder",
    };

    static propTypes = {
        title: PropTypes.string.isRequired,
    };

    render() {
        return (
            <nav className="container flex items-center">
                <div className="flex flex-auto items-center text-white text-lg ml-10">
                    <FontAwesomeIcon icon={faGithub} className="text-4xl" />
                    <h1 className="text-4xl px-1 mx-2 capitalize">
                        {this.props.title}
                    </h1>
                </div>
            </nav>
        );
    }
}
