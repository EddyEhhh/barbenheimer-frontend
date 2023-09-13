"use client"
import {Box, Typography, Grid, Pagination, Tabs, Tab, Paper} from "@mui/material/";
import MovieBox from "./MovieBox";
import * as React from 'react';
import { useState } from "react";
const NowShowingMovies = () => {
    const [pageIndex, setPageIndex] = React.useState(1);

    const pageChangeHandler = async (event: React.ChangeEvent<unknown>, value: number) => {
        setPageIndex(value);
    }

    const [nowShowing, setNowShowing] = useState<boolean>(true);
    const [advancedSales, setAdvancedSales] = useState<boolean>(false);
    const [comingSoon, setComingSoon] = useState<boolean>(false);
    const [value, setValue] = useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };


    // const nowShowingHandler = () => {
    //     if (nowShowing === false) {
    //         setNowShowing(true);
    //         setAdvancedSales(false);
    //         setComingSoon(false);
    //     }
    // }

    // const advancedSalesHandler = () => {
    //     if (!advancedSales) {
    //         setAdvancedSales(true);
    //         setNowShowing(false);
    //         setComingSoon(false);
    //     }
    // }

    // const comingSoonHandler =() =>{
    //     if (!comingSoon) {
    //         setComingSoon(true);
    //         setAdvancedSales(false);
    //         setNowShowing(false);
    //     }
    // }

    return (
      
        
        <Grid container justifyContent='center' alignItems='center' sx = {{pl:10, pr:10, mt:3, height:'fill'}}> 
            {/*         
            <Grid sx={{display:'flex', flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
                <Typography onClick ={nowShowingHandler} color='white' fontWeight={nowShowing === true ? 'bold' : ''} variant = 'h6'> Now Showing </Typography>
                <Typography onClick ={advancedSalesHandler} pl={8} color='white' fontWeight={advancedSales === true ? 'bold' : ''} variant = 'h6'> Advance Sales </Typography>
                <Typography pl={8} onClick= {comingSoonHandler} color='white' fontWeight={comingSoon === true ? 'bold' : ''} variant = 'h6'> Coming Soon </Typography>
            </Grid> */}
       
            <Tabs textColor="white" value={value} onChange={handleChange} centered>
                <Tab label="Now Showing" />
                <Tab label="Advanced Sales" />
                <Tab label="Coming Soon" />
            </Tabs>
        

         
            <Box sx={{height:30, width:'1', mb:1, display:"flex", alignItems:'center'}}>
                <Typography color='white' fontWeight='bold' variant = 'h5'> Showtimes </Typography>
            </Box> 
          
            <Box sx = {{width:'100%'}}>
                <Grid container columns={{lg:4, md:3, sm:2, xs:1}} columnSpacing={5} rowSpacing={2}>
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