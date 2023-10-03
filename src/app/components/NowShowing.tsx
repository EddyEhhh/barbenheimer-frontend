"use client"
import {Box, Typography, Grid, Pagination, Tabs, Tab, Fade} from "@mui/material/";
import MovieBox from "./MovieBox";
import * as React from 'react';
import { useState, useEffect, createContext, useContext } from "react";
import AxiosInstance from "../api/AxiosInstance";
import { getAllMovies } from "../services/services";
import { MovieDetailsInterface } from "../interface/interface";


const NowShowingMovies = () => {
    const [movieData, setMovieData] = useState<MovieDetailsInterface[][]>([[]]);
    const [pageIndex, setPageIndex] = useState<number>(1);
    const [value, setValue] = useState(0);
    // 0 - nowShowing , 1 = advanced sales, 2= comming soon
    const wantedItemsPerPage: number = 10;
    //xl-6(12) lg-5(10)
    //how to make this dynamic?

    useEffect (() => {
        const fetchData = async () => {
        try {
            const data =  await getAllMovies()
            
            let itemsPerPage: number = 0;
            let index: number = 0; 
//console.log(data);

            const pagination : MovieDetailsInterface[][] = [[]];
             data.map((data : MovieDetailsInterface) => {
//console.log(new Date(data.showingDate) <= new Date());
                if (new Date(data.showingDate) <= new Date()){
                    if (itemsPerPage == wantedItemsPerPage) {
                        itemsPerPage = 0;
                        index++;
                        pagination[index] = [];
                    }
                    pagination[index][itemsPerPage] = data;
                    itemsPerPage++;
                }
                
            });
            setMovieData(pagination); 
            
            } catch(error) {
                //inset error
            }
        }
        fetchData();
    }, [])

    const pageChangeHandler = async (event: React.ChangeEvent<unknown>, value: number) => {
        setPageIndex(value);
    }

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };


    return (
        <Grid container justifyContent='center' alignItems='center' sx = {{pl:10, pr:10, mt:3, height:'100%'}}>      
            <Tabs textColor="inherit" value={value} onChange={handleChange} centered>
                <Tab sx={{fontSize:"small"}} label="Now Showing"/>
                <Tab sx={{fontSize:"small"}} label="Advanced Sales" />
                <Tab sx={{fontSize:"small"}} label="Coming Soon" />
            </Tabs>
        
        <Box sx={{height:30, width:'1', mb:1, display:"flex", alignItems:'center'}}>
                <Typography variant = 'subtitle1'> Shows </Typography>
            </Box> 
          
            <Box sx = {{width:'100%'}}>
                {/* <Fade in={true} timeout={1800} mountOnEnter unmountOnExit> */}
                <Grid container columns={{xl:5, lg:4, md:3, sm:2, xs:1}} columnSpacing={2} rowSpacing={3}>
                    {value == 0 && movieData[pageIndex-1].map((movieData) => (
                        <MovieBox 
                            key={movieData.id} 
                            id={movieData.id}
                            title={movieData.title} 
                            ageRestriction={movieData.ageRestriction} 
                            runtimeInMinute={movieData.runtimeInMinute} 
                            movieImages={movieData.movieImages[0].imageUrl}
                        ></MovieBox>
                        ))
                    }
                </Grid>
                {/* </Fade> */}
            </Box>

            <Grid item sx ={{mt:10}}>
                <Pagination 
                    count={movieData.length} 
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