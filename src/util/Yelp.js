const apiKey = process.env.REACT_APP_API_KEY;

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

const Yelp = {
  async fetchBusiness(endPoint, options) {
    try {
      const response = await fetch(
        "https://cors-anywhere.herokuapp.com/" + endPoint,
        options
      );
      const jsonResponse = await response.json();
      const businesses = jsonResponse.businesses;
      console.log(businesses);
      return businesses.map((business) => {
        const {
          id,
          image_url: imageSrc,
          name,
          location: { address1: address, city, state, zip_code: zipCode },
          categories: { title: category },
          review_count: reviewCount,
          rating,
        } = business;

        return {
          id,
          imageSrc,
          name,
          address: address,
          city,
          state,
          zipCode,
          category,
          rating,
          reviewCount,
        };
      });
    } catch (error) {
      console.log(error);
      return [];
    }
  },

  async search(term, location, sortBy) {
    const url = "https://api.yelp.com/v3";
    const path = "/businesses/search?";
    const query = `term=${term}&location=${location}&sort_by=${sortBy}`;
    const endPoint = url + path + query;
    const options = { headers: { Authorization: `Bearer ${apiKey}` } };
    return this.fetchBusiness(endPoint, options);
  },
};

export default Yelp;
