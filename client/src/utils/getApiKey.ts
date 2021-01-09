export const getApiKey = (): string | undefined => {
    return process.env.REACT_APP_API_KEY; //! Do not do this in a production app, secrets are still exposed in a client app
}