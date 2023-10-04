
"use client"
import {Box,Grid,Pagination} from "@mui/material/";
import MovieBox from "../components/MovieBox";
import * as React from 'react';
import { useState , useEffect, Suspense} from "react";
import { getAllMovies } from "../services/services";
import { MovieDetailsInterface } from "../interface/interface";

const MovieSearch = () => {
    const [movieData, setMovieData] = useState<MovieDetailsInterface[][]>([[]]);
    const [pageIndex, setPageIndex] = useState<number>(1);
    const pageChangeHandler = async (event: React.ChangeEvent<unknown>, value: number) => {
        setPageIndex(value);
    }
    const wantedItemsPerPage: number = 10;
    useEffect (() => {
        const fetchData = async() => {
            const data = await getAllMovies();
            let itemsPerPage: number = 0;
            let index: number = 0; 
            const pagination : MovieDetailsInterface[][] = [[]];
            data.map((data : MovieDetailsInterface) => {
                if (itemsPerPage == wantedItemsPerPage) {
                    itemsPerPage = 0;
                    index++;
                    pagination[index] = [];
                }
                pagination[index][itemsPerPage] = data;
                itemsPerPage++;
            });
            setMovieData(pagination);
        }
        fetchData();       
       
    }, [])

    return (
            <Box sx = {{ mt:10, pl:5, pr:5, display:'flex', justifyContent:'center'}}> 
                <Box display='flex' width={1} flexDirection='column' justifyContent="center" alignContent="center">
                    <Grid container columns={{lg:5, md:3, sm:2, xs:1}} paddingLeft={1} columnSpacing={3} rowSpacing={2}>
                        { 
                        movieData[pageIndex-1].map((data)=> (
                            <MovieBox 
                            key={data.id}
                            id={data.id} 
                            title={data.title} 
                            movieImages={data.movieImages[0].imageUrl}
                            ageRestriction={data.ageRestriction}
                            runtimeInMinute={data.runtimeInMinute} 
                            ></MovieBox> )) 
                        }   
                    </Grid> 
                    {movieData && <Pagination 
                        sx={{display:"flex", justifyContent:"center"}}
                        count={movieData.length} 
                        showFirstButton showLastButton 
                        size="large" 
                        color="primary"
                        page={pageIndex}
                        onChange={pageChangeHandler}/>}
                </Box>
            </Box>
    )
}

export default MovieSearch;