import React from "react";
import { Form } from "react-bootstrap";
import { ReactComponent as HalfStar } from "../../assets/star-half.svg";
<<<<<<< HEAD
function WriteReview() {
=======
function WriteReview({ setReviewContent }) {
>>>>>>> master
  return (
    <>
      <Form>
        <Form.Group className="mb-3" controlId="writeContent">
<<<<<<< HEAD
          <Form.Control as="textarea" rows={3} />
=======
          <Form.Control
            as="textarea"
            rows={5}
            onChange={(e) => setReviewContent(e.target.value)}
          />
>>>>>>> master
        </Form.Group>
      </Form>
    </>
  );
}
export default WriteReview;
