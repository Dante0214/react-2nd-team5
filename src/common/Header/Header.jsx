import React, { useState } from "react";
import { Alert, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Header.style.css";
import { Link, useNavigate } from "react-router-dom";
import { BsList } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";
import { PiBookmarkSimple } from "react-icons/pi";
import { SlLogin, SlLogout } from "react-icons/sl";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/reducer/authReducer";
import AuthModal from "../AuthModal/AuthModal";

const menuList = ["든든하게,건강식", "바쁠땐,간편식", "출출할때?간식"];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

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
      dispatch(logout());
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
      <div className="header">
        <Container className="header-wrapper">
          <h1 onClick={goToHome} className="header-logo">
            logo
            <img src={`${process.env.PUBLIC_URL}/logo_5.png`} alt="logo" />
          </h1>
          <ul className="header-nav-bar">
            <li>
              <Link to="/recipes">{menuList[0]}</Link>
            </li>
            <li>
              <Link to="/recipes">{menuList[1]}</Link>
            </li>
            <li>
              <Link to="/recipes">{menuList[2]}</Link>
            </li>
          </ul>
          <ul className="header-right">
            {/* mobile일 경우 btn-search, btn-mobile-menu addClass active */}
            <li className="header-search">
              <Link>
                <FiSearch className="btn-search" size="25px" />
              </Link>
            </li>
            <li className="header-cart" onClick={handleWishlist}>
              <Link>
                <PiBookmarkSimple className="btn-cart" size="28px" />
              </Link>
            </li>
            <li className="header-mobile-menu" onClick={toggleMenu}>
              <Link>
                <BsList className="btn-mobile-menu" size="30px" />
              </Link>
            </li>
            {user ? (
              <SlLogout onClick={handleAuthAction} size="25px" />
            ) : (
              <SlLogin onClick={handleAuthAction} size="25px" />
            )}
          </ul>
        </Container>
      </div>
    </>
  );
};

export default Header;
