
"use client"
import {Box, Typography, Grid, Pagination, Stack, Button} from "@mui/material/";
import MovieBox from "../components/MovieBox";
import * as React from 'react';
import { useState } from "react";

const MovieSearch = () => {
    const [pageIndex, setPageIndex] = useState<number>(1);

    const pageChangeHandler = async (event: React.ChangeEvent<unknown>, value: number) => {
        // console.log(value);
        setPageIndex(value);
    }

    return (
        <Box sx = {{ height:'fill', pl:5, pr:5}}> 
            <Typography fontWeight='bold'variant = 'h5' sx = {{pb:2, mt:5} }> Movies </Typography>
                <Grid container justifyContent='center' sx = {{width:'100%'}}>
                        <Grid container columns={{xs: 1, sm: 2, md:12}} columnSpacing={6} rowGap={2} >
                            <MovieBox></MovieBox>
                            <MovieBox></MovieBox>
                            <MovieBox></MovieBox>
                            <MovieBox></MovieBox>
                            <MovieBox></MovieBox>
                            <MovieBox></MovieBox>
                            <MovieBox></MovieBox>
                            <MovieBox></MovieBox>      
                        </Grid> 
                    
                    <Pagination 
                                sx={{display:"flex", justifyContent:"center"}}
                                count={10} 
                                showFirstButton showLastButton 
                                size="large" 
                                color="primary"
                                page={pageIndex}
                                onChange={pageChangeHandler}/>
                        
            </Grid>
        </Box>
    )
}

export default MovieSearch;