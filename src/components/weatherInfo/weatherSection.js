import { Box } from "@mui/material"
import React from "react"
import { makeStyles } from "@mui/styles"
import CloudImage from "./cloudImage"
import WeatherData from "./weatherData"
import { getObjectByPath } from "../../helpers/app-helpers"
import SearchHistory from "../history/searchHistory"

const useStyles = makeStyles((theme) => ({
  main: {
    overflow: "hidden",
    display: "flex",
    flexGrow: 1,
    zIndex: 2,
  },
  weatherBox: {
    position: "relative",
    marginTop: 50,
    padding: 30,
    display: "flex",
    flexGrow: 1,
    flexDirection: "column",
    borderRadius: "30px",
    backgroundColor: "rgba(254, 230, 255, 0.5)",
  },
}))

const WeatherSection = (props) => {
  const { weatherData, searchHistory, onDeleteClick } = props
  const classes = useStyles()
  return (
    <Box className={classes.main}>
      <Box className={classes.weatherBox}>
        <WeatherData weatherData={weatherData} />
        <CloudImage isSunny={getObjectByPath(weatherData, "isSunny")} />
        <SearchHistory
          searchHistory={searchHistory}
          onDeleteClick={onDeleteClick}
        />
      </Box>
    </Box>
  )
}

export default WeatherSection
