import React from "react";

const NoFindPage = ({ user }) => {
  return (
    <div className="flex items-center justify-center min-h-[300px] py-10">
      <div className="text-center text-xl md:text-2xl text-gray-600 font-medium">
        {user
          ? "요리를 찜한 후 나의 목록을 확인하세요"
          : "로그인 후 나의 목록을 확인하세요"}
      </div>
    </div>
  );
};

export default NoFindPage;
