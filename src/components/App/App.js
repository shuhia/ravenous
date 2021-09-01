import logo from "../../logo.svg";
import "./App.css";
import BusinessList from "../BusinessList/BusinessList";
import SearchBar from "../SearchBar/SearchBar";
import Business from "../Business/Business";
import Yelp from "../../util/Yelp";
import { useState } from "react";

function App() {
  const [businesses, setBusinesses] = useState([]);

  const searchYelp = (
    term = "Pizza",
    location = "Brooklyn",
    sortBy = "best_match"
  ) => {
    const result = Yelp.search(term, location, sortBy);
    result.then((businesses) => setBusinesses(businesses));
  };

  return (
    <div className="App">
      <h1>ravenous</h1>
      <SearchBar searchYelp={searchYelp}></SearchBar>
      <BusinessList businesses={businesses}></BusinessList>
    </div>
  );
}

export default App;
