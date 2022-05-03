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
<<<<<<< HEAD
=======
import Search from "./routes/Search";
import AllMovie from "./routes/AllMovie";
>>>>>>> master

function App() {
  const isLogout = () => {
    const user = JSON.parse(localStorage.getItem("recoil-persist"));
<<<<<<< HEAD
    if (user === null || user["userState"]["userIdx"] == null) return true;
=======
    if (user?.["userState"]?.["userIdx"] == null) return true;
>>>>>>> master
    else return false;
  };
  return (
    <>
      <RecoilRoot>
        <GlobalStyle />
        <BrowserRouter>
          <Routes>
            <Route
              path="/movies"
              element={isLogout() ? <Login /> : <Movies />}
            />
            <Route path="like" element={<Like />} />
<<<<<<< HEAD
            <Route path="/auth/signin" element={<Login />} />
=======
            <Route path="search/:keyword" element={<Search />} />
            <Route path="/auth/signin" element={<Login />} />
            <Route path="/all" element={<AllMovie />} />
>>>>>>> master
            <Route path="/auth/signup" element={<SignUp />} />
            <Route exact path="/" element={<Home />} />
            <Route path="/team" element={<Team />} />
            <Route
              path="/festival"
              element={isLogout() ? <Login /> : <Festival />}
            />
            <Route path="auth/kakao" element={<KakaoLogin />} />
            <Route
              path="movies/detail/:idx"
              element={isLogout() ? <Login /> : <MovieInfo />}
            />
<<<<<<< HEAD
            <Route element={<PageNotFound />} />
=======
            <Route path="*" element={<PageNotFound />} />
>>>>>>> master
          </Routes>
        </BrowserRouter>
      </RecoilRoot>
    </>
  );
}

export default App;
