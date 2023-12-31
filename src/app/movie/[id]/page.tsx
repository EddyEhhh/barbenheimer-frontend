'use client'
import { useEffect, useState} from "react";
import MovieDescription from "../../components/(movieDetailPage)/MovieDescription";
import SelectDate from "../../components/(movieDetailPage)/SelectDate";
import SelectTime from "../../components/(movieDetailPage)/SelectTime";
import {Box, Paper, Grid, Typography, Button, Divider} from "@mui/material";
import Link from "next/link";
import { getSpecificMovies } from "@/app/services/services";
import { MovieSpecificDetailsInterface, MovieScheduleDatesInterface, MovieScheduleTimeInterface, HallInterface} from "@/app/interface/interface";


const MovieDetails = ({params} : {params: {id : string}}) => {

    const ratings : string[] = ["G", "PG", "PG13", "NC16", "M18", "R21" ]

    const [movieData, setMovieData] = useState<MovieSpecificDetailsInterface>()

    const [dateSelection, setDateSelection] = useState<MovieScheduleDatesInterface[]>([])
    const [selectedDate, setSelectedDate] = useState<number>(0); //gets id of data
    
    const [timeSelection, setTimeSelection] = useState<MovieScheduleTimeInterface[]>([])
    const [selectedTime, setSelectedTime] = useState<number>() //gets id of time


    //string form of what is selected
    const [dateString, setDateString] = useState<string>('');
    const [timeString, setTimeString] = useState<string>('')

    const selectDateHandler = (data : number) => {
        setSelectedDate(dateSelection![data].id);
        setTimeSelection(dateSelection![data].movieScheduleTimes);
        setDateString(dateSelection![data].showDate);
        setSelectedTime(undefined);

    }

    const selectTimeHandler = (data : number) => {
        setSelectedTime(timeSelection[data].id);
        setTimeString(timeSelection[data].showTime);
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getSpecificMovies(params.id);
                setMovieData(data);
                setDateSelection(data.movieScheduleDates);
                setSelectedDate(data.movieScheduleDates[0].id);
                setTimeSelection(data.movieScheduleDates[0].movieScheduleTimes);
                setDateString(data.movieScheduleDates[0].showDate)
                
            } catch {
            }
        }
         fetchData();
    }, [])

    return ( 
        <Box sx={{ width:'1', height:'100vh'}}>
            <Box sx={{pb:5}}>
                {movieData && <MovieDescription
                    title={movieData.title}
                    runtimeInMinute={movieData.runtimeInMinute}
                    movieImages={movieData.movieImages[0].imageUrl}
                    ageRestriction={ratings[movieData.ageRestriction]}
                    releaseDate={movieData.releaseDate}
                    description={movieData.description}
                    language={movieData.language}
                    director={movieData.director}
                    cast={movieData.cast}
                ></MovieDescription>}
            </Box>

            <Grid  className="date-selection-container" container sx={{mt:1, mb:6,height:50}} direction={"row"} justifyContent='center' >
                <Grid container direction={'column'} textAlign={"center"} alignContent={"center"} justifyContent={"center"}>
                    <Typography>Date selection</Typography>
                    <Divider variant="middle" light={true} sx={{width:'90%'}}/>
                </Grid>
                  
                <Grid container pt={3} direction={'row'}  justifyContent={'center'} alignContent={'center'}>
                    {dateSelection?.map((dates, index) => (
                        <SelectDate
                        key = {dates.id}
                        id={dates.id}
                        index={index}
                        selectedDate={selectedDate}
                        showDate={dates.showDate}
                        onClickHandler ={() => selectDateHandler(index)}
                        />
                    ))
                }
                </Grid>
            </Grid>

        
            <Grid className="time-selection-container" container sx={{mb:2, height:50}} direction={"row"} justifyContent='center' >
                <Grid container  direction={'column'} textAlign={"center"} alignContent={"center"} justifyContent={"center"}>
                    <Typography >Time Selection</Typography>
                    <Divider variant="middle" light={true} sx={{width:'90%'}}/>
                </Grid>

                <Box display='flex' pt={3} justifyContent={'center'}>
                    <Grid container direction={'row'} justifyContent={'center'}>
                        {timeSelection?.map((time, index) => (
                            <SelectTime
                                key={time.id}
                                id ={time.id}
                                showTime={time.showTime}
                                selectedTime = {selectedTime}
                                onClickHandler ={() => selectTimeHandler(index)}
                            /> 
                        ))}
                    </Grid>    
                </Box>
             
            </Grid>
            
            <Box className="confirmation-button" 
                display="flex" pt={10} 
                justifyContent="center" 
                height="300" 
                mb="30">
                <Button 
                    disabled={selectedTime === undefined} 
                    color="success" 
                    size="large" 
                    variant="contained">
                    <Link 
                        style={{textDecoration:'none', color:'black'}}
                        href={`/movieSeats/${selectedTime}`}>
                        <Typography fontWeight="bold"> Confirm </Typography>  
                    </Link>
                </Button>
            </Box>
         
        </Box> 
    )
}

export default MovieDetails;