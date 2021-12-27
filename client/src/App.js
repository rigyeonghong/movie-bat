import React from "react";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import Movies from "./routes/Movies";
import Login from "./routes/Login";
import SignUp from "./routes/SignUp";
import Home from "./routes/Home";
import Team from "./routes/Team";
import Like from "./routes/Like";
import { RecoilRoot } from "recoil";

function App() {
  return (
    <>
      <RecoilRoot>
        <BrowserRouter>
          <Routes>
            <Route path="/movies" element={<Movies />} />
            <Route path="like" element={<Like />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route exact path="/" element={<Home />} />
            <Route path="/team" element={<Team />} />
          </Routes>
        </BrowserRouter>
      </RecoilRoot>
    </>
  );
}

export default App;
