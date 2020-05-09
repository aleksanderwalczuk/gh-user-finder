import React, { Fragment } from "react";
import "./App.css";
import Navbar from "./components/layout/Navbar";

class App extends React.Component {
    render() {
        const name = "John Doe";
        return (
            <div className="h-24 flex justify-start content-center bg-blue-300">
                <Navbar />
            </div>
        );
    }
}

export default App;
