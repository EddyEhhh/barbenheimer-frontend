"use client"
import NowShowingMovies from "./components/NowShowing"
import { Typography,Button, Box, Container, Pagination, colors} from "@mui/material/"
import Preview from "./components/Preview"

export default function Home() {
  return (
  <>
    <Box sx = {{display: "flex", flexDirection: "column"}}>
      <Preview></Preview>
     
      <NowShowingMovies></NowShowingMovies>
    </Box>
  </>
  )
}
