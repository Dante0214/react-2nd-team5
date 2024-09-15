import React from "react";
import "./NoFindPage.style.css";
const NoFindPage = ({ user }) => {
  return (
    <div className="nofindpage-container">
      <div className="nofindpage_style">
        {user
          ? "요리를 찜한 후 나의 목록을 확인하세요"
          : "로그인 후 나의 목록을 확인하세요"}
      </div>
    </div>
  );
};

export default NoFindPage;
