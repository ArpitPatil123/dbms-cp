import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "../axios/axios";

const Register = () => {
  const navigate = useNavigate();
  const initialState = { username: "", email: "", password: "", role: "" };
  const [details, setDetails] = useState(initialState);
  const [visible, setVisible] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetails({ ...details, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    axios
      .post("/auth/register", details)
      .then((res) => {
        alert(res.data.message);
        setDetails(initialState);
        navigate("/login");
      })
      .catch((err) => {
        if (err.response) alert(err.response.data.message);
      });
  };

  return (
    <div className="row mt-5">
      <div className="col-md-5 m-auto">
        <div className="card card-body">
          <h1 className="text-center mb-3">
            <i className="fas fa-user-plus" /> Register
          </h1>
          <form className="row g-3" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Username</label>
              <input
                type="name"
                id="name"
                name="username"
                className="form-control"
                placeholder="Enter Name"
                value={details.username}
                onChange={handleChange}
                required
              />
            </div>
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
                required
              />
            </div>
            <div className="form-group position-relative">
              <label htmlFor="password">Password</label>
              <input
                type={visible ? "text" : "password"}
                id="password"
                name="password"
                className="form-control"
                placeholder="Create Password"
                value={details.password}
                onChange={handleChange}
                required
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
            <div className="col-md-4">
              <label htmlFor="inputState" className="form-label">
                Role
              </label>
              <select
                id="inputState"
                className="form-select"
                onChange={handleChange}
                name="role"
                required
              >
                <option>Select</option>
                <option>Admin</option>
                <option>Volunteer</option>
              </select>
            </div>
            <button type="submit" className="btn btn-primary btn-block mt-4">
              Register
            </button>
          </form>
          <p className="mt-1">
            Have An Account? <Link to="/login">Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
