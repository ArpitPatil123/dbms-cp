import React from "react";
import AdminDashboadCard from "../../components/AdminDashboadCard";

const Dashboard = () => {
  return (
    <div className="container mt-4">
      <div className="row">
        <AdminDashboadCard
          bgColor="primary"
          headingText="Total Volunteers"
          count="10"
        />
        <AdminDashboadCard
          bgColor="success"
          headingText="Events Organised"
          count="10"
        />
        <AdminDashboadCard bgColor="warning" headingText="Upcoming Events" />
        <AdminDashboadCard bgColor="danger" />
      </div>

      <h2>Your NGO name: </h2>
    </div>
  );
};

export default Dashboard;
