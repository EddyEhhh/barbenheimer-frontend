"use client"
import {Box, Typography, Grid, Pagination, Stack, Button} from "@mui/material/";
import MovieBox from "./MovieBox";
import * as React from 'react';

const NowShowingMovies = () => {
    const [pageIndex, setPageIndex] = React.useState(1);

    const pageChangeHandler = async (event: React.ChangeEvent<unknown>, value: number) => {
        setPageIndex(value);
    }


    return (
        <Grid container justifyContent='center' sx = {{pl:10, pr:10, height:'fill'}}> 
            <Box sx = {{width:'100%'}}>
                <Grid container direction='row' columns={{xs: 1, sm: 1, md:12}} columnSpacing={6} rowGap={4}>
                    <MovieBox></MovieBox>
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

            <Grid item sx ={{mt:10}}>
                <Pagination 
                    count={10} 
                    showFirstButton showLastButton 
                    size="large" 
                    color="primary"
                    page={pageIndex}
                    onChange={pageChangeHandler}/>
            </Grid>
        </Grid>
    )
}

export default NowShowingMovies;