import React from "react";
<<<<<<< HEAD
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
=======
import { Button } from "react-bootstrap";
import { userState } from "../../state";
import { useRecoilValue, useResetRecoilState } from "recoil";
function ReviewItem({
  content,
  userIdx,
  reviewIdx,
  date,
  editReview,
  deleteReview,
  setEditOpen,
}) {
  const user = useRecoilValue(userState);
  return (
    <>
      <div>{content}</div>
      <div>{date.slice(0, 10)}</div>
      {user["userIdx"] == userIdx ? (
        <>
          <Button
            // onClick={() => {
            //   editReview();
            // }}
            onClick={() => setEditOpen(true)}
          >
            수정
          </Button>
          <Button
            onClick={() => {
              deleteReview();
            }}
          >
            삭제
          </Button>
        </>
>>>>>>> master
      ) : (
        <></>
      )}
      <hr />
    </>
  );
}
export default ReviewItem;
