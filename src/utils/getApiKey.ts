interface ApiKeys {
  weatherApiKey: string;
  googleApiKey: string;
}
export const getApiKey = (): ApiKeys => {
  //! Do not do this in a production app (these keys are restricted)
  return {
    weatherApiKey: String(process.env.REACT_APP_WEATHER_API_KEY),
    googleApiKey: String(process.env.REACT_APP_GOOGLE_API_KEY),
  };
};
