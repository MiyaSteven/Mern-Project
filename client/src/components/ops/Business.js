import React from 'react';
import DashHead from '../select/DashHead';
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
                    <td>Apple</td>
                    <td>React Developer</td>
                    <td>Creating a website about how sharp Rhinos Horns are and...</td>
                </tr>
                <tr>
                    <td>Amazon</td>
                    <td>Web Developer</td>
                    <td>Creating a website about how sharp Rhinos Horns are and...</td>
                </tr>
                <tr>
                    <td>Google</td>
                    <td>Mobile Developer</td>
                    <td>Creating a website about how sharp Rhinos Horns are and...</td>
                </tr>
                <tr>
                    <td>Facebook</td>
                    <td>Mobile Engineer</td>
                    <td>Creating a website about how sharp Rhinos Horns are and...</td>
                </tr>
                <tr>
                    <td>BangBros</td>
                    <td>Fluffer</td>
                    <td>Creating a website about how sharp Rhinos Horns are and...</td>
                </tr>
                <tr>
                    <td>IBM</td>
                    <td>Data Analyst</td>
                    <td>Creating a website about how sharp Rhinos Horns are and...</td>
                </tr>
                <tr>
                    <td>Warner Bros</td>
                    <td>Web Designer</td>
                    <td>Creating a website about how sharp Rhinos Horns are and...</td>
                </tr>
                <tr>
                    <td>TikTok</td>
                    <td>Dev Ops</td>
                    <td>Creating a website about how sharp Rhinos Horns are and...</td>
                </tr>
                <tr>
                    <td>Bank Of America</td>
                    <td>Software Developer</td>
                    <td>Creating a website about how sharp Rhinos Horns are and...</td>
                </tr>
                <tr>
                    <td>John Deere</td>
                    <td>Software Engineer</td>
                    <td>Creating a website about how sharp Rhinos Horns are and...</td>
                </tr>
            </table>
        </div>
    )
}

export default Business;