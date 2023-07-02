import { Box, IconButton, TextField } from "@mui/material"
import { makeStyles } from "@mui/styles"
import React from "react"
import ClearIcon from "@mui/icons-material/Clear"
import { isNullOrEmpty } from "../../helpers/app-helpers"
import CircularProgress from "@mui/material/CircularProgress"

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiInputBase-root": {
      borderRadius: "20px",
      backgroundColor: "rgba(254, 230, 255, 0.5)",
    },
    "& .MuiFormLabel-root.Mui-error": {
      color: "red !important",
    },
    "& .MuiFormHelperText-root": {
      position: "absolute",
      bottom: "-2rem",
    },
  },
}))

const SearchField = (props) => {
  const { label, fieldName, setFieldName, loading, error, onClick } = props
  const classes = useStyles()

  const handleValueChange = (e) => {
    setFieldName(e.target.value)
  }

  const handleClearClick = () => {
    setFieldName("")
  }

  const handleEnterClick = (e) => {
    if (e.key === "Enter") {
      onClick()
    }
  }

  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <TextField
        variant="filled"
        label={label}
        className={classes.root}
        size="small"
        fullWidth
        InputProps={{
          disableUnderline: true,
          endAdornment: loading ? (
            <IconButton>
              <CircularProgress size="1.5rem" color="primary" />
            </IconButton>
          ) : (
            <IconButton onClick={handleClearClick}>
              <ClearIcon />
            </IconButton>
          ),
        }}
        InputLabelProps={{ style: { color: "dimgrey" } }}
        value={fieldName}
        onChange={handleValueChange}
        onKeyDown={handleEnterClick}
        error={!isNullOrEmpty(error)}
        helperText={error}
      />
    </Box>
  )
}

export default SearchField
