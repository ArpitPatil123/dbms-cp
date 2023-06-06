import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./template/Layout";
import Login from "./pages/Login";
import Register from "./pages/Register";
import About from "./pages/About";
import PageNotFound from "./pages/PageNotFound";
import NgoList from "./pages/NgoList";
import NgoEvents from "./pages/NgoEvents";
import AdminDashboard from "./pages/AdminDashboard";
import Protected from "./components/Protected";
import AddEvent from "./pages/admin_pages/AddEvent";
import Dashboard from "./pages/admin_pages/Dashboard";
import AddNgo from "./pages/admin_pages/AddNgo";

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<About />} />
        <Route path="/ngo_list" element={<NgoList />} />
        <Route path="/eventsList/:ngo_id" element={<NgoEvents />} />
        <Route
          path="/admin"
          element={
            <Protected>
              <AdminDashboard />
            </Protected>
          }
        >
          <Route index element={<Dashboard />} />
          <Route path="add_event" element={<AddEvent />} />
          <Route path="add_ngo" element={<AddNgo />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Layout>
  );
};

export default App;
