import React from 'react';
import './profile.css';
import { Link } from '@reach/router';
import ReviewForm from '../../components/forms/ReviewForm';

const Profile = (props) => {

    return (
        <div className="profile">
            <h1>Naruto Uzamaki</h1>
            <img src="https://i.pinimg.com/originals/2f/59/f1/2f59f17586bc76ec69071cd3672cdc4d.png" alt=""/>
            <h3>Skills</h3>
            <p>React, Javascript, Html, css, Python, Node.js, AWS</p>
            <h3>Projects</h3>
            <p>React, Javascript, Html, css, Python, Node.js, AWS</p>
            <h3>Current Offers</h3>
            <p>React, Javascript, Html, css, Python, Node.js, AWS</p>
            <h3>Offer Deadline</h3>
            <p>12/12/12</p>
            <Link to="/users/1/edit">Edit</Link><br/><br/><br/>
            <Link to="/users/1/create/collab">Create Collab</Link>
            <ReviewForm/>
            <div className="reviews">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero optio delectus reprehenderit hic necessitatibus magni! Assumenda voluptatum, amet temporibus autem deserunt eius, incidunt voluptas maiores tempore, nisi quod officia omnis!</p>
                <h3>- Bob Sagot</h3>
            </div>
        </div>
    )
}

export default Profile;