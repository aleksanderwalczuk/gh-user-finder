import React, { Fragment } from "react";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";
import { Search } from "./components/users/Search";
import axios from "axios";

class App extends React.Component {
    state = {
        users: [],
        loading: false,
    };

    async componentDidMount() {
        this.setState({ loading: true });
        const res = await axios.get(`https://api.github.com/users?client_id=
        ${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=
        ${process.env.REACT_APP_GITHUB_SECRET}`);

        this.setState({
            users: res.data,
            loading: !this.state.loading,
        });
    }
    // search gh users
    searchUsers = async (text) => {
        this.setState({ loading: true });

        const url = `https://api.github.com/search/users?q=
        ${text}&client_id=
        ${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=
        ${process.env.REACT_APP_GITHUB_SECRET}`;
        const res = await axios.get(url);

        this.setState({
            users: res.data.items,
            loading: false,
        });
    };

    clearUsers = () => this.setState({ users: [], loading: false });

    render() {
        return (
            <Fragment>
                <div className="h-24 flex justify-start content-center bg-blue-300">
                    <Navbar />
                </div>
                <div className="container">
                    <Search
                        searchUsers={this.searchUsers}
                        clearUsers={this.clearUsers}
                        showClearIcon={
                            this.state.users.length > 0 ? true : false
                        }
                    />
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
