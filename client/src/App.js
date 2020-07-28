import React from 'react';
import NavBar from './components/navbar/NavBar';
import './App.css';
import {Router} from '@reach/router';
import NewUser from './views/forms/NewUser';
import UserForm from './components/forms/UserForm';
import BusinessForm from './components/forms/BusinessForm';
import LoginForm from './components/forms/LoginForm';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Router>
        <NewUser path="/users"/>
        <UserForm path="/users/create"/>
        <BusinessForm path="/business/create"/>
        <LoginForm path="/login"/>
      </Router>
    </div>
  );
}

export default App;
