import React from "react";
import style from "./LogInOutWrap.module.css";

const LogInOut = () => {
  return (
    <div className={style.LogInOutWrap}>
      <input
        type="text"
        name="login"
        id=""
        Placeholder="ID를 입력하여 주세요"
      />
      <input type="text" name="" id="" Placeholder="PW를 입력하여 주세요" />
    </div>
  );
};

export default LogInOut;
