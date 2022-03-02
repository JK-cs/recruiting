import React from "react";
import "./complete.css";
import "./style.css";
import { Link } from "react-router-dom";

function complete() {
  return (
    <>
      <div className="contentBox">
        <div className="apply_icon">
          <img src="../img/apply-success.svg" alt="" />
        </div>
        <div className="description">
          제출에 성공했습니다!
          <p>메인 화면으로 돌아갑니다.</p>
          <Link to="/" style={{ textDecoration: "none", color: "#ec1468" }}>
            <button>메인으로 돌아가기 </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default complete;
