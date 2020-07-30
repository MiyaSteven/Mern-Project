import React, {useState, useEffect} from 'react';
import DashHead from '../select/DashHead';
import {Link} from '@reach/router';
import axios from 'axios';
import './ops.css';

const Business = (props) => {

    const [business, setBusiness] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:8000/api/business`)
        .then(res => setBusiness(res.data))
        .catch(err => console.log(err));
    })

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
                {business.map((biz,idx) => {
                    return(
                        <tr key={idx}>
                            <td><Link to={`/users/${biz._id}`}>{biz.company}</Link></td>
                            <td><Link to="/business/1">React Developer</Link></td>
                            <td>Creating a website about how sharp Rhinos Horns are and...</td>
                        </tr>
                    )
                })}
            </table>
        </div>
    )
}

export default Business;