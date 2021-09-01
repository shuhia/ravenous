import React from "react";
import Business from "../Business/Business";
import "./BusinessList.css";

function BusinessList(props) {
  const businesses = props.businesses;

  return (
    <div className="BusinessList">
      {businesses.map((business) => (
        <Business key={business} business={business}></Business>
      ))}
    </div>
  );
}

export default BusinessList;
