export enum Units {
  Metric = "metric",
  Imperial = "imperial",
}

export interface Url {
  searchCity?: string;
  units?: Units;
  longitude?: number;
  latitude?: number;
  getForecast?: boolean;
  getWeather?: boolean;
}

export interface ApiResponse {
  cloudiness?: number
  date?: string;
  sunRise?: string;
  sunSet?: string;
  temperature?: number;
  feelsLike?: number;
  description?: string;
  humidity?: number;
  weatherIconUrl?: string;
  uvIndex?: number;
  visibility?: number;
}