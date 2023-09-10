"use client"
import NowShowingMovies from "./components/NowShowing"
import { Typography,Button, Box, Container, Pagination, colors} from "@mui/material/"
import Preview from "./components/Preview"

export default function Home() {
  return (
  <>
    <Box sx = {{display: "flex", flexDirection: "column"}}>
      <Preview></Preview>
      <Box sx={{backgroundColor:'text.disabled', height:60, width:'1', mb:5, pl:5, display:"flex", alignItems:'center'}}>
        <Typography color='white' fontWeight='bold' variant = 'h5'> Showtimes </Typography>
      </Box> 
      <NowShowingMovies></NowShowingMovies>
    </Box>
  </>
  )
}
