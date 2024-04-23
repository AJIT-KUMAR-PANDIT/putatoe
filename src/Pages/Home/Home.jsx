import React from "react";
import StylesHome from "./Home.module.css";
import BottomNav from "../../Components/BottomNav/BottomNav";
import SearchBar from "../../Components/SearchBar/SearchBar";
import Silider from "../../Components/Silider/Silider";
import MidBar from "../../Components/MidBar/MidBar";

const Home = () => {
  return (
    <>
      <div className={StylesHome.container}>
        <div>
          <SearchBar />
        </div>
        <div>
          <Silider />
        </div>
        <div>
          <MidBar />
        </div>
        <div className={StylesHome.shop}>
          <div className={StylesHome.textShop}><br/>SHOP BY CATEGORY</div>
          <div className={StylesHome.textGrocery}>Grocery</div>
        </div>
        <div className={StylesHome.bottom}></div>
        <div>
          <BottomNav />
        </div>
      </div>
    </>
  );
};

export default Home;
