import React from "react";
import Star from "./Star";
function ReviewItem({ nickName, idx, content, rating, date }) {
  return (
    <>
      <Star rating={rating} />
      <span>{rating}</span>
      <br />
      <span>{nickName}</span> <span>{idx}</span>
      <div>{content}</div>
      <div>{date}</div>
      <hr />
    </>
  );
}
export default ReviewItem;
