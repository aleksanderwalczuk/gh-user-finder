import React, { Component } from "react";

class UserItem extends Component {
    constructor() {
        super();
        this.state = {
            id: "id",
            login: "mojombo",
            avatar_url: "https://avatars0.githubusercontent.com/u/1?v=4",
            html_url: "https://github.com/mojombo",
        };
    }
    render() {
        return (
            <div className="card center text-center max-w-xs p-4 m-10 shadow-lg">
                <img
                    src={this.state.avatar_url}
                    alt=""
                    srcset=""
                    className="rounded-full w-32 mx-auto"
                />
                <h3>{this.state.login}</h3>
                <div className="my-2">
                    <a
                        href={this.state.html_url}
                        className="button px-2 py-1 bg-teal-400  rounded text-white"
                    >
                        More
                    </a>
                </div>
            </div>
        );
    }
}

export default UserItem;
