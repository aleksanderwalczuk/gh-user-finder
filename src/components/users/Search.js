import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export class Search extends Component {
    state = {
        text: "",
    };

    onChange = (e) => {
        this.setState({ text: e.target.value });
    };

    render() {
        return (
            <div className="container">
                <form action="" className="flex w-full px-5 py-6">
                    <input
                        type="text"
                        name="text"
                        placeholder="Search Users..."
                        className="inline-block w-full"
                        value={this.state.text}
                        onChange={this.onChange}
                    />
                    <button
                        type="submit"
                        value="Search"
                        className="button button-big px-2 py-1 bg-blue-300 text-white rounded-full"
                    >
                        <FontAwesomeIcon icon={faSearch} />
                    </button>
                </form>
            </div>
        );
    }
}
