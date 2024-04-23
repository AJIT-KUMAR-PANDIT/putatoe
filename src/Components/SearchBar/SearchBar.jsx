import React, { useState } from "react";
import StylesSearchBar from "./SearchBar.module.css";
import searchIcon from "../../assets/search.png";
import micIcon from "../../assets/mic.png";

const SearchBar = () => {
  const [value, setValue] = useState("");

  return (
    <>
      <div className={StylesSearchBar.searchBar}>
        <div className={StylesSearchBar.insideContainer}>
          <img
            src={searchIcon}
            alt="searchIcon"
            className={StylesSearchBar.icon}
          />
          <input
            type="text"
            className={StylesSearchBar.textbox}
            placeholder="Search for Product..."
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
            }}
          />
        </div>
        <img src={micIcon} alt="micIcon" className={StylesSearchBar.micIcon} />
      </div>
    </>
  );
};

export default SearchBar;
