import { getApiKey } from "./getApiKey";
interface Url {
  searchCity?: string;
  units?: Units;
  longitude?: number;
  latitude?: number;
  isForecastUrl?: boolean;
  isUvUrl?: boolean;
  isWeatherUrl?: boolean;
}

enum Units {
  Standard = "standard",
  Metric = "metric",
  Imperial = "imperial",
}

export const getUrl = (props: Url) => {
  const {
    searchCity,
    units,
    longitude,
    latitude,
    isForecastUrl,
    isUvUrl,
    isWeatherUrl,
  } = props;
  const apiKey = getApiKey();

  const weatherUrl =
    apiKey &&
    isWeatherUrl &&
    `https://api.openweathermap.org/data/2.5/weather?q=${searchCity}&appid=${apiKey}&units=${units}`;

  const uvUrl =
    apiKey &&
    isUvUrl &&
    `https://api.openweathermap.org/data/2.5/uvi?&appid=${apiKey}&lat=${latitude}&lon=${longitude}`;

  const forecastUrl =
    apiKey &&
    isForecastUrl &&
    `https://api.openweathermap.org/data/2.5/forecast?q=${searchCity}&appid=${apiKey}&units=${units}`;

  return {
    weatherUrl,
    uvUrl,
    forecastUrl,
  };
};
