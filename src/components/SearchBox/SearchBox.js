import React from "react";
import "./SearchBox.css";

const SearchBox = ({ onSearch }) => {
  return (
    <>
      <div className="search-box-with-icon">
        <i className="fa fa-search" aria-hidden="true"></i>
        <input
          type="search"
          className="search-box"
          placeholder="Search talent by position"
          onChange={onSearch}
        ></input>
      </div>
    </>
  );
};

export default SearchBox;
