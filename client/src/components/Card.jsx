import React, { useState } from "react";
import axios from "../axios/axios";
import { useAppContext } from "../contextAPI/ContextProvider";
import { Link } from "react-router-dom";

const Card = ({ id, description, name }) => {
  const { state } = useAppContext();
  const [isJoin, setIsJoin] = useState(false);
  const onClick = () => {
    axios
      .get(`/volunteer/join_ngo/${id}/${state.user.id}}`)
      .then((response) => {
        console.log(response.data);
        alert(response.data);
        setIsJoin(true);
      })
      .catch((err) => {
        if (err.response) alert(err.response.data);
      });
  };

  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src="./images/image.jpeg" className="card-img-top" alt="..." />
      <div className="card-body">
        <Link to={`/eventsList/${id}`}>
          <h5 className="card-title">{name}</h5>
        </Link>
        <p className="card-text">{description}</p>
        {state.isLogin && !isJoin ? (
          <button className="btn btn-primary" onClick={onClick}>
            Join NGO
          </button>
        ) : (
          <button className="btn btn-primary">Already Joined</button>
        )}
      </div>
    </div>
  );
};

export default Card;
