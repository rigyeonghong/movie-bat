import { Carousel } from "react-bootstrap";
function BigCarousel({ subject }) {
  let movie_list = subject.map((item, index) => (
    <Carousel.Item key={index}>
      <img className="d-block w-100" src={item.posterUrl} />
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
