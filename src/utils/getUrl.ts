import { getApiKey } from "./getApiKey";
import { Url } from "../types";

export const getUrl = (props: Url) => {
  const {
    searchCity,
    units,
    longitude,
    latitude,
    getForecast,
    getWeather,
  } = props;
  const { weatherApiKey: apiKey } = getApiKey();

  const weatherUrl =
    apiKey && getWeather
      ? `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=minutely,hourly&appid=${apiKey}&units=${units}`
      : undefined;

  const forecastUrl =
    apiKey && getForecast
      ? `https://api.openweathermap.org/data/2.5/forecast?q=${searchCity}&appid=${apiKey}&units=${units}`
      : undefined;

  return {
    weatherUrl,
    forecastUrl,
  };
};
