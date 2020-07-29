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
                    <td><Link to="/business/1">React Developer</Link></td>
                    <td>Creating a website about how sharp Rhinos Horns are and...</td>
                </tr>
                <tr>
                    <td><Link to="/users/1">Amazon</Link></td>
                    <td><Link to="/business/1">Web Developer</Link></td>
                    <td>Creating a website about how sharp Rhinos Horns are and...</td>
                </tr>
                <tr>
                    <td><Link to="/users/1">Google</Link></td>
                    <td><Link to="/business/1">Mobile Developer</Link></td>
                    <td>Creating a website about how sharp Rhinos Horns are and...</td>
                </tr>
                <tr>
                    <td><Link to="/users/1">Facebook</Link></td>
                    <td><Link to="/business/1">Mobile Engineer</Link></td>
                    <td>Creating a website about how sharp Rhinos Horns are and...</td>
                </tr>
                <tr>
                    <td><Link to="/users/1">BangBros</Link></td>
                    <td><Link to="/business/1">Fluffer</Link></td>
                    <td>Creating a website about how sharp Rhinos Horns are and...</td>
                </tr>
                <tr>
                    <td><Link to="/users/1">IBM</Link></td>
                    <td><Link to="/business/1">Data Analyst</Link></td>
                    <td>Creating a website about how sharp Rhinos Horns are and...</td>
                </tr>
                <tr>
                    <td><Link to="/users/1">Warner Bros</Link></td>
                    <td><Link to="/business/1">Web Desingner</Link></td>
                    <td>Creating a website about how sharp Rhinos Horns are and...</td>
                </tr>
                <tr>
                    <td><Link to="/users/1">TikTok</Link></td>
                    <td><Link to="/business/1">Dev Ops</Link></td>
                    <td>Creating a website about how sharp Rhinos Horns are and...</td>
                </tr>
                <tr>
                    <td><Link to="/users/1">Bank of America</Link></td>
                    <td><Link to="/business/1">Software Developer</Link></td>
                    <td>Creating a website about how sharp Rhinos Horns are and...</td>
                </tr>
                <tr>
                    <td><Link to="/users/1">John Deere</Link></td>
                    <td><Link to="/business/1">Software Engineer</Link></td>
                    <td>Creating a website about how sharp Rhinos Horns are and...</td>
                </tr>
            </table>
        </div>
    )
}

export default Business;