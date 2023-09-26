'use client'
import DescriptionBox from "../../../../DescriptionBox";
import SeatSelection from "../../../../SeatSelection";
import { useState, useEffect } from "react";
import AxiosInstance from "@/app/api/AxiosInstance";
import { MovieSpecificDetailsInterface, SeatingArrangementInterface, SeatingInterface } from "@/app/interface/interface";
import { useParams, useSearchParams } from 'next/navigation';
import { Box, Typography, Divider, Button} from "@mui/material";
import { useRouter } from 'next/navigation';
import { Suspense } from "react";
import LoadingPage from "@/app/Loading";
import SeatLegend from "./SeatLegend";
import { submitSeats } from "@/app/services/homeServices";
import Cookies from 'js-cookie'


const MovieSeatingPage = () => {
    const params = useParams();
    const router = useRouter();

    const [movieData, setMovieData] = useState<MovieSpecificDetailsInterface>();
    const [seatingData, setSeatingData] = useState<SeatingArrangementInterface>()
    const [seating, setSeating] = useState<SeatingInterface[]>([]);

    const [selectedSeatDisplay, setSelectedSeatDisplay] = useState<SeatingInterface[]>([]);

    const onClickHandler = (seat:SeatingInterface, index:number) => {
        const updatedSelectedSeatDisplay = [...selectedSeatDisplay];

        if (seat.state == 0) {
           seat.state = 1 
           updatedSelectedSeatDisplay.push(seat);
        } else if (seat.state == 1) {
// console.log(selectedSeatDisplay.indexOf(seat));
            updatedSelectedSeatDisplay.splice(selectedSeatDisplay.indexOf(seat), 1);
            seat.state = 0
        }
        
        setSelectedSeatDisplay(updatedSelectedSeatDisplay)
// console.log(selectedSeatDisplay)
// console.log(selectedSeatDisplay);
// setSeating(seating);
    }


    const submitDataHandler =  async () => {
        try {
            // const {data} = await submitSeats(seating);
            Cookies.set('sessId', 'hello?', {expires: 600000})
            const cookieValue = Cookies.get('sessid');
            console.log('Cookie Value:', cookieValue);
            // if (!data.ok) {
            //     router.push(`/paymentDetails?id=${params.id}&sid=${params.showId}&time=${params.showTimes}&date=${params.showDate}&hall=${params.hall}`);
            // }

        } catch {
//this is when data has a conflicting error
        }
    }
 
    useEffect(() => {
        const fetchData = async () => {
            try {
                const {data, status} = await AxiosInstance.get(`/api/v1/schedules/${params.hall}`);
                setSeating(data.seats);
                setSeatingData(data);
                console.log(data);
                
            } catch {

            }
            
            try {
                const {data, status} = await AxiosInstance.get(`/api/v1/movies/${params.id}`);
                setMovieData(data);
            } catch {

            }
        }
         fetchData();
    }, [])

    
    return (
        <Suspense fallback={<LoadingPage/>}>
            {movieData ? (<>  
                {<DescriptionBox 
                    title={movieData.title}
                    runtimeInMinute={movieData.runtimeInMinute}
                    ageRestriction={movieData.ageRestriction}
                    language={movieData.language}
                    movieImage={movieData.movieImages[0].imageUrl}
                    showDate={params.showDate}
                    showTime={decodeURIComponent(params.showTimes)}
                    hall={params.hall}
                />}


                <Box display="flex" pt={5} flexDirection={"column"} justifyContent={'center'} alignItems={'center'} >
                    <Typography variant="h6" fontWeight={'400'}> Seat selection </Typography>
                    <Divider variant="middle" light={true} sx={{width:'80%'}}/>
                    <Box pt={1} >
                        <SeatSelection  
                        width={seatingData?.width} 
                        height={seatingData?.height} 
                        seatingData={seating}
                        onClickFunction={onClickHandler}
                        ></SeatSelection>
                    </Box>
                    <SeatLegend></SeatLegend>
                </Box>

                <Box pt={4}>
                    <Box display="flex"  flexDirection={"column"} justifyContent={'center'} alignItems={'center'} >
                            <Typography variant="h6" fontWeight={'400'}> Seats Selected </Typography>
                            <Divider variant="middle" light={true} sx={{width:'80%', mb:2}}/>
                            <Box ml={1} height={10} display={'flex'} flexDirection={'row'} justifyContent={'center'}>
                                {
                                    selectedSeatDisplay && selectedSeatDisplay.map((seat, index) => (
                                        <Typography 
                                            mr={1} 
                                            key={index}> 
                                            {`${seat.rowCharacter}${seat.columnNumber}`}
                                        </Typography>
                                    ))
                                }
                            </Box>
                            
                    </Box>
                </Box>
                    
                <Box display={'flex'} mt={4} mb={10} justifyContent={'center'}>
                    <Button 
                        disabled={selectedSeatDisplay.length == 0} 
                        onClick={submitDataHandler} 
                        size="medium" variant="contained" 
                        color="success"
                        sx={{fontWeight:'bold'}}>
                        Proceed
                    </Button>
                </Box>


            </>) : (<LoadingPage></LoadingPage>)}
        </Suspense>

    );
}

export default MovieSeatingPage;