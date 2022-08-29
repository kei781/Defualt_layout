import React from "react";
import style from "./Board.module.css";

const Board = ({ snb, setsnb }) => {
  const onClick = () => {
    setsnb(!snb);
  };
  return (
    <div className={style.Board} onClick={onClick}>
      보드
    </div>
  );
};

export default Board;
