import React from "react";
import "./SearchBar.css";
import useBusinessSearch from "./useBusinessSearch";

function SearchBar() {
  const sortByOptions = {
    "Best Match": "best_match",
    "Highest Rated": "highest_rated",
    "Most Reviewed": "most_reviewed",
  };
  const renderSortByOptions = () => {
    return Object.entries(sortByOptions).map((option) => (
      <li key={option[1]}>{option[0]}</li>
    ));
  };
  const sortByOptionsValue = renderSortByOptions();

  return (
    <div className="SearchBar">
      <div className="SearchBar-sort-options">
        <ul>{sortByOptionsValue}</ul>
      </div>
      <div className="SearchBar-fields">
        <input placeholder="Search Businesses" />
        <input placeholder="Where?" />
      </div>
      <div className="SearchBar-submit">
        <a>Let's Go</a>
      </div>
    </div>
  );
}

export default SearchBar;
