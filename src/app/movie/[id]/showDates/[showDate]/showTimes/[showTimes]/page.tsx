'use client'
import DescriptionBox from "./DescriptionBox";
import SeatSelection from "./SeatSelection";
import { useState, useEffect } from "react";
import AxiosInstance from "@/app/api/AxiosInstance";
import { MovieSpecificDetailsInterface } from "@/app/interface/interface";
import { useParams, useSearchParams } from 'next/navigation';
import { Box, Typography, Divider, Button} from "@mui/material";
import { useRouter } from 'next/navigation';
import { ParsedUrlQuery } from "querystring";
import { Suspense } from "react";
import EventSeatOutlinedIcon from '@mui/icons-material/EventSeatOutlined';
import EventSeatIcon from '@mui/icons-material/EventSeat';
import EventSeatTwoToneIcon from '@mui/icons-material/EventSeatTwoTone';

const MovieSeatingPage = () => {
    const params = useParams();
    console.log(params);

    const [movieData, setMovieData] = useState<MovieSpecificDetailsInterface>();
    useEffect(() => {
        const fetchData = async () => {
            try {
                const {data, status} = await AxiosInstance.get(`/api/v1/movies/${params.id}`);
                setMovieData(data);
            } catch {
            }
        }
         fetchData();
    }, [])

    
    return (
        <>  
        <Suspense fallback={"hello"}>
            {movieData && <DescriptionBox 
                title={movieData.title}
                runtimeInMinute={movieData.runtimeInMinute}
                ageRestriction={movieData.ageRestriction}
                language={movieData.language}
                movieImage={movieData.movieImages[0].imageUrl}
                showDate={params.showDate}
                showTime={decodeURIComponent(params.showTimes)}
            />}


            <Box display="flex" pt={5} flexDirection={"column"} justifyContent={'center'} alignItems={'center'} >
                <Typography variant="h6" fontWeight={'400'}> Seat selection </Typography>
                <Divider variant="middle" light={true} sx={{width:'80%'}}/>
               
                <Box pt={1} >
                    <SeatSelection></SeatSelection>
                </Box>
                <Box >

             </Box>  
            
                <EventSeatIcon color="success"></EventSeatIcon> <Typography>your seat</Typography>
                <EventSeatIcon color='disabled'></EventSeatIcon><Typography>sold out</Typography>
                <EventSeatIcon color='error'></EventSeatIcon>  <Typography>reserved</Typography>
            </Box>

            <Box pt={5}>
                <Box display="flex"  flexDirection={"column"} justifyContent={'center'} alignItems={'center'} >
                        <Typography variant="h6" fontWeight={'400'}> Seats Selected </Typography>
                        <Divider variant="middle" light={true} sx={{width:'80%'}}/>
                </Box>
            </Box>
                
            <Box display={'flex'} mt={4} justifyContent={'center'}>
                <Button size="medium" variant="contained" color="success" sx={{fontWeight:'bold'}}>Proceed</Button>
            </Box>

            
         
           

        </Suspense>
        </>
    );
}

export default MovieSeatingPage;