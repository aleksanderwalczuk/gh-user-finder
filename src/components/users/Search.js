import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faTrash } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";

export class Search extends Component {
    state = {
        text: "",
        showClearIcon: true,
    };

    static propTypes = {
        searchUsers: PropTypes.func.isRequired,
        clearusers: PropTypes.func.isRequired,
        showClearIcon: PropTypes.bool.isRequired,
    };

    onSubmit = (e) => {
        e.preventDefault();
        if (this.state.text === "") return;
        this.props.searchUsers(this.state.text);
        this.setState({ text: "" });
    };

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    render() {
        return (
            <div className="container">
                <form
                    onSubmit={this.onSubmit}
                    className="flex w-full px-5 py-6"
                >
                    <input
                        type="text"
                        name="text"
                        autoFocus={true}
                        placeholder="Search Users..."
                        className="inline-block w-full"
                        value={this.state.text}
                        onChange={this.onChange}
                    />
                    <button
                        type="submit"
                        value="Search"
                        className="button button-big mr-2 px-2 py-1 bg-blue-300 text-white rounded-full"
                    >
                        <FontAwesomeIcon icon={faSearch} />
                    </button>
                    <button
                        type="button"
                        value="Search"
                        className="button button-big px-2 py-1 bg-red-500 text-white rounded-full"
                        style={
                            this.props.showClearIcon
                                ? null
                                : { display: "none" }
                        }
                        onClick={() => {
                            this.props.clearUsers();
                        }}
                    >
                        <FontAwesomeIcon icon={faTrash} />
                    </button>
                </form>
            </div>
        );
    }
}