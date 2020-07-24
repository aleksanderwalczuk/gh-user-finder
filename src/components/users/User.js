import React, { Component, Fragment } from "react";
import PropTypes from 'prop-types'
import Loader from "react-spinners/CircleLoader";
import { Link } from "react-router-dom";

export default class User extends Component {
    componentDidMount() {
        this.props.getUser(this.props.match.params.login)
        console.log(this.props.getUser(this.props.match.params.login))
    }

    static propTypes = {
        loading: PropTypes.bool,
        user: PropTypes.object.isRequired,
        getUser: PropTypes.func.isRequired,
    }

    render() {
        const {
            nameee,
            avatar,
            url,
            location, bio, blog, login, html_url, followers, following, public_repos, public_gists, hireable
        } = this.props.user
        const { loading } = this.props
        if (loading) {
            return <Loader />
        }
        return (
            <Fragment>
                <Link
                    to='/'
                    className='button px-2 py-1 m-2 bg-teal-400  rounded text-white'
                >
                    Back to Search
                </Link>
                Hireable: {' '}
                {
                    hireable ? (
                        <span>YES!</span>
                    ) : (
                            <span>NO.</span>
                        )
                }
                <div>{name}</div>
                <div className='card center'>
                    <div className=''>
                        <img
                            src={avatar}
                            style={{ width: '150px' }}
                        />
                    </div>
                    <h2>{name}</h2>
                    <p>Location: {location}</p>
                    <div>{bio && <Fragment>
                        <h3>Bio</h3>
                        <p>
                            {bio}
                        </p>
                    </Fragment>}
                    </div>
                    <a
                    href={html_url}
                    className='button px-2 py-1 m-2 bg-teal-400  rounded text-white'
                    >
                        Link to Github
                        </a>

                </div>
            </Fragment>
        )
    }

}