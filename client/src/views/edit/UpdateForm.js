import React from 'react';
import { ColForm, TextBox, ColLabel, ColInput, RoundedBtn } from '../../components/forms/Styles';

const UpdateForm = (props) => {

    return (
        <div>
            <ColForm>
                <h1>Update Naruto</h1>
                <div>
                    <ColLabel>First Name</ColLabel><br/>
                    <ColInput type="text"/>
                </div>
                <div>
                    <ColLabel>Last Name</ColLabel><br/>
                    <ColInput type="text"/>
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