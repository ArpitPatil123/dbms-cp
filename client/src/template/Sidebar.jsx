import React from "react";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      <div className="sidebar">
        <ul>
          <li>
            <Link to={"/admin"}>Dashboard</Link>
          </li>
          <li>
            <Link to={"/admin/add_event"}>Add Event</Link>
          </li>
          <li>
            <Link to={"/admin/add_ngo"}>Add NGO</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
