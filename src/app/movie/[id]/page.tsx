'use client'
import { useEffect, useState} from "react";
import MovieDescription from "../MovieDescription";
import SelectDate from "../SelectDate";
import SelectTime from "../SelectTime";
import {Box, Paper, Grid, Typography, Button, Divider} from "@mui/material";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import AxiosInstance from "@/app/api/AxiosInstance";
import { MovieSpecificDetailsInterface, MovieScheduleDatesInterface, MovieScheduleTimeInterface, HallInterface} from "@/app/interface/interface";


const MovieDetails = ({params} : {params: {id : string}}) => {

    const ratings : string[] = ["G", "PG", "PG13", "NC16", "M18", "R21" ]

    const [movieData, setMovieData] = useState<MovieSpecificDetailsInterface>()

    const [dateSelection, setDateSelection] = useState<MovieScheduleDatesInterface[]>([])
    const [selectedDate, setSelectedDate] = useState<number>(0); //gets id of data
    
    const [timeSelection, setTimeSelection] = useState<MovieScheduleTimeInterface[]>([])
    const [selectedTime, setSelectedTime] = useState<number | undefined>(undefined) //gets id of time

    const [selectedHall, setSelectedHall] = useState<number>(undefined);

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
        setSelectedHall(timeSelection[data].hall.id);
        setTimeString(timeSelection[data].showTime);
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const {data, status} = await AxiosInstance.get(`/api/v1/movies/${params.id}`);
                console.log(data);
                console.log(data.movieScheduleDates[0]) //this gives me the schedule id..?

                //default selection of data
                setMovieData(data);
                setDateSelection(data.movieScheduleDates);
                setSelectedDate(data.movieScheduleDates[0].id);

                setTimeSelection(data.movieScheduleDates[0].movieScheduleTimes);
                setDateString(data.movieScheduleDates[0].showDate)
                // console.log(typeof data.movieScheduleDates[0].movieScheduleTimes[0].showTime);
                
            } catch {
            }
        }
         fetchData();
    }, [])


    // backgroundImage:{`url(${movieData?.movieImages[0].imageUrl})`}
    return (
    
        
        <Box sx={{height:'100%'}}>
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

            <Grid container sx={{mt:1, mb:6,height:50}} direction={"row"} justifyContent='center' >
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

        
            <Grid container sx={{mb:2, height:50}} direction={"row"} justifyContent='center' >
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
            
            <Box display="flex" pt={10} justifyContent="center" height="300" mb="30">
                <Button 
                    disabled={selectedTime === undefined} 
                    color="success" 
                    size="large" 
                    variant="contained">
                    <Link 
                        style={{textDecoration:'none', color:'black'}}
                        href={{
                            pathname:`${params.id}/showDates/${dateString}/showTimes/${timeString}/showId/${selectedTime}/hall/${selectedHall}`,
                        }}>
                        <Typography fontWeight="bold"> Confirm </Typography>  
                    </Link>
                </Button>
            </Box>
         
        </Box> 
    )
}

export default MovieDetails;