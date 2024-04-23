import React from "react";
import StylesMidBar from "./MidBar.module.css";
import mobileRechargeIcon from "../../assets/mobileRecharge.png";
import newsIcon from "../../assets/news.png";
import jobsIcon from "../../assets/jobs.png";
import billIcon from "../../assets/bill.png";

const MidBar = () => {
  return (
    <div className={StylesMidBar.midNav}>
      <div className={StylesMidBar.allIcons}>
      &nbsp;&nbsp;
        <img src={mobileRechargeIcon} alt="mobileRechargeIcon" className={StylesMidBar.icon} />
        <img
          src={newsIcon}
          alt="newsIcon"
          className={StylesMidBar.icon}
        />
        <img
          src={jobsIcon}
          alt="jobsIcon"
          className={StylesMidBar.icon}
        />
        <img
          src={billIcon}
          alt="billIcon"
          className={StylesMidBar.icon}
        />
        &nbsp;&nbsp;
      </div>
    </div>
  );
};

export default MidBar;
