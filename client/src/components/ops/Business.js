import React from 'react';
import DashHead from '../select/DashHead';
import {Link} from '@reach/router';
import './ops.css';

const Business = (props) => {

    return (
        <div>
            <DashHead/>
            <h1>Business</h1>
            <table className="ops">
                <tr>
                    <th>Company</th>
                    <th>Job Title</th>
                    <th>Short Description</th>
                </tr>
                <tr>
                    <td><Link to="/users/1">Apple</Link></td>
                    <td>React Developer</td>
                    <td>Creating a website about how sharp Rhinos Horns are and...</td>
                </tr>
                <tr>
                    <td><Link to="/users/1">Amazon</Link></td>
                    <td>Web Developer</td>
                    <td>Creating a website about how sharp Rhinos Horns are and...</td>
                </tr>
                <tr>
                    <td><Link to="/users/1">Google</Link></td>
                    <td>Mobile Developer</td>
                    <td>Creating a website about how sharp Rhinos Horns are and...</td>
                </tr>
                <tr>
                    <td><Link to="/users/1">Facebook</Link></td>
                    <td>Mobile Engineer</td>
                    <td>Creating a website about how sharp Rhinos Horns are and...</td>
                </tr>
                <tr>
                    <td><Link to="/users/1">BangBros</Link></td>
                    <td>Fluffer</td>
                    <td>Creating a website about how sharp Rhinos Horns are and...</td>
                </tr>
                <tr>
                    <td><Link to="/users/1">IBM</Link></td>
                    <td>Data Analyst</td>
                    <td>Creating a website about how sharp Rhinos Horns are and...</td>
                </tr>
                <tr>
                    <td><Link to="/users/1">Warner Bros</Link></td>
                    <td>Web Designer</td>
                    <td>Creating a website about how sharp Rhinos Horns are and...</td>
                </tr>
                <tr>
                    <td><Link to="/users/1">TikTok</Link></td>
                    <td>Dev Ops</td>
                    <td>Creating a website about how sharp Rhinos Horns are and...</td>
                </tr>
                <tr>
                    <td><Link to="/users/1">Bank of America</Link></td>
                    <td>Software Developer</td>
                    <td>Creating a website about how sharp Rhinos Horns are and...</td>
                </tr>
                <tr>
                    <td><Link to="/users/1">John Deere</Link></td>
                    <td>Software Engineer</td>
                    <td>Creating a website about how sharp Rhinos Horns are and...</td>
                </tr>
            </table>
        </div>
    )
}

export default Business;