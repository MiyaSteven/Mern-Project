import React from "react";
import Opps from "../select/Opps";
// import 'form.css';

const LoginForm = (props) => {
  return (
    <div>
      <Opps />
      <form>
        <div>
          <label htmlFor="">Email</label>
          <input type="email" />
        </div>
        <div>
          <label htmlFor="">Password</label>
          <input type="password" />
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
