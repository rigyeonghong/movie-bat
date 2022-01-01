import Nav from "../components/Navigation";
import { Container, Row, Col, Figure } from "react-bootstrap";
import { LoginWrapper } from "../styles/theme";
import { movieDetailInfo } from "../dummy";

function MovieDetail() {
  return (
    <>
      <Nav />

      <div
        style={{
          maxWidth: "60vw",
          margin: "auto",
          position: "relative",
          marginTop: "4vh",
        }}
      >
        <div style={{ display: "flex" }}>
          <div style={{ float: "left" }}>
            <img
              src={movieDetailInfo.imageurl}
              style={{ width: "10vw", marginRight: "2vw" }}
            />
          </div>
          <div>
            <h2
              style={{ paddingRight: "20vw", borderBottom: "1px solid white" }}
            >
              {movieDetailInfo.title}
            </h2>
            <p>러닝타임: {movieDetailInfo.runningtime}</p>
            <p>감독: {movieDetailInfo.director}</p>
            <p>배우: {movieDetailInfo.actor}</p>
            <p>장르: {movieDetailInfo.genre}</p>
          </div>
          <div style={{ position: "absolute", right: 0, top: "5vw" }}>
            <button>찜</button>
          </div>
        </div>

        <div
          style={{
            marginTop: "4vh",
          }}
        >
          <h4>줄거리</h4>
          <p>{movieDetailInfo.plot}</p>
        </div>

        <div>
          <h4>트레일러</h4>
          <div>여기는 예고 이미지 자리</div>
        </div>
      </div>
    </>
  );
}
export default MovieDetail;
