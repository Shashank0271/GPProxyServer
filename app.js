require("dotenv").config();
const express = require("express");
const rateLimit = require("express-rate-limit");
const apicache = require("apicache");
const axios = require("axios");
const getPointsOfInterest = require("./controllers/getPoi");
const app = express();
const port = process.env.PORT || 4000;
const apiKey = process.env.API_KEY;
const baseUrl = process.env.API_BASE_URL;

app.use(express.json());

//rate limiting
app.use(
  rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100,
    message: "Too many requests, please try again later",
  })
);

//initialize cache
let cache = apicache.middleware;

//routes
app.get("/api/v1/geocode", cache("5 minutes"), async function (req, res) {
  const { city, state } = req.body;
  const response = await axios.get(
    `${baseUrl}/v1/geocode/search?city=${city}&state=${state}&country=India&format=json&apiKey=${apiKey}`
  );
  const pointsOfInterest = await getPointsOfInterest(response);
  res.status(200).json(pointsOfInterest);
});

app.get(
  "/api/v1/geocode/reverse",
  cache("5 minutes"),
  async function (req, res) {
    const { lat, lon } = req.query;
    const response =
      await axios.get(`${baseUrl}/v1/geocode/reverse?lat=${lat}&lon=${lon}&format=json&apiKey=${apiKey}
    `);
    const pointsOfInterest = await getPointsOfInterest(response);
    res.status(200).json(pointsOfInterest);
  }
);

app.get("/api/v1/place-details", cache("5 minutes"), async function (req, res) {
  const { placeId } = req.query;
  const response = await axios.get(
    `${baseUrl}/v2/place-details?id=${placeId}&apiKey=${apiKey}`
  );
  res.status(200).json(response.data);
});

app.listen(port, function () {
  console.log(`server listening on port ${port}`);
});
