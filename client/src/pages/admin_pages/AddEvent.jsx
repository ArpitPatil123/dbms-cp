import React, { useEffect, useState } from "react";
import axios from "../../axios/axios";

const AddEvent = () => {
  const initialState = {
    name: "",
    description: "",
    location: "",
    date: "",
    time: null,
    ngo_id: null,
  };
  const [details, setDetails] = useState(initialState);
  const [ngoList, setNgoList] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetails({ ...details, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("/event/add_event", details)
      .then((res) => {
        alert(res.data);
        setDetails(initialState);
      })
      .catch((err) => {
        if (err.response) alert(err.response.data);
      });
  };

  const getNgo = async () => {
    await axios
      .get("/ngo/get_ngo_of_user")
      .then((res) => {
        setNgoList(res.data);
        setDetails(initialState);
      })
      .catch((err) => {
        if (err.response) alert(err.response.data);
      });
  };

  useEffect(() => {
    getNgo();
  }, []);

  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-md-4 m-auto">
          <div className="card card-body">
            <h1 className="text-center mb-3">
              <i className="fas" /> Add NGO Event
            </h1>
            <form className="row g-3" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="email">Name</label>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  placeholder="Enter Name of The Event"
                  value={details.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Description</label>
                <textarea
                  rows={5}
                  name="description"
                  className="form-control"
                  placeholder="Enter description of the event"
                  value={details.description}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Location</label>
                <input
                  type="text"
                  name="location"
                  className="form-control"
                  placeholder="Enter location of the event"
                  value={details.location}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Date</label>
                <input
                  type="date"
                  name="date"
                  className="form-control"
                  placeholder="Enter Name of The NGO"
                  value={details.date}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Time</label>
                <input
                  type="time"
                  name="time"
                  className="form-control"
                  placeholder="Enter Name of The NGO"
                  // value={details.time}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="ngo">Select NGO</label>
                <select
                  className="form-select"
                  aria-label="Default select example"
                  onChange={handleChange}
                  name="ngo_id"
                >
                  <option defaultValue={1}>--Select NGO--</option>
                  {ngoList?.map((item) => (
                    <option value={item.id} key={item.id}>
                      {item.name}
                    </option>
                  ))}
                </select>
              </div>
              <button type="submit" className="btn btn-primary btn-block">
                Add Event
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddEvent;
