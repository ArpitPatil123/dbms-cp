import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "../axios/axios";
import { useAppContext } from "../contextAPI/ContextProvider";

const Login = () => {
  const { dispatch } = useAppContext();
  const navigate = useNavigate();
  const initialState = { email: "", password: "" };
  const [details, setDetails] = useState(initialState);
  const [visible, setVisible] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetails({ ...details, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("/auth/login", details)
      .then((res) => {
        alert(res.data.message);
        dispatch({ type: "LOGIN_USER", payload: res.data.user });
        localStorage.setItem("isLogin", true);
        localStorage.setItem("user", JSON.stringify(res.data.user));
        navigate("/");
      })
      .catch((err) => {
        if (err.response) alert(err.response.data.message);
      });
  };

  return (
    <div className="row mt-5">
      <div className="col-md-4 m-auto">
        <div className="card card-body">
          <h1 className="text-center mb-3">
            <i className="fas fa-sign-in-alt" /> Login
          </h1>
          <form className="row g-3" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-control"
                placeholder="Enter Email"
                value={details.email}
                onChange={handleChange}
              />
            </div>
            <div className="form-group position-relative">
              <label htmlFor="password">Password</label>
              <input
                type={visible ? "text" : "password"}
                id="password"
                name="password"
                className="form-control"
                placeholder="Enter Password"
                value={details.password}
                onChange={handleChange}
              />
              {!visible ? (
                <i
                  class="fa fa-eye-slash"
                  aria-hidden="true"
                  onClick={() => setVisible(!visible)}
                ></i>
              ) : (
                <i
                  class="fa fa-eye"
                  aria-hidden="true"
                  onClick={() => setVisible(!visible)}
                ></i>
              )}
            </div>
            <button type="submit" className="btn btn-primary btn-block">
              Login
            </button>
          </form>
          <p className="lead mt-4">
            No Account? <Link to="/register">Register</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
