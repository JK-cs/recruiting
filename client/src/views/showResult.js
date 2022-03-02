import React, { useState, useEffect } from "react";
import "./style.css";
import "./result.css";
import axios from "axios";

import styled from "styled-components";

function ShowResult(props) {
  const [final, setFinal] = useState("");
  const [team, setTeam] = useState("");
  const [name, setName] = useState("");
  const First = () => {
    return (
      <Container>
        <div className="r_title">결과 확인</div>
        <div>
          <div className="r_logo">
            <img src="../img/합격로고.svg" />
          </div>
          <div className="r_bold">{name}님 축하합니다!</div>
          <div className="r_mid">
            이화이언 41기 수습운영진 서류전형에 합격하셨습니다.
          </div>
          <br />
          <div className="r_min">
            면접 일정은 문자로 공지 드릴 예정입니다. <br />
            심층면접 진행 전, 하단의 설문하러 가기 버튼을 통해 설문을 진행해
            주세요.
          </div>
          <div className="go_form">
            <div>
              <img src="../img/arrow.svg" />
            </div>
            <a href="https://forms.gle/GVCFVPxZpsZMiM33A">설문하러 가기</a>
          </div>
        </div>
      </Container>
    );
  };

  const Prework_D = () => {
    return (
      <Container>
        <div className="r_title">결과 확인</div>
        <div className="r_logo">
          <img src="../img/합격로고.svg" />
        </div>
        <div className="r_bold">{name}님 축하합니다!</div>
        <div className="r_mid">
          이화이언 41기 수습운영진 서류전형에 합격하셨습니다.
        </div>
        <br />
        <div className="r_min">
          면접 일정은 문자로 공지 드릴 예정입니다. <br />
          심층면접 진행 전, 하단의 설문하러 가기 버튼을 통해 설문을 진행해
          주세요.
        </div>
        <div className="go_form">
          <div>
            <img src="../img/arrow.svg" />
          </div>
          <a href="https://forms.gle/GVCFVPxZpsZMiM33A">설문하러 가기</a>
        </div>
        <br />
        <div className="r_box">
          <div className="r_prebox">
            <span className="r_prework">
              1차 서류면접 합격을 축하드리며, 면접 전 사전 과제를 공지해
              드립니다.
              <br />
              <br />
              사전과제는
            </span>
            <span className="r_prework_"> 이화이언 계절 배너 제작</span>
            <span className="r_prework">
              입니다.
              <br />
              계절 배너란 이화이언 메인 홈페이지 화면에서 로그인 창 옆에서
              가로가 긴 박스들이 번갈아 가며 보이는 것을 말합니다. 배너는 단순히
              웹사이트의 미적인 영역뿐만 아니라 이벤트나 행사 시 관련 링크로
              바로 들어갈 수 있게 해주는 역할을 하기도 합니다. <br />
              <br />
              이번 사전과제의 계절 배너는 봄 이미지를 담은 것으로 이화이언
              사이트에 어울리도록 제작해주시면 되며 개수 제한은 없습니다. 배너의
              사이즈는 픽셀 기준으로{" "}
            </span>
            <span className="r_prework_">580x132</span>
            <span className="r_prework">입니다. 규격 준수 부탁드립니다.</span>
            <br />
            <br />
            <br />
            <span className="r_prework_">
              사전과제는 금요일(4일) 밤 12시까지
              <br />
              wwwewhaiancom@hanmail.net으로 보내주시면 됩니다.
            </span>
            <br />
            <br />
            <span className="r_prework">
              사전과제에 대한 문의사항이 있으시다면 카카오톡 채널 <br />
              “이화이언 41기 수습운영진 모집”으로 연락 주시기 바랍니다.
            </span>
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
      </Container>
    );
  };

  const Prework_M = () => {
    return (
      <Container>
        <div className="r_title">결과 확인</div>
        <div className="r_logo">
          <img src="../img/합격로고.svg" />
        </div>
        <div className="r_bold">{name}님 축하합니다!</div>
        <div className="r_mid">
          이화이언 41기 수습운영진 서류전형에 합격하셨습니다.
        </div>
        <br />
        <div className="r_min">
          면접 일정은 문자로 공지 드릴 예정입니다. <br />
          심층면접 진행 전, 하단의 설문하러 가기 버튼을 통해 설문을 진행해
          주세요.
        </div>
        <div className="go_form">
          <div>
            <img src="../img/arrow.svg" />
          </div>
          <a href="https://forms.gle/GVCFVPxZpsZMiM33A">설문하러 가기</a>
        </div>
        <br />
        <div className="r_box">
          <div className="r_prebox">
            <span className="r_prework">
              1차 서류면접 합격을 축하드리며, 면접 전 사전 과제를 공지해
              드립니다.
              <br />
            </span>

            <div className="r_downFile">
              <a
                href="../preTask_ewhaian41_application.docx"
                download="41기 마케팅팀 수습 운영진 면접 사전 과제_이름"
              >
                <img src="../img/arrow.svg" />

                <p>마케팅 수습 운영진 사전과제 </p>
              </a>
            </div>

            <br />
            <span className="r_prework_">
              사전과제는 토요일(5일) 오전 9시까지
              <br />
              wwwewhaiancom@hanmail.net으로 보내주시면 됩니다.
            </span>
            <br />
            <br />
            <span className="r_prework">
              사전과제에 대한 문의사항이 있으시다면 카카오톡 채널 <br />
              “이화이언 41기 수습운영진 모집”으로 연락 주시기 바랍니다.
            </span>
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
      </Container>
    );
  };

  const Second = () => {
    return (
      <Container>
        <div className="r_title">결과 확인</div>
        <div>
          <div className="r_logo">
            <img src="../img/합격로고.svg" />
          </div>
          <div className="r_bold"> {name}님 축하합니다!</div>
          <div className="r_mid">
            이화이언 41기 수습운영진 모집에 최종합격을 축하드립니다.
          </div>
          <br />
          <div className="r_min">
            이화이언 수습운영진 활동에 대한 안내를 드리기 위해 정규회의에 앞서
            온라인으로 마스터 교육을 진행합니다. <br />
            <br />
            마스터 교육은 2월 7일 오후 7시 10분부터 하단의 줌 링크를 통해 진행될
            예정입니다.
            <br />
            참석이 어려우면 사유를 공지받은 번호로 알려주시기 바랍니다.
            <br />
            <br />
            <a
              href="https://us02web.zoom.us/j/88356396226"
              className="zoomlink"
            >마스터교육 줌링크</a>
            <br />
            <br />
            감사합니다.
          </div>
        </div>
      </Container>
    );
  };
  const Fail = () => {
    return (
      <Container>
        <div className="r_title">결과 확인</div>
        <div className="r_box" style={{ marginTop: 100 }}>
          <div className="r_failbox">
            <div className="r_bold_">
              <br />
              {name}님, 지원해주셔서 감사합니다.
              <br /> 이화이언 41기 수습운영진 모집에 불합격하셨습니다.
            </div>
            <br />
            <div className="r_min">
              제한된 인원에 따라 아쉽게도 함께하지 못하게 되었습니다.
              <br />
              지원해주신 점 감사드리며, 다음에 더 좋은 인연으로 다시 만나뵙기를
              기원합니다.
            </div>
          </div>
        </div>
      </Container>
    );
  };
  useEffect(() => {
    axios
      .get("/api/result/" + props.match.params.key)
      .then((res) => {
        setFinal(res.data[0].pass);
        setTeam(res.data[0].team);
        setName(res.data[0].name);
      })
      .catch((error) => {
        console.log(error);
      });
  });
  if (team === "디자인팀" && final === "서류합격") {
    return <Prework_D />;
  } else if (team === "마케팅팀" && final === "서류합격") {
    return <Prework_M />;
  } else if (team === "웹개발팀" && final === "서류합격") {
    return <First />;
  }
  if (final === "최종합격") {
    return <Second />;
  }
  if (final === "불합격") {
    return <Fail />;
  }
  return <Container></Container>;
}

export default ShowResult;

const Container = styled.div`
  // position: absolute;
  margin: 0 auto !important;
  width: 840px;
  left: 50%;
  margin-left: -420px;
  @media screen and (max-width: 900px) {
    width: 90vw;
    margin-left: 0;
    left: 5vw;
  }
`;
