import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthStore } from "../../../stores/authStore";
// import "./AuthModal.style.css"; // Tailwind 변환으로 주석 처리

const AuthModal = ({ isOpen, setIsOpen, menuList, toggleMenu }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // Zustand에서 인증 상태 가져오기
  const { isLoggedIn, user } = useAuthStore();
  const navigate = useNavigate();

  const goToLogin = () => {
    navigate("/login");
    setIsOpen(false);
  };

  const notWorked = () => {
    alert("작업 중입니다");
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (!isMobile) return null;

  return (
    <div
      className={`fixed top-0 left-0 w-full h-full z-[1002] font-['Pretendard'] ${isOpen ? "block bg-black/70 z-[1001]" : "hidden"}`}
    >
      <div className="bg-white w-1/2 min-w-[280px] h-screen relative overflow-hidden">
        {/* 닫기 버튼 */}
        <div
          onClick={toggleMenu}
          className="flex flex-col justify-center items-center w-[50px] h-[50px] rounded-[5px] cursor-pointer transition-all duration-200 absolute top-[10px] right-[10px] z-10 hover:animate-btn-pop group"
        >
          <div
            className={`w-[25px] h-px bg-white my-1 transition-all duration-200 group-hover:bg-white group-hover:h-[2px] ${isOpen ? "rotate-45 absolute" : ""}`}
          ></div>
          <div
            className={`w-[25px] h-px bg-white my-1 transition-all duration-200 group-hover:bg-white group-hover:h-[2px] ${isOpen ? "opacity-0" : ""}`}
          ></div>
          <div
            className={`w-[25px] h-px bg-white my-1 transition-all duration-200 group-hover:bg-white group-hover:h-[2px] ${isOpen ? "-rotate-45 absolute" : ""}`}
          ></div>
        </div>

        {/* 로그인 상태에 따라 guest 또는 auth 내용을 렌더링 */}
        {isLoggedIn ? (
          <div className="bg-[#ED0C0C] min-h-[214px] pl-[25px] pt-[50px]">
            <div className="mb-2 bg-[#970202] rounded-[30px] w-[100px] min-h-[36px] flex justify-center items-center text-white">
              Welcome
            </div>
            <p className="mb-0 text-white leading-[30px] font-medium text-[20px]">
              반갑습니다
            </p>
            <p className="mb-[18px] text-white leading-[1.6] font-bold text-[26px]">
              요리왕 <span>{user?.userId}</span>님
            </p>
          </div>
        ) : (
          <div className="bg-[#ED0C0C] min-h-[214px] pl-[25px] pt-[50px]">
            <p className="mb-0 text-white leading-[35px] font-medium text-[20px]">
              안녕하세요
            </p>
            <p className="mb-[15px] text-white leading-[1.6] font-medium text-[22px]">
              <strong>로그인</strong> 후 이용하세요
            </p>
            <button
              onClick={goToLogin}
              className="border-2 border-white bg-transparent rounded-[30px] w-[104px] min-h-[45px] text-[20px] transition-all duration-200 text-white hover:bg-white/20"
            >
              로그인
            </button>
          </div>
        )}

        {/* 네비게이션 메뉴 */}
        <ul className="m-0 mt-[15px] p-0 flex flex-col">
          <li
            className={`m-0 pl-[25px] ${isOpen ? "animate-slide-right" : ""}`}
          >
            <Link
              to="/recipes"
              onClick={() => setIsOpen(false)}
              className="block py-[10px] no-underline text-[#191919] text-[20px] font-medium transition-all duration-200 hover:text-[#191919] hover:font-bold"
            >
              {menuList[0]}
            </Link>
          </li>
          <li
            onClick={notWorked}
            className={`m-0 pl-[25px] ${isOpen ? "animate-slide-right [animation-delay:0.1s]" : ""}`}
          >
            <Link
              onClick={() => setIsOpen(false)}
              className="block py-[10px] no-underline text-[#191919] text-[20px] font-medium transition-all duration-200 hover:text-[#191919] hover:font-bold"
            >
              {menuList[1]}
            </Link>
          </li>
          <li
            onClick={notWorked}
            className={`m-0 pl-[25px] ${isOpen ? "animate-slide-right [animation-delay:0.2s]" : ""}`}
          >
            <Link
              onClick={() => setIsOpen(false)}
              className="block py-[10px] no-underline text-[#191919] text-[20px] font-medium transition-all duration-200 hover:text-[#191919] hover:font-bold"
            >
              {menuList[2]}
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AuthModal;
