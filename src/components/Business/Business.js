import React from "react";
import "./Business.css";

const business = {
  imageSrc: "https://content.codecademy.com/programs/react/ravenous/pizza.jpg",
  name: "MarginOtto Pizzeria",
  address: "1010 Paddington Way",
  city: "Flavortown",
  state: "NY",
  zipCode: "10101",
  category: "Italian",
  rating: 4.5,
  reviewCount: 90,
};

function Business() {
  const {
    imageSrc,
    name,
    address,
    city,
    state,
    zipCode,
    category,
    rating,
    reviewCount,
  } = business;
  return (
    <div className="Business">
      <div className="image-container">
        <img src={imageSrc} alt={name} />
      </div>
      <h2>MarginOtto Pizzeria</h2>
      <div className="Business-information">
        <div className="Business-address">
          <p>{address}</p>
          <p>{city}</p>
          <p>{state + " " + zipCode}</p>
        </div>
        <div className="Business-reviews">
          <h3>{category}</h3>
          <h3 className="rating">{rating + " stars"}</h3>
          <p>{reviewCount} reviews</p>
        </div>
      </div>
    </div>
  );
}

export default Business;
