import React from "react";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import Login from "./routes/Login";
import SignUp from "./routes/SignUp";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
