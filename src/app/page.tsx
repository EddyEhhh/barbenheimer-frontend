"use client"
import NowShowingMovies from "./components/NowShowing"
import { Typography,Button, Box, Container, Pagination} from "@mui/material/"
import Preview from "./components/Preview"

export default function Home() {
  return (
  <main>
    <Box sx = {{display: "flex", flexDirection: "column"}}>
      <Preview></Preview>
      <NowShowingMovies></NowShowingMovies>
    </Box>
  </main>
  )
}
