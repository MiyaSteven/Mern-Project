import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { ColForm, TextBox, ColLabel, ColInput, RoundedBtn } from '../../components/forms/Styles';

const UpdateForm = (props) => {

    const {id} = props;
    const [users, setUsers] =useState({});

    useEffect(() => {
        axios.get(`http://localhost:8000/api/users/${id}`)
        .then(res => setUsers(res.data))
        .catch((err) => console.log(err));
    }, [])

    return (
        <div>
            <ColForm>
                <h1>{users.firstName} {users.lastName}</h1>
                <div>
                    <ColLabel>First Name</ColLabel><br/>
                    <ColInput type="text" value={users.firstName}/>
                </div>
                <div>
                    <ColLabel>Last Name</ColLabel><br/>
                    <ColInput type="text" value={users.lastName}/>
                </div>
                <div>
                    <ColLabel>Company Name</ColLabel><br/>
                    <ColInput type="text"/>
                </div>
                <div>
                    <ColLabel>Phone Number</ColLabel><br/>
                    <ColInput type="number"/>
                </div>
                <div>
                    <ColLabel>Email</ColLabel><br/>
                    <ColInput type="email"/>
                </div>
                <div>
                    <ColLabel>Location</ColLabel><br/>
                    <ColInput type="text"/>
                </div>
                <div>
                    <ColLabel>Skills</ColLabel><br/>
                    <TextBox name="" id="" cols="30" rows="10"></TextBox>
                </div>
                <RoundedBtn>Update</RoundedBtn>
            </ColForm>
        </div>
    )
}

export default UpdateForm;