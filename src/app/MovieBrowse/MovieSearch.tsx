
"use client"
import {Box, Typography, Grid, Pagination, Stack, Button} from "@mui/material/";
import MovieBox from "../components/MovieBox";
import * as React from 'react';

const MovieSearch = () => {
    const [pageIndex, setPageIndex] = React.useState(1);

    const pageChangeHandler = async (event: React.ChangeEvent<unknown>, value: number) => {
        // console.log(value);
        setPageIndex(value);
    }

    return (
        <Box sx = {{ height:'fill'}}> 
            <Typography fontWeight='bold'variant = 'h5' sx = {{pb:5} }> Movies </Typography>
                <Box sx = {{width:'100%'}}>
                    <Box sx ={{display:'flex', border:1, justifyContent:'center'}}>
                        <Grid container pl={4} columns= {4} columnGap={10} rowGap={4}>
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
                            <MovieBox></MovieBox>
                        </Grid> 
                    </Box>
                    
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