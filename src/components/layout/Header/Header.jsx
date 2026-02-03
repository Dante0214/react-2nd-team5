import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BsList } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";
import { PiBookmarkSimple } from "react-icons/pi";
import { SlLogin, SlLogout } from "react-icons/sl";
import { useAuthStore } from "../../../stores/authStore";
import AuthModal from "../../ui/AuthModal/AuthModal";

const menuList = ["든든하게,건강식", "바쁠땐,간편식", "출출할때?간식"];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const { user, logout } = useAuthStore();

  // 모바일 모달 핸들러
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // 상단로고 클릭 시 홈으로
  const goToHome = () => {
    navigate("/");
  };

  // 북마크 페이지로 이동 핸들러
  const handleWishlist = () => {
    if (user) {
      navigate("/wish/user");
    } else {
      navigate("/wish/guest");
    }
  };

  // 로그인/로그아웃 버튼 클릭 핸들러
  const handleAuthAction = () => {
    if (user) {
      logout();
      alert("로그아웃되었습니다");
      navigate("/");
    } else {
      navigate("/login");
    }
  };

  return (
    <>
      <AuthModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        menuList={menuList}
        toggleMenu={toggleMenu}
      />
      <div className="border-b border-gray-300">
        <div className="min-h-[105px] md:min-h-[60px] py-2.5 flex justify-between items-center max-w-7xl mx-auto px-4 font-['Pretendard']">
          {/* Logo */}
          <h1
            onClick={goToHome}
            className="w-[120px] md:w-[140px] min-h-[60px] m-0 cursor-pointer text-[0]"
          >
            <img src="/logo_5.png" alt="logo" className="w-full" />
          </h1>

          {/* Navigation Bar - hidden on mobile */}
          <ul className="hidden md:flex list-none p-0 mb-0 font-semibold">
            {menuList.map((menu, index) => (
              <li
                key={index}
                className="transition-transform duration-300 hover:-translate-y-1.5"
              >
                <Link
                  to="/recipes"
                  className="text-[#191919] no-underline px-[1.5vw] py-5 transition-all duration-300 hover:text-[#ed0c0c]"
                  style={{ fontSize: "min(2vw, 18px)" }}
                >
                  {menu}
                </Link>
              </li>
            ))}
          </ul>

          {/* Right Icons */}
          <ul className="w-auto md:w-[140px] min-h-[60px] flex list-none m-0 p-0 justify-end items-center gap-2">
            {/* Search - visible only on mobile */}
            <li className="md:hidden">
              <Link>
                <FiSearch
                  className="text-[#191919] transition-colors duration-300"
                  size="25px"
                />
              </Link>
            </li>

            {/* Bookmark */}
            <li onClick={handleWishlist} className="cursor-pointer">
              <Link>
                <PiBookmarkSimple
                  className="text-[#191919] transition-colors duration-300"
                  size="28px"
                />
              </Link>
            </li>

            {/* Mobile Menu - visible only on mobile */}
            <li onClick={toggleMenu} className="md:hidden cursor-pointer">
              <Link>
                <BsList
                  className="text-[#191919] transition-colors duration-300"
                  size="30px"
                />
              </Link>
            </li>

            {/* Login/Logout */}
            {user ? (
              <SlLogout
                className="cursor-pointer text-[#191919] transition-colors duration-300"
                onClick={handleAuthAction}
                size="25px"
              />
            ) : (
              <SlLogin
                className="cursor-pointer text-[#191919] transition-colors duration-300 scale-110"
                onClick={handleAuthAction}
                size="25px"
              />
            )}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
