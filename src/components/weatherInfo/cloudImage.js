import { Box } from "@mui/material"
import React from "react"
import { makeStyles } from "@mui/styles"

const useStyles = makeStyles((theme) => ({
  floatingBox: {
    position: "absolute",
    top: "-50px",
    right: "10px",
  },
  image: {
    maxHeight: "10rem",
  },
}))

const CloudImage = (props) => {
  const { isSunny } = props
  const classes = useStyles()
  return (
    <Box className={classes.floatingBox}>
      {isSunny ? (
        <img src="/assets/sun.png" className={classes.image} />
      ) : (
        <img src="/assets/cloud.png" className={classes.image} />
      )}
    </Box>
  )
}

export default CloudImage
