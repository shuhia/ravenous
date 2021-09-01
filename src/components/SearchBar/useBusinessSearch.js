import React, { useState, useEffect } from "react";

const endPoint = "/businesses/search?";
const url = "https://api.yelp.com/v3" + endPoint;
const sampleResponse = {
  total: 8228,
  businesses: [
    {
      rating: 4,
      price: "$",
      phone: "+14152520800",
      id: "E8RJkjfdcwgtyoPMjQ_Olg",
      alias: "four-barrel-coffee-san-francisco",
      is_closed: false,
      categories: [
        {
          alias: "coffee",
          title: "Coffee & Tea",
        },
      ],
      review_count: 1738,
      name: "Four Barrel Coffee",
      url: "https://www.yelp.com/biz/four-barrel-coffee-san-francisco",
      coordinates: {
        latitude: 37.7670169511878,
        longitude: -122.42184275,
      },
      image_url:
        "http://s3-media2.fl.yelpcdn.com/bphoto/MmgtASP3l_t4tPCL1iAsCg/o.jpg",
      location: {
        city: "San Francisco",
        country: "US",
        address2: "",
        address3: "",
        state: "CA",
        address1: "375 Valencia St",
        zip_code: "94103",
      },
      distance: 1604.23,
      transactions: ["pickup", "delivery"],
    },
    // ...
  ],
  region: {
    center: {
      latitude: 37.767413217936834,
      longitude: -122.42820739746094,
    },
  },
};

async function search(queries) {
  try {
    const response = await fetch(url + queries);
    const jsonResponse = await response.json();
    return jsonResponse;
  } catch (error) {
    console.log(error);
  }
}

function useBusinessSearch(parameters) {
  const [result, setResult] = useState(null);
  const {
    sortBy = "best_match",
    term = "restaurant",
    location = "",
    categories = "",
  } = parameters;
  function createQuery(key, value) {
    return `&${key}=${value}`;
  }
  const queries = createQuery("sort_by", sortBy) + createQuery("term", term);
  useEffect(() => {
    setResult(search(queries));
  }, [sortBy]);

  return result || sampleResponse;
}

export default useBusinessSearch;
