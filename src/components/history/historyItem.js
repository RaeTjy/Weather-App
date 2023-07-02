import { Box, Dialog, DialogContent, DialogTitle } from "@mui/material"
import { makeStyles } from "@mui/styles"
import React, { useState } from "react"
import { getObjectByPath } from "../../helpers/app-helpers"
import SearchItemIcon from "./searchItemIcon"
import WeatherData from "../weatherInfo/weatherData"

const useStyles = makeStyles((theme) => ({
  history: {
    padding: 10,
    marginTop: 10,
    display: "flex",
    flexDirection: "row",
    borderRadius: "20px",
    backgroundColor: "rgba(254, 230, 255)",
    justifyContent: "space-between",
    alignItems: "center",
  },
  details: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
}))

const HistoryItem = (props) => {
  const classes = useStyles()
  const { id, item, onDeleteClick } = props

  const [open, setOpen] = useState(false)

  const cityName = getObjectByPath(item, "cityName")
  const dateTime = getObjectByPath(item, "dateTime")

  const handleDeleteClick = () => {
    onDeleteClick(id)
  }
  const handleViewMore = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <Box className={classes.history}>
      <p>{cityName}</p>
      <Box className={classes.details}>
        <p>{dateTime}</p>
        <SearchItemIcon iconType={"viewMore"} onClick={handleViewMore} />
        <SearchItemIcon iconType={"delete"} onClick={handleDeleteClick} />
      </Box>

      <Dialog onClose={handleClose} open={open}>
        <DialogTitle>{cityName}</DialogTitle>
        <DialogContent>
          <WeatherData weatherData={item} />
        </DialogContent>
      </Dialog>
    </Box>
  )
}

export default HistoryItem
