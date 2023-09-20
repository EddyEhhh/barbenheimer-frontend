'use client'
import { useEffect, useState} from "react";
import MovieDescription from "../MovieDescription";
import SelectDate from "../SelectDate";
import SelectTime from "../SelectTime";
import {Box, Paper, Grid, Typography, Button} from "@mui/material";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import AxiosInstance from "@/app/api/AxiosInstance";
import { MovieSpecificDetailsInterface, MovieScheduleDatesInterface, MovieScheduleTimeInterface} from "@/app/interface/interface";


const MovieDetails = ({params} : {params: {id : string}}) => {

    const ratings : string[] = ["G", "PG", "PG13", "NC16", "M18", "R21" ]

    const [movieData, setMovieData] = useState<MovieSpecificDetailsInterface>()

    const [dateSelection, setDateSelection] = useState<MovieScheduleDatesInterface[]>([])
    const [selectedDate, setSelectedDate] = useState<number>(0); //gets id
    
    const [timeSelection, setTimeSelection] = useState<MovieScheduleTimeInterface[]>([])
    const [selectedTime, setSelectedTime] = useState<number | undefined>(undefined) //gets id

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
                const {data, status} = await AxiosInstance.get(`/api/v1/movies/${params.id}`);
                setMovieData(data);
                setDateSelection(data.movieScheduleDates);
                setSelectedDate(data.movieScheduleDates[0].id);

                setTimeSelection(data.movieScheduleDates[0].movieScheduleTimes);
                setDateString(data.movieScheduleDates[0].showDate)
                console.log(typeof data.movieScheduleDates[0].movieScheduleTimes[0].showTime);
                
            } catch {
            }
        }
         fetchData();
    }, [])



    return (
        <Box sx={{pb:10}}>
            <Box sx={{pb:5, pt:10}}>
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

            <Paper elevation={5}>
                <Grid container sx={{mt:2, mb:2,height:50}} direction={"row"} justifyContent='center' >
                    <Grid container textAlign={"center"} alignContent={"center"} justifyContent={"center"}>
                        <Typography  >Select Date</Typography>
                    </Grid>
                </Grid>
            </Paper>

            <Grid container spacing={2} justifyContent={'center'}>
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
        
            <Paper elevation={5}>
            <Grid container sx={{mt:2, mb:2, height:50}} direction={"row"} justifyContent='center' >
                <Grid container textAlign={"center"} alignContent={"center"} justifyContent={"center"}>
                    <Typography >Select Time</Typography>
                </Grid>
            </Grid>
            </Paper>           

            <Grid container height={150} direction={"row"} justifyContent={'center'}>
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
            {/* '/movies/3/showDates/19-02-2023/showTimes/08:00' */}
            <Box display="flex" justifyContent="center" height="300" mb="30">
                    <Button 
                        disabled={selectedTime === undefined} 
                        color="success" 
                        size="large" 
                        variant="contained">
                        <Link 
                            style={{textDecoration:'none', color:'black'}}
                            href={{
                                pathname:`/movie/[id]/showDate/[showDate]/[tag]/[showTime]`,
                                query: {
                                    id:params.id
                                }
                            }}
                            as={`/movie/${params.id}/showDates/${dateString}/showTimes/${timeString}`}>
                            <Typography fontWeight="bold"> Confirm </Typography>  
                        </Link>
                    </Button>
               

            </Box>
         
        </Box> 
    )
}

export default MovieDetails;