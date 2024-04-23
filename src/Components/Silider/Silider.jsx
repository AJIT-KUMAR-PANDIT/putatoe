import React from "react";
import StylesSilider from "./Silider.module.css";

const Silider = () => {
  return (
    <>
      <div className={StylesSilider.container}>
        <div className={StylesSilider.innerContainer}>
          <span className={StylesSilider.text}>
            {" "}
            By All Your Grocery Shopping Hear
          </span>
        </div>
      </div>
    </>
  );
};

export default Silider;
