import React from "react";
import { Routes, Route, Link } from 'react-router-dom'
import AddPost from "./pages/AddPost";
import Home from "./pages/Home";
import Login from "./pages/Login";

function App() {
  return (

    <Routes>

      <Route path="/" element={<Home />} />
      <Route path="/add-post" element={<AddPost />} />
      <Route path="/login" element={<Login />} />

    </Routes>
  );
}

export default App;
