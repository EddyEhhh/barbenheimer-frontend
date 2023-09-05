import {Box, Typography, Grid} from "@mui/material/";
import MovieBox from "./MovieBox";

const NowShowingMovies = () => {
    return (
        <Box sx = {{pl:'20', pr:'20'}}> 
        <Typography fontWeight='bold'variant = 'h5' sx = {{pb:'30'} }> Showtimes </Typography>
            <Box sx = {{width:'100%', height:'fill'}}>
                <Grid container columnGap={10} rowGap={4} alignContent={'center'} justifyContent={'center'}>
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