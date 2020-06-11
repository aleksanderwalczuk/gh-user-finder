import React, {Fragment} from "react";
import "./App.css";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import About from "./components/pages/About";
import Users from "./components/users/Users";
import Alert from "./components/layout/Alert";
import {Search} from "./components/users/Search";
import axios from "axios";

class App extends React.Component {
    state = {
        users: [],
        loading: false,
        alert: null

    };

    async componentDidMount() {
        this.setState({loading: true});
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
        this.setState({loading: true});

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

    clearUsers = () => this.setState({users: [], loading: false});

    setAlert = (message, type) => {
        this.setState({
            alert: {
                message,
                type
            }
        })
        setTimeout(() => {
            this.setState({alert: null})
        }, 2500)
    }

    render() {
        const {users, loading, alert} = this.state;
        return (
            <Router>
                <div className="h-24 flex justify-start content-center bg-blue-300">
                    <Navbar/>
                </div>
                <div className="container mx-auto">
                    <Alert alert={alert}/>
                    <Switch>
                        <Route exact path='/' render={props => (
                            <Fragment>
                                <Search
                                    searchUsers={this.searchUsers}
                                    clearUsers={this.clearUsers}
                                    setAlert={this.setAlert}
                                    showClearIcon={
                                        users.length > 0 ? true : false
                                    }
                                />
                                <Users loading={loading} users={users}/>
                            </Fragment>
                        )}/>
                        <Route exact path='/about' component={About}/>
                    </Switch>

                </div>
            </Router>
        );
    }
}

export default App;
