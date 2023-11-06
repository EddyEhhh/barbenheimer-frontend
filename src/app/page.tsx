"use client"
import NowShowingMovies from "./components/(homePage)/NowShowing"
import {Box, Grid} from "@mui/material/"
import Preview from "./components/(homePage)/Preview"
import { Suspense } from "react"
import LoadingPage from "./Loading"
import useAuth, {client} from "@/app/services/UserService";

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
