import Yelp from "./Yelp";

describe("Yelp functions", () => {
  it("fetches data correctly", async () => {
    const result = await Yelp.search("test", "test", "best_match");
    const keys = [
      "id",
      "imageSrc",
      "name",
      "adress",
      "city",
      "state",
      "zipCode",
      "category",
      "rating",
      "reviewCount",
    ];
    console.log(result);
    const resultKeys = Object.keys(result);

    for (const key of keys) {
      expect(
        resultKeys.includes((resultKey) => resultKey === key)
      ).toBeTruthy();
    }
  });
});
