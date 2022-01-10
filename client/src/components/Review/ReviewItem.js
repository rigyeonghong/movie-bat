import React from "react";
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
      ) : (
        <></>
      )}
      <hr />
    </>
  );
}
export default ReviewItem;
