import {Box, Typography, Grid} from "@mui/material/";
import MovieBox from "./MovieBox";

const NowShowingMovies = () => {
    return (
        <Box sx = {{pl:'20', pr:'20'}}> 
            <Typography variant = 'h5' sx = {{pb:'20'}  }> Now Showing </Typography>
            <Box sx = {{width:'100%', height:'fill', backgroundColor: 'transparent'}}>
                <Grid container columnGap={12} rowGap={4}>
                    <MovieBox></MovieBox>
                    <MovieBox></MovieBox>
                    <MovieBox></MovieBox>
                    <MovieBox></MovieBox>
                    <MovieBox></MovieBox>
                    <MovieBox></MovieBox>
                    <MovieBox></MovieBox>
                    <MovieBox></MovieBox>
                </Grid>
                
            </Box>
        </Box>
    )
}

export default NowShowingMovies;