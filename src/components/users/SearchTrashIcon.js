import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTrash} from "@fortawesome/free-solid-svg-icons";

export const SearchTrashIcon = (props) => (
    <button
        type="button"
        value="Search"
        className="button button-big px-2 py-1 bg-red-500 text-white rounded-full"
        onClick={() => {
            props.clearUsers();
        }}
    >
        <FontAwesomeIcon icon={faTrash} />
    </button>
)