import Nav from "../components/Navigation";
import { Container, Row, Col, Figure } from "react-bootstrap";
import { LoginWrapper } from "../styles/theme";

function MovieInfo() {
  return (
    <>
      <Nav />
      <Container>
        <Row>
          <Col>
            <img
              style={{ width: "300px" }}
              src="https://ssl.pstatic.net/imgmovie/mdi/mit110/2116/211602_P01_144722.jpg"
            />
          </Col>
          <Col xs>
            <span>영화 제목</span>
            <span>냠냠이의 모험</span>
          </Col>
          <Col>
            <button>찜</button>
          </Col>
        </Row>
        <Row>줄거리줄거리</Row>
        <Row>트레일러</Row>
        <Row>이미지들</Row>
        <Row>댓글</Row>
      </Container>
    </>
  );
}
export default MovieInfo;
