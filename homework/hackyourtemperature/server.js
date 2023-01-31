import fetch from "node-fetch";
import { key } from "./sources/keys.js";

const postAndFetch = async (req, res) => {
  const cityName = req.body.cityName;
  try {
    const weatherDataFetch = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=${key.API_KEY}&units=metric`
    );
    const weatherData = await weatherDataFetch.json();
    if (weatherData.cod === "404") {
      res.status(404).send({ weatherText: "City is not found!" });
    } else {
      const responseData = {
        cityName: weatherData.name,
        temperature: `${weatherData.main.temp} °C`,
      };
      res.send(responseData);
    }
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
};

export default postAndFetch;
