import React, { useState, useEffect } from "react";
import "./result.css";
import styled from "styled-components";
import { useHistory } from "react-router";
import "./manager.css";
function Manager() {
  const [pw, setPw] = useState("");
  const history = useHistory();

  const key = "8952";
  const manager_pw = "20recruit21";

  useEffect(() => {
    if (window.location.hash === "#/manager") {
      var hidden = document.getElementById("computer");
      //hidden.style.display = "none";
    }
  });
  function handleSubmit(event) {
    event.preventDefault();
    if (pw === manager_pw) {
      history.push("/result2001manager" + "/" + `${key}` + "/");
    } else {
      alert("다시 입력하세요.");
    }
  }

  return (
    <div>
      <div className="banner_result">
        <img src="../img/pre41thBanner.png" />
      </div>
      <Content>ADMIN</Content>
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <form onSubmit={handleSubmit}>
          <Input
            value={pw}
            onChange={(e) => setPw(e.target.value)}
            className="m_input"
            type="password"
          ></Input>
          <Button type="submit">GO</Button>
        </form>
      </div>
    </div>
  );
}

export default Manager;

const Button = styled.button`
  width: 80px;
  height: 60px;
  background: #ec1468;
  border-radius: 30px;
  color: white;
  font-size: 23px;
  text-align: center;
  border: none;
  // margin-left: 20px;
  box-shadow: 0px 10px 20px rgba(236, 20, 104, 0.35);
  @media screen and (max-width: 900px) {
    width: 90vw;
]  }
`;

const Content = styled.div`
  font-family: "Pretendard-Regular";
  font-size: 50px;
  font-weight: bold;
  letter-spacing: 0.2em;
  text-align: center;
  padding-top: 34px;
  @media screen and (max-width: 900px) {
    left: 5vw;
  }
`;

const Input = styled.input`
  height: 60px;
  // bordercolor: #f2f2f2;
  // background: white;
  border: none;
  background: #f2f2f2;
  box-sizing: border-box;
  font-size: 20px;
  margin-right: 20px;

  @media screen and (max-width: 900px) {
    width: 90vw;
    margin-bottom: 5vh;
    margin-right: 0;
  }
`;
