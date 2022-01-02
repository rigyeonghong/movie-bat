import React from "react";

function ReviewListBtn({ curReviewPage, setCurReviewPage, reviewListLen }) {
  let btnList = [];
  let startPage = parseInt(curReviewPage / 5) * 5; //현재 중 가장 첫 페이지
  let lastPage = parseInt(reviewListLen / 5); //가장 마지막 페이지
  btnList.push(
    <button
      onClick={() =>
        setCurReviewPage(curReviewPage - 5 > 0 ? curReviewPage - 5 : 0)
      }
    >
      이전
    </button>
  );

  for (let i = startPage; i < startPage + 5; i++) {
    if (i > reviewListLen / 5) break;
    btnList.push(<button onClick={() => setCurReviewPage(i)}>{i + 1}</button>);
  }
  btnList.push(
    <button onClick={() => setCurReviewPage(startPage + 5)}>다음</button>
  );
  return <>{btnList}</>;
}
export default ReviewListBtn;
