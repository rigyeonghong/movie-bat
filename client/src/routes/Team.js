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
<<<<<<< HEAD
      width="150"
      height="150"
=======
      width="275"
      height="170"
>>>>>>> master
      align="center"
      border="0"
    />
  );
};

<<<<<<< HEAD
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
=======
const Profile = ({ imgSrc, name, team, comment, recommend, caption }) => {
  return (
    <div className="maincard">
      <div className="profile">
        <div className="thefront">
          <div className="img"><ProfileImage imgSrc={imgSrc} /></div>
          <h3 className="name">{name}</h3>
          <h6 className="team">{team} </h6>
          <div className="comment">{comment}</div>
        </div>
        <div class="theback">
          <br/>
          <h7 className="recommend">{recommend}</h7>
          <br/>
          <br/>
          <p className="caption">{caption}</p>
        </div>
>>>>>>> master
      </div>
    </div>
  );
};

function Team() {
  var teammates = [
<<<<<<< HEAD
    ["A", "팀", "추천작", "A는 이런 말"],
    ["B", "팀", "추천작", "B는 이런 말"],
    ["C", "팀", "추천작", "C는 이런 말"],
    ["D", "팀", "추천작", "D는 이런 말"],
    ["E", "팀", "추천작", "E는 이런 말"],
    ["F", "팀", "추천작", "F는 이런 말"],
=======
    ["이상은", "DA/Project Manager", "커밋은 머신을 춤추게 한다⚡ 기술이 예술에게 줄 수 있는 걸 고민했습니다👊", "투 올드 힙합 키드, 2011", "2012년 겨울, 처음으로 상영관에 찾아가서 본 독립영화. 👀 우리도 지금 이 즈음 인 거 같다. 이 즈음 다들 꿈과 현실 사이의 갈등과 타협이 10년 전 10대 때 모습과 영화 속 현재인 20대의 모습이 고스란히 담겨져 있는 다큐. 또다시 10년이 지난 후 이들의 삶이 궁금하다. 시즌2 안 나오나요?"],
    ["서상훈", "DA Leader", "힘들고 길었던 3주였지만, 좋은 사람들과 함께해서 끝까지 오지 않았을까!", "로그 인 벨지움, 2021", "유태오 존잘...."],
    ["홍의", "BE Leader", "최고의 팀장님, 최고의 팀원분들과 함께 화기애애한 분위기로 프로젝트 진행할 수 있어서 너무 좋았습니다!", "똥파리, 2008", "이번 프로젝트 주제를 진행하면서 찾아보다 보고싶게 된 영화. 세상은 엿같고, 핏줄은 더럽게 아프다! 영화의 시놉시스도 눈에 띄고 주인공 이름도 팀원이름인 상훈이여서 더더욱 정이 가는 영화이다. 팀장님도 추천을 잔뜩해준 영화!!!"],
    ["홍리경", "BE Assistant", "좋은 사람들과 사용하기 편한 사이트를 고민했습니다.", "님아, 그 강을 건너지마오, 2013", "은은하니 미소짓게 만드는 예쁜 영화! 찐사랑 이야기가 녹아있으니 휴지 챙겨 보세요. 흐어어엉엉"],
    ["채지원", "FE Leader", "집에 있지만 집에 가고 싶은 날들의 연속이었지만 팀원분들 덕분에 버틸수 있었습니다 🙇‍♀️ 귀엽고 스윗한 우리 팀 최고 ^ㅇ^", "소공녀, 2017", "곰곰이 내 태도와 주변을 돌아보게 되는 영화였습니다! 유명한건 이유가 있어요👀"],
    ["신동은", "FE Assistant", "우리 팀 최공", "꿈의 제인, 2016", "구교환 배우의 연기는 최고! 이거 스포인데... 마지막에 제인이 사실은....."],
>>>>>>> master
  ];
  return (
    <>
      <Navigation />
<<<<<<< HEAD

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
=======
      <h1 className="title">⚡댄스머신 이상은 팀을 소개합니다!⚡</h1>
      <h5 className="subtitle">카드 뒷면의 추천작도 참고해 주세요!</h5>
      <div className="p">
        {teammates.map((t) => (
          <>
            <Profile 
              imgSrc={require(`../assets/${t[0]}.png`)}
              name={t[0]}
              team={t[1]}
              comment={t[2]}
              recommend={t[3]}
              caption={t[4]}
            />
          </>
        ))}
      </div>
>>>>>>> master
    </>
  );
}
export default Team;
