import { Box } from "@mui/material"
import React from "react"
import "./weather.css"
import { getObjectByPath } from "../../helpers/app-helpers"

const WeatherData = (props) => {
  const { weatherData } = props
  return (
    <Box className="currentWeatherSection">
      <Box className="mainWeather">
        <p>Today's Weather</p>
        <h1>{getObjectByPath(weatherData, "mainTemp")}°</h1>
        <Box className="rowSection">
          <p>H: {getObjectByPath(weatherData, "highTemp")}° </p>
          <p>L: {getObjectByPath(weatherData, "lowTemp")}°</p>
        </Box>
        <Box className="rowSection">
          <p>{getObjectByPath(weatherData, "cityName")}</p>
        </Box>
      </Box>

      <Box className="rowSectionFull">
        <p>{getObjectByPath(weatherData, "dateTime")}</p>
        <p>Humdity: {getObjectByPath(weatherData, "humidity")} %</p>
        <p>{getObjectByPath(weatherData, "weatherDesc")}</p>
      </Box>
    </Box>
  )
}

export default WeatherData
