import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../../axios/axios";

const AddNgo = () => {
  const navigate = useNavigate();
  const initialState = { name: "", description: "" };
  const [details, setDetails] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetails({ ...details, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("/ngo/add_ngo", details)
      .then((res) => {
        alert(res.data);
        setDetails(initialState);
      })
      .catch((err) => {
        if (err.response) alert(err.response.data);
      });
  };
  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-md-4 m-auto">
          <div className="card card-body">
            <h1 className="text-center mb-3">
              <i className="fas" /> Add NGO
            </h1>
            <form className="row g-3" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="email">Name</label>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  placeholder="Enter Name of The NGO"
                  value={details.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Description</label>
                <textarea
                  rows={5}
                  name="description"
                  className="form-control"
                  placeholder="Enter Description"
                  value={details.description}
                  onChange={handleChange}
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary btn-block">
                Add NGO
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddNgo;
