import React from "react";
import style from "./Header.module.css";
import Board from "./Compornents/Board";
import LogInOut from "./Compornents/LogInOut";
import Snb from "./Compornents/Snb/Snb";

const Header = ({ snb, setsnb }) => {
  const Snbvisible = {
    true: <Snb snb={snb} setsnb={setsnb} />,
    false: <div></div>,
  };
  return (
    <div className={style.HeaderWrap}>
      <header className={style.Header}>
        {Snbvisible[snb]}
        <div className={style.Board}>
          <Board snb={snb} setsnb={setsnb} />
        </div>
        <div className={style.Title}>title</div>
        <div className={style.FunctionTabWrap}>
          <ul className={style.FunctionTab}>
            <li>
              <LogInOut />
            </li>
            <li>Create-table</li>
          </ul>
        </div>
      </header>
    </div>
  );
};

export default Header;
