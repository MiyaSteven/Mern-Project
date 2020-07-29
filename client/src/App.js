import React from "react";
import NavBar from "./components/navbar/NavBar";
import "./App.css";
import { Router } from "@reach/router";
import NewUser from "./views/forms/NewUser";
import UserForm from "./components/forms/UserForm";
import BusinessForm from "./components/forms/BusinessForm";
import LoginForm from "./components/forms/LoginForm";
import Dashboard from "./views/dashboard/Dashboard";
import Profile from "./views/profile/Profile";
import Users from "./components/ops/Users";
import Collaborate from "./components/ops/Collaborate";
import Business from "./components/ops/Business";
import UpdateForm from "./views/edit/UpdateForm";
import CollabForm from "./components/forms/CollabForm";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Router>
        <Dashboard path="/dash" />
        <Users path="/" />
        <Collaborate path="/collaborate" />
        <Business path="/business" />
        <NewUser path="/create/" />
        <UserForm path="/users/create" />
        <BusinessForm path="/business/create" />
        <LoginForm path="/login" />
        <Profile path="users/:id" />
        <UpdateForm path="/users/1/edit" />
        <CollabForm path="/users/1/create/collab" />
      </Router>
    </div>
  );
}
export default App;
