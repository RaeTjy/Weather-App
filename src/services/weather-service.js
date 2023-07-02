import axios from "axios"
import { isNullOrEmpty } from "../helpers/app-helpers"

const baseUrl = "https://api.openweathermap.org/data/2.5/weather"
export const WeatherService = {
  getWeatherApiKey() {
    return process.env.REACT_APP_WEATHER_API_KEY
  },

  getWeather(cityName, countryName, units) {
    let params = "?q="
    if (!isNullOrEmpty(cityName)) {
      params += cityName
    }
    if (!isNullOrEmpty(countryName)) {
      if (!isNullOrEmpty(cityName)) {
        params += ","
      }
      params += countryName
    }

    params += "&units=" + units + "&appid=" + this.getWeatherApiKey()

    return axios
      .get(baseUrl + params)
      .then((response) => {
        return response.data
      })
      .catch(function (error) {
        return error.response.data
      })
  },

  getWeatherFromLatLong(latitude, longitude, units) {
    let params = "?"
    if (!isNullOrEmpty(latitude)) {
      params += "&lat=" + latitude
    }
    if (!isNullOrEmpty(longitude)) {
      params += "&lon=" + longitude
    }

    params += "&units=" + units + "&appid=" + this.getWeatherApiKey()

    return axios
      .get(baseUrl + params)
      .then((response) => {
        return response.data
      })
      .catch(function (error) {
        return error.response.data
      })
  },
}
