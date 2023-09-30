import React from "react";
import { useState } from "react";
import Input from "./Input";
import { fbLogin } from "../config/fbmthod";
import { NavLink } from "react-router-dom";

export default function Login() {
  const [model, setModel] = useState({});

  const fillModel = (key, val) => {
    model[key] = val;
    setModel({ ...model });
  };
  let loginHere = () => {
    console.log(model);
    fbLogin(model)
      .then((res) => {
        console.log(res);
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
            <label htmlFor="exampleInputEmail1">Email address</label>

            <Input
              label="E-mail"
              onChange={(e) => fillModel("email", e.target.value)}
              value={model.email}
              type="text"
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
            onChange={loginHere}
            type="submit"
            className="btn btn-outline-dark"
          >
            Submit
          </button>
</NavLink>
        </form>
      </div>
    </>
  );
}
