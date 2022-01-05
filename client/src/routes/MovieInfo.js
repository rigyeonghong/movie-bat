import React, { useEffect, useState } from "react";
import axios from "axios";
import Nav from "../components/Navigation";
import { Button, Dropdown, DropdownButton } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import {
  Background,
  LikeBtnWrapper,
  MovieDetailWrapper,
  MovieDetailImg,
  MovieDetailImgWrapper,
  MovieDetailIndex,
  MovieInfoContainer,
  FlexContainer,
  MovieDetailTitle,
  MovieDetailMainInfo,
  ModalContainer,
} from "../styles/theme";
import { movieDetailInfo, reviewData } from "../dummy";
import { useParams } from "react-router-dom";
import ReviewItem from "../components/Review/ReviewItem";
import ReviewListBtn from "../components/Review/ReviewListBtn";
import WriteReview from "../components/Review/WriteReview";
import RatingStar from "../components/Review/RatingStar";
// import StarRatingComponent from "react-star-rating-component";
function MovieDetail() {
  let params = useParams();
  const [rating, setRating] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [curReviewPage, setCurReviewPage] = useState(0);
  const [movieInfo, setMovieInfo] = useState([]);
  const [stillCuts, setStillCuts] = useState([]);
  const [reviews, setReviews] = useState([]);
  let reviewList = [];
  for (let i = (curReviewPage + 1) * 5 - 5; i < (curReviewPage + 1) * 5; i++) {
    if (i > Object.keys(reviews) - 1 || Object.keys(reviews).length == 0) break;
    reviewList.push(
      <ReviewItem
        nickName={"reviewData[i].user_nick"}
        idx={reviewData[i].review_idx}
        content={reviewData[i].review_content}
        rating={reviewData[i].review_rating}
        date={reviewData[i].review_date}
      />
    );
  }
  useEffect(() => {
    const movieIndex = params.idx;
    const call = async () => {
      const response = await axios
        .get(`/movies/detail/${movieIndex}`)
        .then((res) => res.data);
      setMovieInfo(response[0]);
      setReviews(response[1]);
      let stills = response[0].movie_stills.split(",");
      setStillCuts(stills);
    };
    call();
  }, []);
  return (
    <>
      <Nav />
      <MovieInfoContainer>
        <FlexContainer>
          <MovieDetailImgWrapper>
            <MovieDetailImg src={movieInfo.movie_img_link} />
          </MovieDetailImgWrapper>
          <div>
            <MovieDetailTitle>
              {movieInfo.movie_title}
              {`(${movieInfo.movie_year})`}
            </MovieDetailTitle>
            <MovieDetailMainInfo>
              <b>장르</b> {movieInfo.movie_genre}
            </MovieDetailMainInfo>
            <MovieDetailMainInfo>
              <b>상영시간</b> {movieInfo.movie_runtime}분
            </MovieDetailMainInfo>
            <MovieDetailMainInfo>
              <b>감독</b> {movieInfo.movie_director}
            </MovieDetailMainInfo>
            <MovieDetailMainInfo>
              <b>배우</b> {movieInfo.movie_actors}
            </MovieDetailMainInfo>
          </div>
          <LikeBtnWrapper>
            <Button
              // TODO 찜 되어 있는지 받아오기
              variant={1 ? "danger" : "outline-danger"}
              onClick={() => alert("아구찜")}
            >
              찜
            </Button>
            <Button onClick={() => setIsOpen(true)}>리뷰쓰기</Button>
          </LikeBtnWrapper>
        </FlexContainer>

        <MovieDetailWrapper>
          <MovieDetailIndex>줄거리</MovieDetailIndex>
          <p>{movieInfo.movie_plot}</p>
        </MovieDetailWrapper>

        <MovieDetailWrapper>
          <MovieDetailIndex>트레일러</MovieDetailIndex>
          <div>
            {stillCuts.map((item) => (
              <img src={item} />
            ))}
          </div>
        </MovieDetailWrapper>
        <MovieDetailWrapper>
          <MovieDetailIndex>리뷰</MovieDetailIndex>

          {reviewList}
          <ReviewListBtn
            curReviewPage={curReviewPage}
            setCurReviewPage={setCurReviewPage}
            reviewListLen={reviewData.length}
          />
        </MovieDetailWrapper>
      </MovieInfoContainer>
      {isOpen ? (
        <Background onClick={() => setIsOpen(false)}>
          <ModalContainer onClick={(e) => e.stopPropagation()}>
            <div>
              <h2>Rating from state: {rating}</h2>
              {/* <StarRatingComponent
                name="rating"
                starCount={10}
                value={rating}
                onStarClick={(e) => setRating(e)}
              /> */}
            </div>
            <WriteReview />
            <Button
              onClick={() => {
                alert("제출 완료!");
                setIsOpen(false);
              }}
            >
              작성 완료
            </Button>
            <Button onClick={() => setIsOpen(false)}>취소</Button>
          </ModalContainer>
        </Background>
      ) : (
        <></>
      )}
    </>
  );
}
export default MovieDetail;
