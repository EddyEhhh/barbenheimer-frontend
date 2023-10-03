'use client'
import { useEffect, useState} from "react";
import MovieDescription from "./MovieDescription";
import SelectDate from "./SelectDate";
import SelectTime from "./SelectTime";
import {Box, Paper, Grid, Typography} from "@mui/material";
import Link from "next/navigation";
import { useSearchParams } from "next/navigation";
import AxiosInstance from "@/app/api/AxiosInstance";
import { MovieSpecificDetailsInterface, MovieScheduleDatesInterface, MovieScheduleTimeInterface} from "@/app/interface/interface";


const MovieDetails = ({params} : {params: {id : string}}) => {
    const searchParams = useSearchParams()
    const ratings : string[] = ["G", "PG", "PG13", "NC16", "M18", "R21" ]
    

    const [movieData, setMovieData] = useState<MovieSpecificDetailsInterface>()
    const [dateSelection, setDateSelection] = useState<MovieScheduleDatesInterface[]>()
    const [selectedDate, setSelectedDate] = useState<number>(1);

    const [timeSelection, setTimeSelection] = useState<MovieScheduleTimeInterface[]>()



    const selectDateHandler = (data : MovieScheduleDatesInterface) => {
        setSelectedDate(data.id - 1);
        console.log(data.id);
        setTimeSelection(dateSelection[data.id -1]?.movieScheduleTimes);
        console.log(timeSelection)
    }

 

    useEffect(() => {
        const fetchData = async () => {
            try {
                const {data, status} = await AxiosInstance.get(`/api/v1/movies/${searchParams.get('id')}`);
                setMovieData(data);
                setDateSelection(data.movieScheduleDates);
                setTimeSelection(data.movieScheduleDates[0].movieScheduleTimes);
                console.log(data.movieScheduleDates);
                console.log(data.movieScheduleDates[0].movieScheduleTimes);
            } catch {
            }
        }
         fetchData();
    }, [])



    return (
        <main>
                <Box sx={{pb:10, pt:10}}>
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
                    <Grid container sx={{mt:2, mb:2,height:65}} direction={"row"} justifyContent='center' >
                        <Grid container textAlign={"center"} alignContent={"center"} justifyContent={"center"}>
                            <Typography fontWeight="bold" >Select Date</Typography>
                        </Grid>
                    </Grid>
                </Paper>

                <Grid container spacing={2} justifyContent={'center'}>
                    {dateSelection?.map((dates) => (
                        <SelectDate
                        key = {dates.id}
                        id={dates.id}
                        showDate={dates.showDate}
                        onClickHandler ={() => selectDateHandler(dates)}
                        />
                    ))
                }
                </Grid>
           

                <Paper elevation={5}>
                <Grid container sx={{mt:4, height:65}} direction={"row"} justifyContent='center' >
                    <Grid container textAlign={"center"} alignContent={"center"} justifyContent={"center"}>
                        <Typography fontWeight="bold">Select Time</Typography>
                    </Grid>
                </Grid>
                </Paper>
                

                <Grid border={1} height={100} container spacing={2} justifyContent={'center'}>
                    {timeSelection?.map((time) => (
                        <SelectTime
                            key={time.id}
                            showTime={time.showTime}
                        /> 

                    ))}

                </Grid>
        </main> 
    )
}

export default MovieDetails;