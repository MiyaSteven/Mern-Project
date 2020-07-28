import React from 'react';
import Opps from '../select/Opps';
// import 'form.css';

const BusinessForm = (props) => {

    return (
        <div>
            <Opps/>
            <form>
                <div>
                    <label htmlFor="">First Name</label>
                    <input type="text"/>
                </div>
                <div>
                    <label htmlFor="">Last Name</label>
                    <input type="text"/>
                </div>
                <div>
                    <label htmlFor="">Company Name</label>
                    <input type="text"/>
                </div>
                <div>
                    <label htmlFor="">Phone Number</label>
                    <input type="number"/>
                </div>
                <div>
                    <label htmlFor="">Email</label>
                    <input type="email"/>
                </div>
                <div>
                    <label htmlFor="">Location</label>
                    <input type="text"/>
                </div>
                <div>
                    <label htmlFor="">Password</label>
                    <input type="password"/>
                </div>
                <div>
                    <label htmlFor="">Confirm Password</label>
                    <input type="password"/>
                </div>
            </form>
        </div>
    )
}

export default BusinessForm;