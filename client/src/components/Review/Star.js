import React from "react";
import { ReactComponent as FullStar } from "../../assets/star-fill.svg";
import { ReactComponent as HalfStar } from "../../assets/star-half.svg";
import { ReactComponent as EmptyStar } from "../../assets/star.svg";
function Star({ rating }) {
  let star_list = [];
  for (let i = 0; i < rating / 2 - 1; i++) {
    star_list.push(<FullStar />);
  }
  if (rating > 0)
    rating % 2 ? star_list.push(<HalfStar />) : star_list.push(<FullStar />);
  for (let i = 0; i < (9 - rating) / 2; i++) {
    star_list.push(<EmptyStar />);
  }
  return <span>{star_list}</span>;
}
export default Star;
