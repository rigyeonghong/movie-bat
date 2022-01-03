import React from "react";
import { Form } from "react-bootstrap";
import { ReactComponent as HalfStar } from "../../assets/star-half.svg";
function WriteReview() {
  return (
    <>
      <Form>
        <Form.Group className="mb-3" controlId="writeContent">
          <Form.Label>리뷰 작성</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
      </Form>
    </>
  );
}
export default WriteReview;
