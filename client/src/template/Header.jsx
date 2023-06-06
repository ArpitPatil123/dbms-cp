import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAppContext } from "../contextAPI/ContextProvider";
import axios from "../axios/axios";

const Header = () => {
  const { state, dispatch } = useAppContext();
  const location = useLocation();
  const [list, setList] = useState(false);
  const navigate = useNavigate();

  const logout = () => {
    axios
      .get("/auth/logout")
      .then((res) => {
        alert(res.data.message);
        dispatch({ type: "LOGOUT_USER" });
        localStorage.removeItem("isLogin");
        localStorage.removeItem("user");
        navigate("/");
      })
      .catch((err) => {
        if (err.response) alert(err.response.data.message);
      });
  };

  useEffect(() => {
    if (location.pathname === "/ngo_list") {
      setList(true);
    } else {
      setList(false);
    }
  }, [location]);

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          <img src={"/images/logo.png"} alt="logo"></img>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div
          className="collapse navbar-collapse d-flex gap-3"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                to="/ngo_list"
                className="nav-link active"
                aria-current="page"
              >
                NGO List
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">
                About Us
              </Link>
            </li>
          </ul>
          {list && (
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          )}
          {state.isLogin && (
            <div className="d-flex gap-4 align-items-center justify-content-center">
              <p
                style={{
                  marginBottom: "0",
                }}
              >
                Hello, {state?.user?.username}
              </p>
              <button
                type="button"
                className="btn btn-primary"
                onClick={logout}
              >
                Logout
              </button>
            </div>
          )}
          {!state.isLogin && (
            <div className="d-flex gap-2">
              <button type="button" className="btn btn-primary">
                <Link to="/register" className="text-white">
                  Register
                </Link>
              </button>
              <button type="button" className="btn btn-primary">
                <Link to="/login" className="text-white">
                  Login
                </Link>
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;
