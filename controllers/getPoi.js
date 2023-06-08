const axios = require("axios");
const apiKey = process.env.API_KEY;
module.exports = async function (response) {
  const { place_id: placeId } = response.data.results[0];
  const pointsOfInterest =
    await axios.get(`https://api.geoapify.com/v2/places?categories=entertainment&filter=place:${placeId}&limit=20&apiKey=${apiKey}
  `);
  return pointsOfInterest.data;
};
