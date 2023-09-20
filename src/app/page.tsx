"use client"
import NowShowingMovies from "./components/NowShowing"
import {Box, Grid} from "@mui/material/"
import Preview from "./components/Preview"

export default function Home() {
 
  return (
  <>
  
      <Grid container direction={"column"} width={1} pt={11}>
        <Preview></Preview>
        <NowShowingMovies></NowShowingMovies>
      </Grid>
  </>
  )
}
