import React from "react";
import { Navigate, Routes, BrowserRouter, Route } from "react-router-dom";
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
  const user = JSON.parse(localStorage.getItem("recoil-persist"));
  console.log(user);
  return (
    <>
      <RecoilRoot>
        <GlobalStyle />
        <BrowserRouter>
          <Routes>
            <Route
              path="/movies"
              element={
                user["userState"]["userIdx"] == null ? <Login /> : <Movies />
              }
            />
            <Route path="like" element={<Like />} />
            <Route path="/auth/signin" element={<Login />} />
            <Route path="/auth/signup" element={<SignUp />} />
            <Route exact path="/" element={<Home />} />
            <Route path="/team" element={<Team />} />
            <Route
              path="/festival"
              element={
                user["userState"]["userIdx"] == null ? <Login /> : <Festival />
              }
            />
            <Route path="auth/kakao" element={<KakaoLogin />} />
            <Route
              path="movies/detail/:idx"
              element={
                user["userState"]["userIdx"] == null ? <Login /> : <MovieInfo />
              }
            />
            <Route element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
      </RecoilRoot>
    </>
  );
}

export default App;
