import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import axios from "../axios/axios";

const NgoList = () => {
  const [ngoList, setNgoList] = useState([]);

  const getNgoList = async () => {
    const response = await axios.get("/ngo/get_all_ngo");
    setNgoList(response.data);
  };

  useEffect(() => {
    getNgoList();
  }, []);

  return (
    <div className="container">
      <h2 className="text-center mb-4">All Registered NGO's</h2>
      <div className="d-flex flex-wrap gap-4 justify-conten">
        {ngoList?.map((item) => (
          <Card
            key={item.id}
            id={item.id}
            description={item.description}
            name={item.name}
          />
        ))}
      </div>
    </div>
  );
};

export default NgoList;
