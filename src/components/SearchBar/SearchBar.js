import React, { useState } from "react";
import "./SearchBar.css";
import useBusinessSearch from "./useBusinessSearch";

function SearchBar(props) {
  const [term, setTerm] = useState();
  const [location, setLocation] = useState();
  const [sortBy, setSortBy] = useState("best_match");
  const { searchYelp } = props;
  const sortByOptions = {
    "Best Match": "best_match",
    "Highest Rated": "rating",
    "Most Reviewed": "review_count",
  };
  const getSortByClass = (type) => {
    if (sortBy === type) {
      return "active";
    } else {
      return "";
    }
  };
  const handleSortByChange = (event) => {
    const value = event.target.textContent;
    const type = sortByOptions[value];
    setSortBy(type);
  };

  const handleTermChange = (event) => {
    const term = event.target.value;
    setTerm(term);
  };
  const handleLocationChange = (event) => {
    const location = event.target.value;
    setLocation(location);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    searchYelp(term, location, sortBy);
  };

  const renderSortByOptions = () => {
    return Object.entries(sortByOptions).map((option) => (
      <li
        key={option[1]}
        className={getSortByClass(option[1])}
        onClick={handleSortByChange}
      >
        {option[0]}
      </li>
    ));
  };
  const sortByOptionsValue = renderSortByOptions();

  return (
    <div className="SearchBar">
      <div className="SearchBar-sort-options">
        <ul>{sortByOptionsValue}</ul>
      </div>
      <div className="SearchBar-fields">
        <input placeholder="Search Businesses" onChange={handleTermChange} />
        <input placeholder="Where?" onChange={handleLocationChange} />
      </div>
      <div className="SearchBar-submit">
        <a className="button" onClick={handleSearch}>
          Let's Go
        </a>
      </div>
    </div>
  );
}

export default SearchBar;
