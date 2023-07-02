import { IconButton } from "@mui/material"
import SearchIcon from "@mui/icons-material/Search"

const CustomSearchIcon = (props) => {
  const { onClick } = props
  return (
    <IconButton
      style={{
        height: "20px",
        width: "20px",
        borderRadius: "15px",
        padding: 23,
        backgroundColor: "indigo",
      }}
      onClick={onClick}
    >
      <SearchIcon style={{ color: "white" }} />
    </IconButton>
  )
}

export default CustomSearchIcon
