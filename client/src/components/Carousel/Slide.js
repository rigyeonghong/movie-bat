import React from "react";
import { Link } from "react-router-dom";
import {
  SlideItemWrapper,
  SlideMovieEmptyPic,
  SlideMoviePoster,
  SlideMovieTitle,
} from "../../styles/theme";
import { Figure } from "react-bootstrap";
function Slide({ url, title, movieIdx }) {
  return (
    <SlideItemWrapper>
      <Link to={`/movies/detail/${movieIdx}`}>
        {url ? (
          <SlideMoviePoster src={url} />
        ) : (
          <SlideMovieEmptyPic>
            <p style={{ position: "absolute", top: "5px", left: "5px" }}>
              No Picture !
            </p>
          </SlideMovieEmptyPic>
        )}
        <SlideMovieTitle>{title}</SlideMovieTitle>
      </Link>
    </SlideItemWrapper>
  );
}

export default Slide;
