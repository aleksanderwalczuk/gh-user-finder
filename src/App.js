import React, { Fragment } from "react";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";
import axios from "axios";

class App extends React.Component {
    state = {
        users: [],
        loading: false,
    };

    async componentDidMount() {
        this.setState({ loading: true });
        const res = await axios.get("https://api.github.com/users");

        console.log(res.data);
        this.setState({
            users: res.data,
            loading: !this.state.loading,
        });
    }

    render() {
        return (
            <Fragment>
                <div className="h-24 flex justify-start content-center bg-blue-300">
                    <Navbar />
                </div>
                <div className="container">
                    <Users
                        loading={this.state.loading}
                        users={this.state.users}
                    />
                </div>
            </Fragment>
        );
    }
}

export default App;
