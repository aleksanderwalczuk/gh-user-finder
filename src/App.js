import React, { Fragment } from "react";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import UserItem from "./components/users/UserItem";

class App extends React.Component {
    render() {
        return (
            <Fragment>
                <div className="h-24 flex justify-start content-center bg-blue-300">
                    <Navbar />
                </div>
                <UserItem />
            </Fragment>
        );
    }
}

export default App;
