import axios from "axios";
import { getUrl } from "../utils/getUrl";
import { Units, ApiResponse } from "../types";
import { UnixDateConvert } from "../utils/unixDateConvert";

export const ApiCaller = async (searchCity: string) => {
  const { forecastUrl } = getUrl({
    searchCity,
    getForecast: true,
    units: Units.Metric,
  });

  let weatherResponse, forecastResponse;

  if (forecastUrl) {
    forecastResponse = (await axios.get(forecastUrl))?.data;
  }

  const longitude: number = forecastResponse?.city.coord.lon;
  const latitude: number = forecastResponse?.city.coord.lat;

  const { weatherUrl } = getUrl({
    searchCity,
    longitude,
    latitude,
    getWeather: true,
    units: Units.Metric,
  });

  if (weatherUrl) {
    weatherResponse = (await axios.get(weatherUrl))?.data;
  }
  console.log(`🅰️`, weatherResponse);
  console.log(`🅱️`, forecastResponse);

  const { longStringDate: date } = UnixDateConvert(weatherResponse?.current.dt);
  const { time: sunRise } = UnixDateConvert(weatherResponse?.current.sunrise);
  const { time: sunSet } = UnixDateConvert(weatherResponse?.current.sunset);
  const humidity = weatherResponse?.current.humidity;
  const temperature = weatherResponse?.current.temp;
  const feelsLike = weatherResponse?.current.feels_like;
  const cloudiness = weatherResponse?.current.clouds; //! New
  const uvIndex = weatherResponse?.current.uvi;
  const visibility = weatherResponse?.current.visibility;
  const rain = weatherResponse?.current.rain; //! New
  const snow = weatherResponse?.current.snow; //! New
  const description = weatherResponse?.current.weather.description;
  const iconID = weatherResponse?.current.weather.icon;
  const weatherIconUrl = `https://openweathermap.org/img/wn/${iconID}@2x.png`;

  const result: ApiResponse = {
    cloudiness,
    date,
    feelsLike,
    sunRise,
    sunSet,
    uvIndex,
    weatherIconUrl,
    visibility,
    humidity,
    temperature,
    description,
  };
};

/**
  uvIndex?: number
 */
