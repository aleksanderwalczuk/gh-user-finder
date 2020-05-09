import React from "react";
import CircleLoader from "react-spinners/CircleLoader";

function Loader() {
    return (
        <div className="flex items-center justify-center min-h-full">
            <CircleLoader />
        </div>
    );
}

export default Loader;
