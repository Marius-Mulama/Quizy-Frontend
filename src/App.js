import React, { useState, useEffect } from "react";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navi from './components/Navi';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Profile from './pages/Profile';

function App() {
  const [user,setUser] = useState(null)

  useEffect(() => {
    const getUser = () => {
      fetch("http://localhost:8000/auth/login/success", {
        method: "GET",
        credentials: "include",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true,
        },
      })
        .then((response) => {
          if (response.status === 200) return response.json();
          throw new Error("authentication has been failed!");
        })
        .then((resObject) => {
          setUser(resObject.user);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getUser();
  }, []);

 // console.log(user)

  return (
    <BrowserRouter>
    <div className="App">
      <Navi user={user} />
      <Routes>
        <Route path='/' element={<Dashboard/>}/>
        <Route path='/login' element={user? <Navigate to="/"/>:<Login/>}/>
        <Route path='/profile' element={<Profile/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
