import React from "react";
import StylesBottomNav from "./BottomNav.module.css";
import homeIcon from "../../assets/Home.png";
import profileIcon from "../../assets/Profile.png";
import logoButtonIcon from "../../assets/LogoButton.png";
import followListIcon from "../../assets/FollowList.png";
import chatIcon from "../../assets/Chat.png";

const BottomNav = () => {
  return (
    <div className={StylesBottomNav.bottomNav}>
      <div className={StylesBottomNav.allIcons}>
      &nbsp;&nbsp;
        <img src={homeIcon} alt="homeIcon" className={StylesBottomNav.icon} />
        <img
          src={profileIcon}
          alt="profileIcon"
          className={StylesBottomNav.icon}
        />
        <img
          src={logoButtonIcon}
          alt="logoButtonIcon"
          className={StylesBottomNav.iconLogoButton}
        />
        <img
          src={followListIcon}
          alt="followListIcon"
          className={StylesBottomNav.icon}
        />
        <img src={chatIcon} alt="chatIcon" className={StylesBottomNav.icon} />
        &nbsp;&nbsp;
      </div>
    </div>
  );
};

export default BottomNav;
