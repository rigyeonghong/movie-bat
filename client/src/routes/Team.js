import React from "react";
import { renderMatches } from "react-router-dom";
import Navigation from "../components/Navigation";
import "./teamcss.css";

const ProfileImage = ({ imgSrc, alt }) => {
  return (
    <img
      src={imgSrc}
      alt={alt}
      title={alt}
      className="profile_image"
      width="150"
      height="150"
      align="center"
      border="0"
    />
  );
};

const Profile = ({ imgSrc, name, team, recommend, caption }) => {
  return (
    <div className="profile">
      <div className="img">
        <ProfileImage imgSrc={imgSrc} />
      </div>
      <div className="text">
        <h3 className="name">{name}</h3>
        <div className="team">{team}</div>
        <div className="recommend">{recommend}</div>
        <div className="caption">{caption}</div>
      </div>
    </div>
  );
};

function Team() {
  var teammates = [
    ["A", "팀", "추천작", "A는 이런 말"],
    ["B", "팀", "추천작", "B는 이런 말"],
    ["C", "팀", "추천작", "C는 이런 말"],
    ["D", "팀", "추천작", "D는 이런 말"],
    ["E", "팀", "추천작", "E는 이런 말"],
    ["F", "팀", "추천작", "F는 이런 말"],
  ];
  return (
    <>
      <Navigation />

      <p>
        {teammates.map((t) => (
          <>
            <Profile
              imgSrc={
                "http://t1.daumcdn.net/friends/prod/editor/dc8b3d02-a15a-4afa-a88b-989cf2a50476.jpg"
              }
              name={t[0]}
              team={t[1]}
              recommend={t[2]}
              caption={t[3]}
            />
          </>
        ))}
      </p>
    </>
  );
}
export default Team;
