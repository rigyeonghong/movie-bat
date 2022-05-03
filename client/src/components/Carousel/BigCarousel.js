import { Carousel } from "react-bootstrap";
<<<<<<< HEAD
function BigCarousel({ subject }) {
  let movie_list = subject.map((item, index) => (
    <Carousel.Item key={index}>
      <img
        className="d-block w-100"
        style={{ height: "400px", objectFit: "cover" }}
        src={item.posterUrl}
      />
=======
import { Link } from "react-router-dom";

function BigCarousel({ subject }) {
  let movie_list = subject.map((item, index) => (
    <Carousel.Item key={index}>
      <Link to={`detail/${item.movieIdx}`}>
        <img
          className="d-block w-100"
          style={{ height: "400px", objectFit: "cover" }}
          src={item.posterUrl}
        />
      </Link>
>>>>>>> master
      <Carousel.Caption>
        <h3>{item.title}</h3>
        <h5>{item.description}</h5>
      </Carousel.Caption>
    </Carousel.Item>
  ));
  return (
    <>
      <Carousel>{movie_list}</Carousel>
    </>
  );
}
export default BigCarousel;
