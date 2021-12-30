import React from "react";
import { renderMatches } from "react-router-dom";
import Navigation from "../components/Navigation";

const ProfileImage = ({ imgSrc, alt }) => {
  return <img src={imgSrc} alt={alt} title={alt} className="profile_image" />;
};
const Profile = ({ imgSrc, name, caption }) => {
  return (
    <div className="profile">
      <div className="img">{/* <ProfileImage imgSrc={imgSrc} /> */}</div>
      <div className="text">
        <div>Name: {name}</div>
        <div>caption : {caption}</div>
      </div>
    </div>
  );
};

function Team() {
  var teammates = [
    ["A", "A는 이런 말"],
    ["B", "B는 이런 말"],
    ["C", "C는 이런 말"],
    ["D", "D는 이런 말"],
    ["E", "E는 이런 말"],
    ["F", "F는 이런 말"],
  ];
  return (
    <>
      <Navigation />
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <p>
        {teammates.map((t) => (
          <>
            <Profile imgSrc={"이미지링크"} name={t[0]} caption={t[1]} />
            <br></br>
          </>
        ))}
      </p>
    </>
  );
}
export default Team;
