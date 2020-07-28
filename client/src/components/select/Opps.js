import React from "react";
import {Link, Router} from '@reach/router';

const Opps = (props) => {


    return (
        <div>
            <h1>Create a Profile</h1>
            <Link to="/users/create">Users</Link>
            <Link to="/business/create">Business</Link>
            <Link to="/login">Login</Link>
        </div>
    )
}

export default Opps;