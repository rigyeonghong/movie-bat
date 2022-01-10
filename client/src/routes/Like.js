import React, { useEffect, useState } from "react";
import axios from "axios";
import Nav from "../components/Navigation";
import { useRecoilValue } from "recoil";
import { userState } from "../state";
import { BoldTitle, SearchMoviePoster } from "../styles/theme";
function Like() {
  const user = useRecoilValue(userState);
  const [favoriteMovie, setFavoriteMovie] = useState([]);
  const favoriteList = [];
  useEffect(() => {
    const call = async () => {
      const response = await axios
        .get(`/favorite/${user["userIdx"]}`)
        .then((res) => res.data);
      setFavoriteMovie(response);
    };
    call();
  }, []);
  for (let i = 0; i < Object.keys(favoriteMovie).length; i++) {
    favoriteList.push(
      <div style={{ flexDirection: "column", display: "flex" }}>
        <SearchMoviePoster src={favoriteMovie[i]["movie_img_link"]} />
        <span>{favoriteMovie[i]["movie_title"]}</span>
      </div>
    );
  }
  return (
    <>
      <Nav />

      <div style={{ marginBottom: "20px" }}>
        <BoldTitle>{user["userNickname"]}님이 보고싶은 영화</BoldTitle>
      </div>
      <div style={{ display: "flex" }}>{favoriteList}</div>
    </>
  );
}
export default Like;
