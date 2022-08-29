import React from "react";
import style from "./Footer.module.css";
const Footer = () => {
  return (
    <div className={style.FooterWrap}>
      <div className={style.Footer}>
        <div>
          Copyright ⓒ 2022- Yem, Noh, Lee, Park All rights reserved.
          <br />
          국비간, 팀프로젝트로 제작되었습니다.
        </div>
      </div>
    </div>
  );
};

export default Footer;
