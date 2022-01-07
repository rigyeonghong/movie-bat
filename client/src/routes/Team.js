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
      width="275"
      height="170"
      align="center"
      border="0"
    />
  );
};

const Profile = ({ imgSrc, name, team, recommend, caption }) => {
  return (
    <div className="maincard">
      <div className="profile">
        <div className="thefront">
          <div className="img"><ProfileImage imgSrc={imgSrc} /></div>
          <h3 className="name">{name}</h3>
          <h6 className="team">{team} </h6>
          <div className="comment">커밋은 머신을 춤추게 한다⚡<br/>기술이 예술에게 줄 수 있는 걸 고민했습니다👊</div>
        </div>
        <div class="theback">
          <br/>
          <h7 className="recommend">{recommend}</h7>
          <br/>
          <br/>
          <p className="caption">{caption}</p>
        </div>
      </div>
    </div>
  );
};

function Team() {
  var teammates = [
    ["이상은", "DA/Project Manager", "투 올드 힙합 키드 (Too Old Hip-Hop Kid, 2011)", "2012년 겨울, 처음으로 상영관에 찾아가서 본 독립영화. 👀 우리도 지금 이 즈음 인 거 같다. 이 즈음 다들 꿈과 현실 사이의 갈등과 타협이 10년 전 10대 때 모습과 영화 속 현재인 20대의 모습이 고스란히 담겨져 있는 다큐. 또다시 10년이 지난 후 이들의 삶이 궁금하다. 시즌2 안 나오나요?"],
    ["서상훈", "DA Leader", "추천작", "B는 이런 말"],
    ["홍의", "BE Leader", "추천작", "C는 이런 말"],
    ["홍리경", "BE Assistant", "추천작", "D는 이런 말"],
    ["채지원", "FE Leader", "추천작", "E는 이런 말"],
    ["신동은", "FE Assistant", "추천작", "F는 이런 말"],
  ];
  return (
    <>
      <Navigation />

      <p>
        <h1 className="title">⚡댄스머신 이상은 팀을 소개합니다!⚡</h1>
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
