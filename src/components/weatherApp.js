import { Box } from "@mui/material"
import React, { useEffect, useState } from "react"
import SearchSection from "./search/searchSection"
import { WeatherService } from "../services/weather-service"
import WeatherSection from "./weatherInfo/weatherSection"
import { isNullOrEmpty, parseWeatherData } from "../helpers/app-helpers"

const WeatherApp = () => {
  const [searchResult, setSearchResult] = useState({
    id: "-",
    mainTemp: "-",
    highTemp: "-",
    lowTemp: "-",
    humidity: "-",
    weatherDesc: "-",
    cityName: "-",
    dateTime: "-",
    isSunny: "-",
  })

  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  const [searchHistory, setSearchHistory] = useState([])

  //Set default location to current user location
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(getDefaultWeather)
    }
  }, [])

  const getDefaultWeather = (currPos) => {
    const latitude = currPos.coords.latitude
    const longitude = currPos.coords.longitude
    if (!isNullOrEmpty(latitude) && !isNullOrEmpty(longitude)) {
      setLoading(true)
      WeatherService.getWeatherFromLatLong(latitude, longitude, "metric").then(
        (res) => {
          if (res.cod === 200) {
            const newWeatherData = parseWeatherData(res)
            setSearchResult(newWeatherData)
            setError("")
          } else {
            setError(res.message)
          }
          setLoading(false)
        }
      )
    }
  }

  const onSearchClick = (countryName, cityName) => {
    setLoading(true)

    WeatherService.getWeather(cityName, countryName, "metric").then((res) => {
      if (res.cod === 200) {
        const newWeatherData = parseWeatherData(res)
        setSearchResult(newWeatherData)
        setSearchHistory([...searchHistory, newWeatherData])
        setError("")
      } else {
        setError(res.message)
      }
      setLoading(false)
    })
  }

  const onDeleteClick = (id) => {
    const newSearchHistory = searchHistory.filter((obj) => obj.id !== id)
    setSearchHistory(newSearchHistory)
  }

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        minHeight: "100%",
        maxHeight: "100%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexGrow: 1,
          flexDirection: "column",
          padding: "30px 30px",
          maxWidth: 800,
        }}
      >
        <SearchSection
          onClick={onSearchClick}
          loading={loading}
          error={error}
        />
        <WeatherSection
          weatherData={searchResult}
          searchHistory={searchHistory}
          onDeleteClick={onDeleteClick}
        />
      </Box>
    </Box>
  )
}

export default WeatherApp
