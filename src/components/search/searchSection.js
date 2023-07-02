import { Box } from "@mui/material"
import React, { useState } from "react"
import { makeStyles } from "@mui/styles"
import SearchField from "./searchField"
import CustomSearchIcon from "./customSearchIcon"

const useStyles = makeStyles((theme) => ({
  boxPadding: {
    padding: 5,
  },
}))

const SearchSection = (props) => {
  const { onClick, loading, error } = props
  const classes = useStyles()

  const [countryName, setCountryName] = useState("")
  const [cityName, setCityName] = useState("")

  const onSearchClick = () => {
    onClick(countryName, cityName)
  }
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          flexGrow: 1,
        }}
      >
        <Box className={classes.boxPadding}>
          <SearchField
            label="Country"
            fieldName={countryName}
            setFieldName={setCountryName}
            loading={loading}
            onClick={onSearchClick}
          />
        </Box>
        <Box className={classes.boxPadding}>
          <SearchField
            label="City"
            fieldName={cityName}
            setFieldName={setCityName}
            loading={loading}
            error={error}
            onClick={onSearchClick}
          />
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          paddingLeft: 1,
          alignItems: "flex-end",
        }}
      >
        <Box className={classes.boxPadding}>
          <CustomSearchIcon onClick={onSearchClick} />
        </Box>
      </Box>
    </Box>
  )
}

export default SearchSection
