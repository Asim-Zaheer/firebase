import React from "react";
import Input from "./Input";
import { useState } from "react";
import { fbSignUp } from "../config/fbmthod";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";

function Signup() {
  const [model, setModel] = useState({});

  const fillModel = (key, val) => {
    model[key] = val;
    setModel({ ...model });
  };
  const navigate = useNavigate();
  
  let signUpHere = () => {
    console.log(model);
    fbSignUp(model)
      .then((res) => {
        navigate("/login");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <div className="container d-flex justify-content-center pt-5 mt-5 ">
        <form className="container  align-items-center pt-5 mt-5">
          <div className="form-group   ">
            <label htmlFor="exampleInputEmail1"> User Name</label>

            <Input
              label="User Name"
              onChange={(e) => fillModel("user Name ", e.target.value)}
              value={model.userName}
              type="text"
            />
          </div>
          <div className="form-group   ">
            <label htmlFor="exampleInputEmail1">Email address</label>

            <Input
              label="E-mail"
              onChange={(e) => fillModel("email", e.target.value)}
              value={model.email}
              type="email"
            />
          </div>

          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>

            <Input
              label="Password"
              onChange={(e) => fillModel("password", e.target.value)}
              value={model.password}
              type="password"
            />
          </div>

          <NavLink>
            <button
              onClick={signUpHere}
              type="submit"
              className="btn btn-outline-dark"
            >
              Sign Up
            </button>
          </NavLink>
        </form>
      </div>
    </>
  );
}

export default Signup;
