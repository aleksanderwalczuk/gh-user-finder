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

    // async componentDidMount() {
    //     this.setState({ loading: true });
    //     const res = await axios.get(`https://api.github.com/users?client_id=
    //     ${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=
    //     ${process.env.REACT_APP_GITHUB_SECRET}`);

    //     this.setState({
    //         users: res.data,
    //         loading: !this.state.loading,
    //     });
    // }
    // search gh users
    searchUsers = async (text) => {
        console.log(text);
        const url = `https://api.github.com/search/users?q=
        ${text}&client_id=
        ${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=
        ${process.env.REACT_APP_GITHUB_SECRET}`;
        const res = await axios.get(url);

        console.log(res.data.items);
        console.log();

        this.setState({
            users: res.data.items,
            loading: false,
        });
    };

    render() {
        return (
            <Fragment>
                <div className="h-24 flex justify-start content-center bg-blue-300">
                    <Navbar />
                </div>
                <div className="container">
                    <Search searchUsers={this.searchUsers} />
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
