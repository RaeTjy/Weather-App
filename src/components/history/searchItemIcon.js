import React from "react"
import { IconButton } from "@mui/material"
import SearchIcon from "@mui/icons-material/Search"
import DeleteIcon from "@mui/icons-material/Delete"

const SearchItemIcon = (props) => {
  const { iconType, onClick } = props

  const getIcon = () => {
    switch (iconType) {
      case "viewMore":
        return <SearchIcon />

      case "delete":
        return <DeleteIcon />

      default:
        break
    }
  }
  return (
    <IconButton
      style={{
        borderRadius: "50px",
        boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
        backgroundColor: "white",
        marginLeft: 5,
        padding: 6,
      }}
      onClick={onClick}
    >
      {getIcon()}
    </IconButton>
  )
}

export default SearchItemIcon
