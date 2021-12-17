const apiKey = process.env.REACT_APP_API_KEY;

const Yelp = {
  async fetchBusiness(endPoint, options) {
    try {
      const response = await fetch(endPoint, options);
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
