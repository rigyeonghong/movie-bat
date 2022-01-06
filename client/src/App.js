<<<<<<< HEAD
import React, {useState, useEffect} from 'react'

function App() {
  const [data, setData] = useState("hello");
  const [testString, setTestString] = useState('abcdefg');

  useEffect(()=> {
    fetch("/members").then(res => res.json()).then(data => {
      setData(data);
      console.log(data);
    })
  }, []);

  useEffect(() => {
    fetch('/test').then(res => res.json()).then(data => {
      setTestString(data);
    })
  }, []);

  return (
    <div>
      <p>Data </p>
      {(typeof data.members == 'undefined') ? (
        <p>Loading ...</p>
      ): (
        data.members.map((member, i) => (
          <p key={i}>{member}</p>
        ))
      )}
      
      <p>String</p>
      <p>{testString}</p>
      
    </div>
  )
}

export default App
=======
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
import KakaoLogin from "./routes/KakaoLogin";
import PageNotFound from "./routes/PageNotFound";
import MovieInfo from "./routes/MovieInfo";

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
            <Route path="auth/kakao" element={<KakaoLogin />} />
            <Route path="movies/detail/:idx" element={<MovieInfo />} />
            <Route element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
      </RecoilRoot>
    </>
  );
}

export default App;
>>>>>>> 7122871a2307cd5e4c9545f206ac666f55c3c445
