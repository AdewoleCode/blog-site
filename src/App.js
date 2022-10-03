import React, { useState } from "react";
import { Routes, Route, Link, useNavigate } from 'react-router-dom'
import AddPost from "./pages/AddPost";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { signOut } from "firebase/auth";

import '../src/App.css'
import { auth } from "./Firebase-config";

function App() {

  const [isAuth, setIsAuth] = useState(false);


  const signUserOut = () => {
    signOut(auth).then(response => {
      localStorage.clear();
      setIsAuth(false)
      window.location.pathname = '/login';
    })
  }

  return (
    <>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/add-post'>Create Post</Link>
        {!isAuth ? <Link to='/login'>Login</Link> : <button onClick={signUserOut}>Log Out</button>}
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-post" element={<AddPost />} />
        <Route path="/login" element={<Login setIsAuth={setIsAuth} />} />
      </Routes>

    </>

  );
}

export default App;
