import React, { useState } from "react";
import style from "./Layout.module.css";
import Header from "./Header/Header";
import Contents from "./Contents/Contents";
import Footer from "./Footer/Footer";
import Snb from "./Snb/Snb";

const Layout = () => {
  const [snb, setsnb] = useState(false);
  return (
    <div className={style.Layout}>
      <Snb snb={snb} setsnb={setsnb} />
      <Header snb={snb} setsnb={setsnb} />
      <Contents />
      <Footer />
    </div>
  );
};

export default Layout;
