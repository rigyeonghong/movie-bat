import React from "react";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Movies from "./routes/Movies";
import Login from "./routes/Login";
import SignUp from "./routes/SignUp";
import Home from "./routes/Home";
import Team from "./routes/Team";
import Like from "./routes/Like";
import Festival from "./routes/Festival";
import { RecoilRoot } from "recoil";
import GlobalStyle from "./styles/global";
import PageNotFound from "./routes/PageNotFound";

function App() {
  return (
    <>
      <RecoilRoot>
        <GlobalStyle />
        <BrowserRouter>
          <Routes>
            <Route path="/movies" element={<Movies />} />
            <Route path="like" element={<Like />} />
            <Route path="/auth/signin" element={<Login />} />
            <Route path="/auth/signup" element={<SignUp />} />
            <Route exact path="/" element={<Home />} />
            <Route path="/team" element={<Team />} />
            <Route path="/festival" element={<Festival />} />
            <Route element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
      </RecoilRoot>
    </>
  );
}

export default App;
