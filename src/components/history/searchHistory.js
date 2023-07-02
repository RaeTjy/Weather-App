import { Box } from "@mui/material"
import { makeStyles } from "@mui/styles"
import React from "react"
import { getObjectByPath } from "../../helpers/app-helpers"
import HistoryItem from "./historyItem"

const useStyles = makeStyles((theme) => ({
  history: {
    marginTop: 20,
    padding: 20,
    display: "flex",
    flexGrow: 1,
    flexDirection: "column",
    borderRadius: "30px",
    backgroundColor: "rgba(254, 230, 255, 0.5)",
    zIndex: 3,
    minHeight: 200,
  },
  historyList: {
    overflowY: "auto",
  },
}))

const SearchHistory = (props) => {
  const classes = useStyles()
  const { searchHistory, onDeleteClick } = props

  return (
    <Box className={classes.history}>
      <p>Search History</p>
      <Box className={classes.historyList}>
        {searchHistory.map((searchHistoryItem) => {
          const id = getObjectByPath(searchHistoryItem, "id")
          return (
            <HistoryItem
              key={id}
              id={id}
              item={searchHistoryItem}
              onDeleteClick={onDeleteClick}
            />
          )
        })}
      </Box>
    </Box>
  )
}

export default SearchHistory
