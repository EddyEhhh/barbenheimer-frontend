"use client"
import {Box, Typography, Grid, Pagination, Stack, Button} from "@mui/material/";
import MovieBox from "./MovieBox";
import * as React from 'react';

const NowShowingMovies = () => {
    const [pageIndex, setPageIndex] = React.useState(1);

    const pageChangeHandler = async (event: React.ChangeEvent<unknown>, value: number) => {
        // console.log(value);
        setPageIndex(value);
    }

    return (
        <Box sx = {{pl:'20', pr:'20', height:'fill'}}> 
            <Box sx = {{width:'100%'}}>
                <Grid container columns= {4} columnGap={10} rowGap={4} alignContent={'center'} justifyContent={'center'}>
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
            <Stack>
                <Pagination 
                    count={10} 
                    showFirstButton showLastButton 
                    size="large" 
                    color="primary"
                    page={pageIndex}
                    onChange={pageChangeHandler}/>
            </Stack>
        </Box>
    )
}

export default NowShowingMovies;