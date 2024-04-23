import React from "react";
import StylesHome from "./Home.module.css";
import BottomNav from "../../Components/BottomNav/BottomNav";

const Home = () => {
  return (
    <>
      <div className={StylesHome.container}>
        <div><BottomNav/></div>
      </div>
    </>
  );
};

export default Home;
