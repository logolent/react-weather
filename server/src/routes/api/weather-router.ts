import express from "express";
import axios from "axios";

const router = express.Router();

const API_KEY = process.env.NODE_APP_WEATHER_API_KEY;
const weatherApiUrl = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&aqi=no&lang=ru&q=`;

// get current weather
router.get("/", async (req: express.Request, res: express.Response) => {
  const search = req.query.search;
  try {
    const apiResponse = await axios.get(weatherApiUrl + search);
    res.status(200).json(apiResponse.data);
  } catch (e) {
    res.status(res.statusCode).json({ error: e.message });
  }
});

export default router;
