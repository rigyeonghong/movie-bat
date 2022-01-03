import React from "react";
import Star from "./Star";
import { userState } from "../../state";
import { useRecoilValue, useResetRecoilState } from "recoil";
function ReviewItem({ nickName, idx, content, rating, date }) {
  const user = useRecoilValue(userState);
  return (
    <>
      <Star rating={rating} />
      <span>{rating}</span>
      <br />
      <span>{nickName}</span> <span>{idx}</span>
      <div>{content}</div>
      <div>{date}</div>
      {user[1] == nickName ? (
        <button onClick={() => alert("삭제하지마요.........")}>삭제</button>
      ) : (
        <></>
      )}
      <hr />
    </>
  );
}
export default ReviewItem;
