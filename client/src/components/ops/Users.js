import React from 'react';
import DashHead from '../select/DashHead';
import {Link} from '@reach/router';
import './ops.css';

const Users = (props) => {

    return (
        <div className="theTable">
            <DashHead/>
            <h1>Users</h1>
            <table className="ops">
                <tr>
                    <th>User</th>
                    <th>Skills</th>
                    <th>Readiness</th>
                </tr>
                <tr>
                    <td><Link to="/users/1">Alfreds Futterkiste</Link></td>
                    <td>React, Javascript, Html, css, Python, Node.js, AWS</td>
                    <td>Ready</td>
                </tr>
                <tr>
                    <td><Link to="/users/1">Alfreds Futterkiste</Link></td>
                    <td>React, Javascript, Html, css, Python, Node.js, AWS</td>
                    <td>Ready</td>
                </tr>
                <tr>
                    <td><Link to="/users/1">Alfreds Futterkiste</Link></td>
                    <td>React, Javascript, Html, css, Python, Node.js, AWS</td>
                    <td>Ready</td>
                </tr>
                <tr>
                    <td><Link to="/users/1">Alfreds Futterkiste</Link></td>
                    <td>React, Javascript, Html, css, Python, Node.js, AWS</td>
                    <td>Ready</td>
                </tr>
                <tr>
                    <td><Link to="/users/1">Alfreds Futterkiste</Link></td>
                    <td>React, Javascript, Html, css, Python, Node.js, AWS</td>
                    <td>Ready</td>
                </tr>
                <tr>
                    <td><Link to="/users/1">Alfreds Futterkiste</Link></td>
                    <td>React, Javascript, Html, css, Python, Node.js, AWS</td>
                    <td>Ready</td>
                </tr>
                <tr>
                    <td><Link to="/users/1">Alfreds Futterkiste</Link></td>
                    <td>React, Javascript, Html, css, Python, Node.js, AWS</td>
                    <td>Ready</td>
                </tr>
                <tr>
                    <td><Link to="/users/1">Alfreds Futterkiste</Link></td>
                    <td>React, Javascript, Html, css, Python, Node.js, AWS</td>
                    <td>Ready</td>
                </tr>
                <tr>
                    <td><Link to="/users/1">Alfreds Futterkiste</Link></td>
                    <td>React, Javascript, Html, css, Python, Node.js, AWS</td>
                    <td>Ready</td>
                </tr>
                <tr>
                    <td><Link to="/users/1">Alfreds Futterkiste</Link></td>
                    <td>React, Javascript, Html, css, Python, Node.js, AWS</td>
                    <td>Ready</td>
                </tr>
            </table>
        </div>
    )
}

export default Users;