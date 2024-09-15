import React from "react";
import { Container } from "react-bootstrap";
import "./Footer.style.css";

const Footer = () => {
  return (
    <div className="footer">
      <Container className="footer-wrapper">
        <div className="footer-logo">
          <img
            src={`${process.env.PUBLIC_URL}/footer_logo.png`}
            alt="footer-img"
          />
        </div>
        <div className="footer-text">
          <strong className="footer-text-title">
            리액트 스터디 프로젝트 냉털한끼
          </strong>
          <p className="footer-text-member">
            강휘원 | 김성연 | 박민선 | 안치호 | 변하영
          </p>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
