
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
        <Box sx = {{ mt:10, pl:5, pr:5, display:'flex', justifyContent:'center'}}> 
            <Box display='flex' width={1} flexDirection='column' justifyContent="center" alignContent="center">
                <Grid container columns={{lg:4, md:3, sm:2, xs:1}} paddingLeft={1} columnSpacing={5} rowSpacing={2}>
                        <MovieBox></MovieBox>
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
                
                <Pagination 
                    sx={{display:"flex", justifyContent:"center"}}
                    count={10} 
                    showFirstButton showLastButton 
                    size="large" 
                    color="primary"
                    page={pageIndex}
                    onChange={pageChangeHandler}/>
                    
        </Box>
        </Box>
    )
}

export default MovieSearch;