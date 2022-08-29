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
      <div className={style.MenuWrap}>
        <ul>
          <li className={style.Menu}>123123</li>
          <li className={style.Menu}>412341234</li>
          <li className={style.Menu}>1234123443</li>
          <li className={style.Menu}>343434</li>
          <li className={style.Menu}>123123</li>
          <li className={style.Menu}>412341234</li>
          <li className={style.Menu}>1234123443</li>
          <li className={style.Menu}>343434</li>
          <li className={style.Menu}>123123</li>
          <li className={style.Menu}>412341234</li>
          <li className={style.Menu}>1234123443</li>
          <li className={style.Menu}>343434</li>
          <li className={style.Menu}>123123</li>
          <li className={style.Menu}>412341234</li>
          <li className={style.Menu}>1234123443</li>
          <li className={style.Menu}>343434</li>
        </ul>
      </div>
    </div>
  );
};

export default Snb;
