import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

function UserItem({ user: { login, avatar_url } }) {
    return (
        <div className="w-1/4 text-center basis p-4 m-10 shadow-lg">
            <img
                src={avatar_url}
                alt=""
                className="rounded-full w-32 mx-auto"
            />
            <h3>{login}</h3>
            <div className="my-2">
                <Link
                    to={`/user/${login}`}
                    target="blank"
                    className="button px-2 py-1 bg-teal-400  rounded text-white"
                >
                    More
                </Link>
            </div>
        </div>
    );
}

UserItem.propTypes = {
    user: PropTypes.object.isRequired,
};

export default UserItem;
