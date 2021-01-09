import { getApiKey } from './getApiKey'

interface UrlParams {
    searchCity?: string
    units?: Units
    longitude?: number
    latitude?: number
    isForecastUrl?: boolean
    isUvUrl?: boolean
    isWeatherUrl?: boolean
}

enum Units {
    Standard = "standard",
    Metric = "metric",
    Imperial = "imperial",
}

export const getUrl = (props: UrlParams) => {
    const { searchCity, units, longitude, latitude, isForecastUrl, isUvUrl, isWeatherUrl } = props
    const apiKey = getApiKey()

    const weatherUrl = apiKey && isWeatherUrl && `https://api.openweathermap.org/data/2.5/weather?q=${searchCity}&appid=${apiKey}&units=${units}`

}