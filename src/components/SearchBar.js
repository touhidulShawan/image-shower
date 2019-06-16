import React from "react";
import "../assets/css/SearchBar.min.css";

const SearchBar = props => {
  return (
    <form action="" onSubmit={props.handleSubmit}>
      <input
        type="text"
        name="imageSearch"
        placeholder="Search image..."
        onChange={props.handleChange}
      />
    </form>
  );
};

export default SearchBar;
