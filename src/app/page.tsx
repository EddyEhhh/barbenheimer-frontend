"use client"
import NowShowingMovies from "./components/NowShowing"
import {Box, Grid} from "@mui/material/"
import Preview from "./components/Preview"
import { Suspense } from "react"
import LoadingPage from "./Loading"

export default function Home() {
 
  return (
  <>
      <Grid container direction={"column"} width={1} >

        <Preview></Preview>
        <NowShowingMovies></NowShowingMovies>

      </Grid>
  </>
  )
}
