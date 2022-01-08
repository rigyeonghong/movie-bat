
# **영화밭 (Movie batt)**

## “독립영화 캐가세요” *Dig it out! from the field*


**⚡ OTT 바깥의 세상, 독립영화 추천 서비스**

- 유저가 상업영화를 선택하면 그와 유사하며 작품성 있는 독립영화를 추천합니다.<br />
- 이를 기반으로 독립영화 큐레이션 및 상세 페이지와 영화제 정보를 제공합니다.

<img src="https://kdt-gitlab.elice.io/003-part3-ottservice/team13/project-template/-/raw/47fb769d71ea4f8e21647a66650a81f72027e679/project-dancingMachine-logo.png" alt="project-dancingMachine-logo" width="500px">

> (영화 #f15a24, 밭 #fcee21, dot #000000)

## 1. 소개 Introduce

### 데이터셋 _DATA set_

1. Independant Movies
    - KMDb api
    - NAVER api
2. COVID-19 X OTT
    - COVID19BOARD : [http://www.covid19board.kr/culture](http://www.covid19board.kr/culture)
    - 미디어통계포털 : [https://stat.kisdi.re.kr/kor/search/SearchList.html](https://stat.kisdi.re.kr/kor/search/SearchList.html)
    - 영화진흥위원회 : [https://www.kobis.or.kr/kobis/business/stat/them/findYearlyTotalList.do](https://www.kobis.or.kr/kobis/business/stat/them/findYearlyTotalList.do)
    
- 인사이트
    - 독립영화 데이터셋 구축
        - 추천 알고리즘 구성
    - 소개 페이지
        - COVID-19에 따른 신흥(OTT) 및 전통(영화관) 미디어 시장 비교 
        → 코로나 시대 인사이트 도출
        - 장르 파이 차트 → 다양한 장르 제시
        - 워드클라우드 → 줄거리 키워드 흥미 유도

### 기술 스택 _Technology stack_

- 버전 관리
    - Git → GitLab

| 🔴Front-end | 🔵Back-end | 🟢Data-analysis |
| :---: | :---: | :---: |
|React<br />React-bootstrap<br />Recoil<br />Styled-components<br />Axios<br />|Python<br />Flask<br />SQLite<br />SQLAlchemy<br />MySQL<br />Docker<br />gitlab-runner<br />|Jupyter<br />Python<br />JSON<br />|

### 라이브러리 _Library_

| 🔴Front-end | 🔵Back-end | 🟢Data-analysis |
| :---: | :---: | :---: |
| axios<br />bootstrap<br />react<br />react-bootstrap<br />react-dom<br />react-router-dom<br />react-scripts<br />recoil<br />recoil-persist<br />styled-components<br />Chart.js| flask<br />Flask-Migrate<br />Flask-SQLAlchemy<br />SQLAlchemy<br />Werkzeug<br />PyMySQL<br />pytz<br />requests|Numpy<br />Pandas<br />Matplotlib<br />Seaborn<br />Wordcloud<br />`Python`<br />- urllib<br />- time<br />-    difflib<br />-    re<br />`KoNLPY`<br />-    hannanum<br />`sklearn`<br />-    [TfidfVectorizer](https://scikit-learn.org/stable/modules/generated/sklearn.feature_extraction.text.TfidfVectorizer.html)<br />-    cosine_similarity|

### 웹서비스 개요 _Information Architecture, IA_

<img src="https://kdt-gitlab.elice.io/003-part3-ottservice/team13/project-template/-/raw/master/project-dancingMachine_IA.png" alt="project-dancingMachine_IA">

## 2. 목표 Target

### [문제 정의] 아이디어 동기

- COVID-19 바이러스 확산으로 컨텐츠 소비 행태가 달라졌다.
- 영화관에 가지 않고 OTT 서비스를 이용하여 미디어를 소비한다.
- 그런데 구독(혹은 사용)하고 있는 OTT 서비스 안에서만 컨텐츠를 대체로 소비한다. _(타겟 유저)_
- **그러면 OTT 서비스에 선택받지 못한 컨텐츠들은 어디로 갔는가?**
- 특히, 상업영화가 아닌 독립영화는 시장에서 어떠한가?

### [가설 설정] 문제를 해결하기 위한 특정 질문

- **독립영화가 모여있는 사이트를 통해 유저에게 취향에 맞는 독립영화를 추천한다면?**
- 유저는 취향과 유사하고 작품성이 높은 추천 독립영화를 소비한 후에 만족도가 높을 것이고, 이후 그 외의 독립영화에 관심이 생길 것이다.

### [기대 효과] 해결하려는 문제

- 독립영화에 대한 관심
- 컨텐츠 소비 다양성
- 독립영화 취향 수집 및 기록
- (추가) 상영관 및 관람 가능한 링크 연결

## 3. 기능 Function

### 주요 기능 _Main function_

- **취향 기반 독립영화 추천 서비스**
    - 유저가 회원가입을 할 때 상업영화를 고르면, 그와 유사하며 작품성 있는 독립영화를 추천한다.
    - 그 외의 작품들도 확인할 수 있다.
- **독립영화제 소개**
    - 유저가 회원가입을 할 때 거주지를 선택하면, 해당 지역에서 개최되는 영화제를 지도 위에 나타내어 소개한다.
    - 그 외의 지역도 확인할 수 있다.

### 서브 기능 _Sub function_

- 회원 기능
    - 회원가입, 로그인/로그아웃
    - 카카오 소셜 로그인
    - 댓글 (작성, 수정, 삭제)
    - 찜 (북마크)
- 페이지
    - 검색 (영화 제목, 감독, 장르)
    - 사이트 소개 페이지
    - 회원 취향에 따른 영화 추천 페이지
    - 회원 거주지에 따른 영화제 소개 페이지
    - 팀 소개 페이지

### 차별점 _Discrimination_

- **독립영화 전용 사이트**: 커뮤니티
    - 댓글 소통 및 영화 찜하기로 관심도를 파악할 수 있다.
- **추천 알고리즘 로직 적용**: 취향 큐레이션
    - 작품성과 취향 유사도를 통해 만족도 높은 컨텐츠를 추천받을 수 있다.

### 기대효과 _Expectation effectiveness_

- 상업영화 이외의 독립영화 관심 증가할 수 있다. _**#작품성**_
- 컨텐츠 소비의 다양성 확대를 기대할 수 있다. _**#다양성**_

## 4. 구성도 Diagram

### 와이어프레임 _Wire frame_

[(Click) _project-dancingMachine_ Whimsical](https://whimsical.com/project-dancingmachine-BifkUYgejVPHK8P7mMBgAJ)

> 🍑 P/W → peach

## 5. 팀원 Team member

| 이름 | 역할 | 개발 내용  |
| :---: | :---: | :---: |
| 신동은 | 🔴Front-end<br />Project-assistant, PA | 서비스 디자인 구상<br />소개 페이지 개발<br />팀 소개 페이지 개발 |
| 채지원 | 🔴Front-end<br />Project-leader, PL | 서비스 디자인 구상<br />영화 추천 페이지 개발<br />영화제 소개 페이지 개발<br />로그인 페이지 개발<br />취향 선택 포함 회원가입 페이지 개발 |
| 홍리경 | 🔵Back-end<br />Project-assistant, PA | DB설계<br />API 설계<br />웹 서비스 배포 |
| 홍의 | 🔵Back-end<br />Project-leader, PL | DB설계<br />서버 배포<br />페이지 기능 구현<br />유저 인터렉션에 따른 추천 알고리즘 연결 |
| 서상훈 | 🟢Data-analysis<br />Project-leader, PL | API 호출을 통한 영화제 데이터셋 구축<br />영화제 퀄리티 기반 작품 추천 알고리즘 개발<br />웹 서비스 아이디어 도출 및 기획 |
| 이상은 | 🟢Data-analysis, _**팀리더**_<br />Project-manager, PM | 프로젝트 문서 작성 및 자원 운용<br />영화 플롯 데이터 기반 유사도 검출 모델 개발<br /> 웹 서비스 기획 및 스토리라인 브랜딩|

## 6. 버전 Version

- [x] ver1.0 (2022-01-08)

## 7. FAQ

- [x] Flask-Migrate
