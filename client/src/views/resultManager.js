import React, { Component } from "react";
import axios from "axios";
import RowManager from "./rowManager";
import styled from "styled-components";
import "./manager.css";

export default class ResultManager extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: [],
    };
  }
  componentDidMount() {
    axios
      .post("/api/result")
      .then((response) => {
        this.setState({ result: response.data });
        console.log(this.state.result);
      })
      .catch(function (error) {
        console.log(error);
      });

    // if (window.location.hash === "#/result2001Manager") {
    //   var hidden = document.getElementById("computer");
    //   hidden.style.display = "none";
    // }
  }

  tabRow() {
    return this.state.result.map(function (object, i) {
      return <RowManager obj={object} key={i} />;
    });
  }

  render() {
    return (
      <div>
        <div className="banner_result">
          <img src="../../img/pre41thBanner.png" />
        </div>
        <Content align="center">지원자 리스트</Content>
        <table
          className="resultTable"
          align="center"
          style={{ tableLayout: "fixed" }}
        >
          <thead className="columns" align="center">
            <tr>
              <th>이름</th>
              <th>학번</th>
              <th>이화이언 아이디</th>
              <th>수정하기</th>
            </tr>
          </thead>
          <tbody align="center">{this.tabRow()}</tbody>
        </table>
        <br />
        <br />
        <br />
        <br />
      </div>
    );
  }
}
const Content = styled.div`
  font-family: "Pretendard-Regular";
  font-size: 50px;
  font-weight: bold;
  letter-spacing: 0.2em;
  text-align: center;
  padding-top: 34px;
  @media screen and (max-width: 900px) {
    font-size: 30px;
  }
`;
