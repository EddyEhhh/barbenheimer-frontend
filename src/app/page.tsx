import NowShowingMovies from "./components/NowShowing"
import { Typography, Box, Container} from "@mui/material/"
import Preview from "./components/Preview"

export default function Home() {
  return (
  <>
    <Box sx = {{display: "flex", flexDirection: "column"}}>
      <Preview></Preview>
      <Container></Container>
      <NowShowingMovies></NowShowingMovies>

    </Box>
  </>
  )
}
