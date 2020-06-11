import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import {SearchTrashIcon} from "./SearchTrashIcon";
import PropTypes from "prop-types";

export class Search extends Component {
    state = {
        text: "",
        showClearIcon: true,
    };

    static propTypes = {
        searchUsers: PropTypes.func.isRequired,
        clearUsers: PropTypes.func.isRequired,
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
        const {showClearIcon, searchUsers, clearUsers} = this.props
        const {text} = this.state
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
                        className="inline-block w-full outline-none focus:shadow-outline focus:border-blue-300 mx-2 px-2"
                        value={text}
                        onChange={this.onChange}
                    />
                    <button
                        type="submit"
                        value="Search"
                        className="button button-big mr-2 px-2 py-1 bg-blue-300 text-white rounded-full"
                    >
                        <FontAwesomeIcon icon={faSearch} />
                    </button>
                    {showClearIcon && ( <SearchTrashIcon
                            clearUsers={clearUsers}
                        />
                    )}

                </form>
            </div>
        );
    }
}
