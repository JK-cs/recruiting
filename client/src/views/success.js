import React from "react";
import "./success.css";
import styled from "styled-components";
import { Link } from "react-router-dom";

function Success() {
  return (
    <>
      <div className="banner_success">
        <img src="../img/pre41thBanner.png" />
      </div>
      <div className="successImgBox">
        <img src="../img/apply-success.svg" className="s_icon" />
      </div>
      <div className="s_title">제출에 성공했습니다!</div>
      <div className="s_button">
        <Link to="/">
          <Button>메인으로 돌아가기</Button>
        </Link>
      </div>
    </>
  );
}

export default Success;

const Button = styled.button`
  width: 300px;
  height: 55px;
  background: #ec1468;
  border-radius: 45px;
  color: white;
  font-size: 23px;
  font-weight: 500;
  text-align: center;
  border: none;
  box-shadow: 0px 10px 20px rgba(236, 20, 104, 0.35);
`;
