import React from "react";

function UserItem({ user: { login, avatar_url, html_url } }) {
    return (
        <div className="w-1/4 text-center basis p-4 m-10 shadow-lg">
            <img
                src={avatar_url}
                alt=""
                className="rounded-full w-32 mx-auto"
            />
            <h3>{login}</h3>
            <div className="my-2">
                <a
                    href={html_url}
                    className="button px-2 py-1 bg-teal-400  rounded text-white"
                >
                    More
                </a>
            </div>
        </div>
    );
}

export default UserItem;
