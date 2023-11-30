import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./containers/Home";
import Users from "./containers/Users";

const Routers = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Users" element={<Users />}></Route>
      </Routes>
    </Router>
  );
};

export default Routers;
