import React from "react";
import "./main.css";
import { Link } from "react-router-dom";
import styled from "styled-components";
import "./style.css";
import { useState, useEffect } from "react";

let tableContent = [
  {
    title: "다양한 프로그램 운영",
    content: `이화이언은 재학생들이 직접 운영하고 있는 '이화를 사랑하는 사람들을 위한' 비영리 집단입니다. 
        이화이언을 이용하는 벗들을 위한 다양한 프로그램을 운영하기 위해 활동하는 이화이언 운영진은, 마케팅팀,
        디자인팀, 웹개발팀으로 구성되어 있습니다.`,
  },
  {
    title: "이화 안의 더 큰 만남",
    content: `이화이언 온라인에서는 다양한 컨텐츠와 이벤트를 통해 이용자들에게 많은 혜택과 정보를 제공합니다. 
        이화이언은 탄생 이래 이화인들의 가장 많은 사랑을 받은 ‘비밀의 화원’부터, 다양한 기사가 올라오는 컨텐츠 카테고리, 
        이화에서 생활하기 위해 꼭 필요한 정보들이 가득한 캠퍼스 카테고리, 열린광장, 벼룩시장 등이 있는 라이프 카테고리까지! 
        처음 이화의 문을 열고 들어온 새내기, 이화의 베테랑이 된 정든내기, 졸업한 선배님까지 
        이화이언 안에서 ‘이화 안의 더 큰 만남’을 이루고 있습니다. `,
  },
  {
    title: "오프라인 이벤트",
    content: `또한, 이화이언은 온라인 뿐만 아니라 오프라인에서도 많은 활동들을 진행하고 있습니다. 
        다소 지칠 수 있는 학교 생활 속 이화이언이 각각 5월, 11월에 여는 오월드림과 배꽃정원은 
        화연들에게 매번 색다른 즐거움을 선사하고 있습니다.`,
  },
  {
    title: <img src="../img/Frame.svg" className="smallimage" />,
    content: `이처럼 이화이언은 ‘이화를 사랑하는 사람들의 모임’으로 더 많은 이화인들이 함께할 수 있는 공간을 지향합니다. 
        이화를 사랑하는 사람이라면 누구든지 이화이언이라 할 수 있습니다. 
        이화를 위한 공간을 만들겠다는 처음 그 신념 그대로 이화인들의 더 활기차고 따뜻한 하루하루를 만들기 위해 최선을 다할 것입니다. 
        ‘이화 안의 더 큰 만남’, 이화이언에서 함께하세요!`,
  },
];

let teamInfo = [
  {
    name: "마케팅팀",
    content1: "5월 행사, 11월 행사 기획",
    content_1: "기획안 작성, 협찬 기업 컨택, 각종 게시글 작성, 협찬 물품 관리",
    content2: "이화이언 SNS 운영 관리",
    content_2: "행사 홍보 및 각종 정보성 게시글 작성",
    content3: "외부 이벤트 대행",
    content_3: "제휴 제안, 컨택 및 이벤트 세부사항 조율",
  },
  {
    name: "디자인팀",
    content1: "행사 홍보물 디자인",
    content_1: "5월, 11월 행사 포스터, 배너, 팝업, 굿즈, 웹페이지 등 제작",
    content2: "이화이언 콘텐츠 제작",
    content_2: "웹툰, 계절배너, 게시글 등 제작",
    content3: "디자인 툴 스터디",
    content_3: "Adobe Photoshop, Illustrator 등",
  },
  {
    name: "웹개발팀",
    content1: "행사 사이트 기획/개발",
    content_1:
      "마케팅팀, 디자인팀과 협업하여 행사에 필요한 웹페이지 배포 후 행사에 사용",
    content2: "이화이언 운영진 프로그램 제작",
    content_2: "리크루팅 사이트와 같은 이화이언 운영에 필요한 소프트웨어 개발",
    content3: "웹프로그래밍 언어 스터디",
    content_3: "HTML, CSS, JavaScript, Node.js, MYSQL, Bootstrap, React 등",
  },
];

const activities = [
  {
    img: "../img/2021pearflower.jpeg",
    title: "배꽃정원",
    des: "2021.11.15 ~ 2021.11.26",
    link: "http://www.ewhaian.com/Ewha_board/Ewha_View.asp?psize=1&page=1&es_idx=0&ct_idx=0&bm_idx=11&sfield=&bp_idx=2073922&orderby=0&startDt=2001-01-01&endDt=2022-01-24&sword_type=&inputTagList=&bordtype=&sword=&useSdate=&sword2=5707819",
  },
  {
    img: "../img/20thspring.svg",
    title: "이화이언 스무 번째 봄",
    des: "2021.05.17 ~ 2021.05.23",
    link: "http://www.ewhaian.com/Ewha_board/Ewha_View.asp?psize=1&page=1&es_idx=0&ct_idx=0&bm_idx=11&sfield=&bp_idx=2030159&orderby=0&startDt=2001-01-01&endDt=2021-08-23&sword_type=&inputTagList=&bordtype=&sword=&useSdate=&sword2=8384363",
  },
  {
    img: "../img/garden.svg",
    title: "배꽃정원",
    des: "2020.11.16 ~ 2020.11.22",
    link: "http://www.ewhaian.com/Ewha_board/Ewha_View.asp?psize=1&page=1&es_idx=0&ct_idx=0&bm_idx=11&sfield=&bp_idx=1953722&orderby=0&startDt=2001-01-01&endDt=2021-08-23&sword_type=&inputTagList=&bordtype=&sword=&useSdate=&sword2=6528086",
  },
  {
    img: "../img/cybercampus.svg",
    title: "사이버캠퍼스",
    des: "2020.05.18 ~ 2020.05.29",
    link: "http://www.ewhaian.com/Ewha_board/Ewha_View.asp?psize=1&page=1&es_idx=0&ct_idx=0&bm_idx=11&sfield=&bp_idx=1896845&orderby=0&startDt=2001-01-01&endDt=2021-08-23&sword_type=&inputTagList=&bordtype=&sword=&useSdate=&sword2=4752711",
  },
  {
    img: "../img/2019pearflower.svg",
    title: "배꽃정원",
    des: "2019.11.21",
    link: "http://www.ewhaian.com/Ewha_board/Ewha_View.asp?psize=1&page=1&es_idx=0&ct_idx=0&bm_idx=11&sfield=&bp_idx=1778635&orderby=0&startDt=2001-01-01&endDt=2021-08-25&sword_type=&inputTagList=&bordtype=&sword=&useSdate=&sword2=9369912",
  },
  {
    img: "../img/maydream.svg",
    title: "오월드림",
    des: "2019.05.23",
    link: "http://www.ewhaian.com/Ewha_board/Ewha_View.asp?psize=1&page=1&es_idx=0&ct_idx=0&bm_idx=11&sfield=&bp_idx=1720733&orderby=0&startDt=2001-01-01&endDt=2021-08-23&sword_type=&inputTagList=&bordtype=&sword=&useSdate=&sword2=9412045",
  },
  {
    img: "../img/2018pearflower.svg",
    title: "배꽃정원",
    des: "2018.11.29",
    link: "http://www.ewhaian.com/Ewha_board/Ewha_View.asp?psize=1&page=1&es_idx=0&ct_idx=0&bm_idx=11&sfield=&bp_idx=1628376&orderby=0&startDt=2001-01-01&endDt=2021-08-25&sword_type=&inputTagList=&bordtype=&sword=&useSdate=&sword2=8669192",
  },
  {
    img: "../img/1stbirth.png",
    title: "이화이언 생일파티",
    des: "2018.05.24",
    link: "http://www.ewhaian.com/Ewha_board/Ewha_View.asp?psize=1&page=1&es_idx=0&ct_idx=0&bm_idx=11&sfield=&bp_idx=1428124&orderby=0&startDt=2001-01-01&endDt=2021-08-25&sword_type=&inputTagList=&bordtype=&sword=&useSdate=&sword2=3445512",
  },
];
function Main() {
  const [activeColor, setActiveColor] = useState(1);
  const [scrollY, setScrollY] = useState(0);
  const [scrollActive, setScrollActive] = useState(false);

  function handleScroll() {
    if (window.scrollY > 299) {
      setScrollY(window.pageYOffset);
      setScrollActive(true);
    } else {
      setScrollY(window.pageYOffset);
      setScrollActive(false);
    }
  }

  useEffect(() => {
    function scrollListener() {
      window.addEventListener("scroll", handleScroll);
    }
    scrollListener();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  function handleNavColor() {
    if (window.scrollY > 0 && window.scrollY < 1600) {
      setScrollY(window.pageYOffset);
      setActiveColor(1);
    } else if (window.scrollY >= 1600 && window.scrollY < 3500) {
      setScrollY(window.pageYOffset);
      setActiveColor(2);
    } else if (window.scrollY >= 3500 && window.scrollY < 6269) {
      setScrollY(window.pageYOffset);
      setActiveColor(3);
    }
  }

  useEffect(() => {
    function scrollColorListener() {
      window.addEventListener("scroll", handleNavColor);
    }
    scrollColorListener();
    return () => {
      window.removeEventListener("scroll", handleNavColor);
    };
  }, [activeColor]);

  function ActivityCarousel() {
    return (
      <div>
        <div className="h_scroll">
          {activities.map((item) => {
            return (
              <div className="h_con">
                <div className="h_title_box">
                  <div className="h_atitle">{item.title}</div>
                  <br />
                  <div className="h_des">{item.des}</div>
                </div>
                <br />
                <div className="h_box">
                  <div className="h_box2">
                    <a href={item.link} className="h_to">
                      이벤트 스케치 바로가기
                    </a>
                    <br></br>
                    <img className="h_poster" src={item.img} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
  return (
    <div>
      <div className="banner">
        <img src="../img/pre41thBanner.png" />
      </div>
      <div className={scrollActive ? "scrollbox-fixed" : "scrollbox"}>
        <a
          href="/##ewhaian-introduce"
          onClick={() => setActiveColor(1)}
          className="tap_fix"
        >
          <div className={activeColor === 1 ? "scrollLi-active" : "scrollLi"}>
            이화이언 소개
          </div>
        </a>
        <a href="/##last-ewhaian" onClick={() => setActiveColor(2)}>
          <div className={activeColor === 2 ? "scrollLi-active" : "scrollLi"}>
            지난 이화이언
          </div>
        </a>
        <a
          href="/##team-introduce"
          onClick={() => setActiveColor(3)}
          className="tap_fix2"
        >
          <div className={activeColor === 3 ? "scrollLi-active" : "scrollLi"}>
            팀 소개
          </div>
        </a>
        <br />
      </div>
      <div className="logo1" id="#ewhaian-introduce">
        <img src="../img/Frame.svg" />
      </div>

      <span className="ewhaiantext">
        이화여대 최대의 온라인 커뮤니티이자 이화의 재학생 및 졸업생들이 교류하고
        소통할 수 있는 공간, 이화이언을 소개합니다!
      </span>

      <BackImage>
        <img src="../img/computer_final_ver.png" className="ewhaianimage" />
      </BackImage>

      <table className="table">
        {tableContent.map((list, i) => {
          return (
            <tr className="tr">
              <td className="title">{tableContent[i].title}</td>
              <td className="content">{tableContent[i].content}</td>
            </tr>
          );
        })}
      </table>

      {/* 지난 이화이언 */}
      <div id="#last-ewhaian" style={{ marginTop: "1700px" }}></div>
      <div className="h_text">이화이언의 발자국들</div>
      <LastEwhaian>지난 이화이언</LastEwhaian>
      <img src="../img/history_final_ver.png" className="history" />
      <div className="stitle">ACTIVITIES</div>
      <div className="h_next">옆으로 넘겨보세요!</div>
      <br />
      <br />
      <ActivityCarousel />

      {/* 팀 소개 */}
      <div
        id="#team-introduce"
        className="team-atag"
        style={{ marginTop: "30px" }}
      ></div>
      <Team id="#team-introduce">TEAM</Team>

      <div className="teamIntroduce">
        {teamInfo.map((list, i) => {
          return (
            <div className="teamContent">
              <img src={"../img/team" + (i + 1) + ".svg"} />
              <div className="team-name">{teamInfo[i].name}</div>
              <br />
              <div className="teamlist" style={{ marginTop: "70px" }}>
                <Circle>1</Circle>
                <div className="team-explanation">{teamInfo[i].content1}</div>
              </div>
              <div className="team-explanation_">{teamInfo[i].content_1}</div>
              <br />
              <div className="teamlist">
                <Circle>2</Circle>
                <div className="team-explanation">{teamInfo[i].content2}</div>
              </div>
              <div className="team-explanation_">{teamInfo[i].content_2}</div>
              <br />
              <div className="teamlist">
                <Circle>3</Circle>
                <div className="team-explanation">{teamInfo[i].content3}</div>
              </div>
              <div className="team-explanation_">{teamInfo[i].content_3}</div>
            </div>
          );
        })}
      </div>

      {/* 버튼 2개 */}
      <div className="button-design">
        <button className="_button">
          <Link
            to="/applyClosed"
            style={{ textDecoration: "none", color: "#ec1468" }}
          >
            지원하기
          </Link>
        </button>
        <button className="_button">
          <Link
            to="/result"
            style={{ textDecoration: "none", color: "#ec1468" }}
          >
            결과확인
          </Link>
        </button>
      </div>

      <div className="contact-all">
        <div className="contact-title">CONTACT</div>

        <div className="h_wrap">
          <div className="h_contact">
            <div className="btitle">전체 메일</div>
            <div className="h_content">ewhaianrecruit@daum.net</div>
          </div>

          <div className="h_contact">
            <div className="btitle">카카오톡</div>
            <div className="h_content">
              채널 "이화이언 41기 수습운영진 모집"
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;

const Team = styled.div`
  margin-top: 200px;
  font-style: normal;
  font-weight: bold;
  font-size: 35px;
  line-height: 54px;
  text-align: center;
  color: #ec1468;
  margin-bottom: 100px;
`;

const Circle = styled.div`
  width: 30px;
  height: 30px;
  margin-left: 25px;
  background: #ffffff;
  border: 1px solid #ec1468;
  box-sizing: border-box;
  border-radius: 50%;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 30px;
  display: flex;
  justify-content: center;

  color: #ec1468;
`;

const BackImage = styled.div`
  position: absolute;
  width: 100%;
  height: 240px;
  left: 0px;
  margin-top: 460px;
  background: #ec1468;
  display: flex;
  justify-content: center;
  @media screen and (max-width: 900px) {
    height: 23vh;
  }

  @media screen and (max-width: 700px) {
    height: 19vh;
  }

  @media screen and (max-width: 500px) {
    height: 10vh;
  }
`;

const LastEwhaian = styled.div`
  margin-bottom: 20px;
  text-align: center;
  font-style: normal;
  font-weight: 800;
  line-height: 90px;
  font-size: 40px;
  @media screen and (max-width: 900px) {
    font-size: 32px;
  }
`;
