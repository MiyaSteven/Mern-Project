import React, { useState } from "react";
import axios from "axios";
import Opps from "../select/Opps";
import { navigate } from "@reach/router";
// import 'form.css';

const BusinessForm = (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [company, setCompany] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [location, setLocation] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newUser = {
      firstName,
      lastName,
      company,
      phoneNumber,
      email,
      location,
      password,
      confirmPassword,
    };

    axios
      .post("http://localhost:8000/users", newUser)
      .then((res) => {
        navigate("/users");
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div>
      <Opps />
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <div>
          <label htmlFor="">First Name</label>
          <input
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
            type="text"
            value={firstName}
          />{" "}
        </div>
        <div>
          <label htmlFor="">Last Name</label>
          <input
            onChange={(e) => {
              setLastName(e.target.value);
            }}
            type="text"
            value={lastName}
          />{" "}
        </div>
        <div>
          <label htmlFor="">Company:</label>
          <input
            onChange={(e) => {
              setCompany(e.target.value);
            }}
            type="text"
            value={company}
          />{" "}
        </div>
        <div>
          <label htmlFor="">Phone Number</label>
          <input
            onChange={(e) => {
              setPhoneNumber(e.target.value);
            }}
            type="number"
            value={phoneNumber}
          />{" "}
        </div>
        <div>
          <label htmlFor="">Email</label>
          <input
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            type="email"
            value={email}
          />{" "}
        </div>
        <div>
          <label htmlFor="">Location</label>
          <input
            onChange={(e) => {
              setLocation(e.target.value);
            }}
            type="text"
            value={location}
          />{" "}
        </div>
        <div>
          <label htmlFor="">Password</label>
          <input
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            type="password"
            value={password}
          />{" "}
        </div>
        <div>
          <label htmlFor="">Confirm Password</label>
          <input
            onChange={(e) => {
              setConfirmPassword(e.target.value);
            }}
            type="password"
            value={confirmPassword}
          />{" "}
        </div>
        <button>Add Member</button>
      </form>
    </div>
  );
};

export default BusinessForm;
