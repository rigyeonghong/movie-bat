import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import Navigation from "../components/Navigation";
import { BoldTitle } from "../styles/theme";
function Search() {
  let params = useParams();
  const searchKeyword = params.keyword;
  const [titleResult, setTitleResult] = useState([]);
  const [directorResult, setDirectorResult] = useState([]);
  const [genreResult, setGenreResult] = useState([]);

  useEffect(() => {
    const getSearch = async () => {
      const response = await axios
        .get(`/search/movies/${searchKeyword}`)
        .then((res) => res.data);
      console.log(response);
      for (let i = 0; i < Object.keys(response[0]).length; i++) {
        let newTitleResult = [...titleResult];
        newTitleResult.push(
          <div>
            <Link to={`/movies/detail/${response[0][i]["movie_idx"]}`}>
              <img src={response[0][i]["movie_posterUrl"]} />
              <p>{response[0][i]["movie_title"]}</p>
            </Link>
          </div>
        );
        setTitleResult(newTitleResult);
      }
      for (let i = 0; i < Object.keys(response[1]).length; i++) {
        let newDirectorResult = [...directorResult];
        newDirectorResult.push(
          <div>
            <Link to={`/movies/detail/${response[1][i]["movie_idx"]}`}>
              <img src={response[1][i]["movie_posterUrl"]} />
              <p>{response[1][i]["movie_title"]}</p>
            </Link>
          </div>
        );
        setDirectorResult(newDirectorResult);
      }
      for (let i = 0; i < Object.keys(response[2]).length; i++) {
        let newGenreResult = [...genreResult];
        newGenreResult.push(
          <div>
            <Link to={`/movies/detail/${response[2][i]["movie_idx"]}`}>
              <img src={response[2][i]["movie_posterUrl"]} />
              <p>{response[2][i]["movie_title"]}</p>
            </Link>
          </div>
        );
        setGenreResult(newGenreResult);
      }
    };
    getSearch();
  }, []);

  return (
    <>
      <Navigation />
      <div>
        <BoldTitle>{searchKeyword} 검색 결과</BoldTitle>

        {titleResult.length ? titleResult : <></>}

        {directorResult.length ? directorResult : <></>}

        {genreResult.length ? genreResult : <></>}
      </div>
    </>
  );
}
export default Search;
