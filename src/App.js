import React, { Fragment } from "react";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";
import Alert from "./components/layout/Alert";
import { Search } from "./components/users/Search";
import axios from "axios";

class App extends React.Component {
    state = {
        users: [],
        loading: false,
        alert: null

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

    setAlert = (message, type) => {
        this.setState({
            alert: {
                message,
                type
            }
        })
    }

    render() {
        const { users, loading, alert } = this.state;
        return (
            <Fragment>
                <div className="h-24 flex justify-start content-center bg-blue-300">
                    <Navbar />
                </div>
                <div className="container mx-auto">
                    <Alert alert={alert}/>
                    <Search
                        searchUsers={this.searchUsers}
                        clearUsers={this.clearUsers}
                        setAlert={this.setAlert}
                        showClearIcon={
                            users.length > 0 ? true : false
                        }
                    />
                    <Users loading={loading} users={users} />
                </div>
            </Fragment>
        );
    }
}

export default App;
