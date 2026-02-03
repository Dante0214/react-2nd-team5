import React from "react";

const Footer = () => {
  return (
    <div className="py-12 md:py-8 bg-[#8E8686] text-white relative">
      <div className="flex flex-col sm:flex-row gap-5 sm:gap-0 max-w-7xl mx-auto px-4">
        {/* Footer Logo */}
        <div className="flex justify-start items-center brightness-0 invert opacity-90">
          <img
            src="/footer_logo.png"
            alt="footer-img"
            className="w-[120px] md:w-[140px]"
          />
        </div>

        {/* Footer Text */}
        <div className="pl-0 sm:pl-[5%] flex flex-col gap-2 text-left">
          <strong className="text-base sm:text-lg">
            리액트 스터디 프로젝트 냉털한끼
          </strong>
          <p className="mb-0 text-sm sm:text-base">
            강휘원 | 김성연 | 박민선 | 안치호 | 변하영
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
