interface ApiKeys {
  weatherApiKey: string;
  googlePlacesApiKey: string;
}
export const getApiKey = (): ApiKeys => {
  //! Do not do this in a production app
  return {
    weatherApiKey: String(process.env.REACT_APP_WEATHER_API_KEY),
    googlePlacesApiKey: String(process.env.REACT_APP_GOOGLE_API_KEY),
  };
};
