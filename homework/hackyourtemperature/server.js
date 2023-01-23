import fetch from "node-fetch";
import app from "./app.js";
import { API_KEY } from "./sources/keys.js";

async function fetchData(url) {
  try {
    const jsonResponse = await fetch(url).then((response) => response.json());
    return jsonResponse;
  } catch (error) {
    console.log(error);
  }
}

app.post("/weather", async (req, res) => {
  const cityName = req.body.cityName;
  try {
    const weatherData = await fetchData(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=${API_KEY}`
    );
    if (weatherData.cod === "404") {
      res.send({ weatherText: "City is not found!" });
    } else {
      const responseData = {
        cityName: weatherData.name,
        country: weatherData.sys.country,
        temperature: `${parseFloat(Number(weatherData.main.temp) - 273.15).toFixed(2)} °C`
      };
      res.send(responseData);
    }
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
});
