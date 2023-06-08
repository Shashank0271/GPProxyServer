const axios = require("axios");
const apiKey = process.env.API_KEY;
module.exports = async function (response) {
  const { place_id: placeId } = response.data.results[0];
  const pointsOfInterest =
    await axios.get(`https://api.geoapify.com/v2/places?categories=entertainment&filter=place:${placeId}&limit=20&apiKey=${apiKey}
  `);
  const result = pointsOfInterest.data;
  let requiredResponse = [];
  result["features"].forEach((element) => {
    const properties = element["properties"];
    if (properties["name"]) {
      const { name, city, street, suburb, formatted, place_id, postcode } =
        properties;
      const placeDetails = {
        name,
        city,
        street,
        suburb,
        formatted,
        place_id,
        postcode,
      };
      placeDetails["coordinates"] = element["geometry"]["coordinates"];
      requiredResponse.push(placeDetails);
    }
  });
  return requiredResponse;
};
