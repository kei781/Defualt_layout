import React from "react";
import style from "./Snb.module.css";
const Snb = ({ snb, setsnb }) => {
  const onClick = () => {
    setsnb(!snb);
  };
  return (
    <div className={style.Snb}>
      <div className={style.BoardWrap}>
        <div className={style.Board} onClick={onClick}>
          보드
        </div>
      </div>
    </div>
  );
};

export default Snb;
