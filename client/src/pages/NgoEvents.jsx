import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "../axios/axios";

const NgoEvents = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [events, setEvents] = useState([]);
  const navigate = useNavigate();

  const register = async () => {
    await axios
      .get(`/event/register_for_event/${id}`)
      .then((response) => {
        console.log(response.data);
        alert(response.data);
      })
      .catch((err) => {
        if (err.response) {
          alert(err.response.data);
        }
      });
  };

  const getEvents = async () => {
    await axios
      .get(`/event/get_event/${id}`)
      .then((response) => {
        console.log(response.data);
        setEvents(response.data);
      })
      .catch((err) => {
        if (err.response) {
          alert(err.response.data);
          navigate("/login");
        }
      });
  };

  useEffect(() => {
    getEvents();
  }, []);

  return (
    <div className="container m-4">
      <h3>Events List</h3>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Sr No.</th>
            <th scope="col">Name</th>
            <th scope="col">Description</th>
            <th scope="col">Date</th>
            <th scope="col">Time</th>
            <th scope="col">Location</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {events?.map((event, i) => (
            <tr key={i + 1}>
              <th scope="row">{i + 1}</th>
              <td>{event.name}</td>
              <td>{event.description}</td>
              <td>{event.date}</td>
              <td>{event.time}</td>
              <td>{event.location}</td>
              <td>
                <button className="btn btn-success" onClick={register}>
                  Join EVENT
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default NgoEvents;
