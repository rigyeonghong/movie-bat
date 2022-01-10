import React from "react";
import { Form } from "react-bootstrap";
import { ReactComponent as HalfStar } from "../../assets/star-half.svg";
function WriteReview({ setReviewContent }) {
  return (
    <>
      <Form>
        <Form.Group className="mb-3" controlId="writeContent">
          <Form.Control
            as="textarea"
            rows={5}
            onChange={(e) => setReviewContent(e.target.value)}
          />
        </Form.Group>
      </Form>
    </>
  );
}
export default WriteReview;
