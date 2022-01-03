import React from "react";
import { Button } from "react-bootstrap";

function ReviewListBtn({ curReviewPage, setCurReviewPage, reviewListLen }) {
  let btnList = [];
  let startPage = parseInt(curReviewPage / 5) * 5; //현재 중 가장 첫 페이지
  let lastPage = parseInt(reviewListLen / 5); //가장 마지막 페이지
  btnList.push(
    <Button
      variant="warning"
      onClick={() =>
        setCurReviewPage(curReviewPage - 5 > 0 ? curReviewPage - 5 : 0)
      }
    >
      이전
    </Button>
  );

  for (let i = startPage; i < startPage + 5; i++) {
    if (i > reviewListLen / 5) break;
    btnList.push(
      <Button
        variant={curReviewPage == i ? "warning" : "outline-warning"}
        onClick={() => setCurReviewPage(i)}
      >
        {i + 1}
      </Button>
    );
  }
  btnList.push(
    <Button variant="warning" onClick={() => setCurReviewPage(startPage + 5)}>
      다음
    </Button>
  );
  return <div style={{ textAlign: "center" }}>{btnList}</div>;
}
export default ReviewListBtn;
