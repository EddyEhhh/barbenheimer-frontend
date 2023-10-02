'use client'
import DescriptionBox from "../../../../DescriptionBox";
import SeatSelection from "../../../../SeatSelection";
import { useState, useEffect } from "react";
import AxiosInstance from "@/app/api/AxiosInstance";
import { MovieSpecificDetailsInterface, SeatingArrangementInterface, SeatingInterface } from "@/app/interface/interface";
import { useParams} from 'next/navigation';
import { Box, Typography, Divider, Button} from "@mui/material";
import { useRouter } from 'next/navigation';
import { Suspense } from "react";
import LoadingPage from "../../../../../../../../../../loading";
import SeatLegend from "./SeatLegend";
import { submitSeats, getScheduleFromHall, getSpecificMovies } from "@/app/services/services";
import Cookies from 'js-cookie';


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
           seat.state = 4 
           updatedSelectedSeatDisplay.push(seat);
        } else if (seat.state == 4) {
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
            const data = await submitSeats(`${params.showId}`, selectedSeatDisplay);
            // Cookies.set('test1', data);
            // const cookieValue = Cookies.get('sessid');
            router.push(`/paymentDetails?id=${params.id}&sid=${params.showId}&time=${params.showTimes}&date=${params.showDate}&hall=${params.hall}`);
      
    }
 
    useEffect(() => {
        const fetchData = async () => {
            const data = await getScheduleFromHall(params.hall);
            setSeating(data.seats);
            setSeatingData(data);

            const data2 = await getSpecificMovies(params.id);
            setMovieData(data2);
        }
         fetchData();
    }, [])

    
    return (
        <Suspense fallback={<LoadingPage/>}>
            {movieData ? (<Box>  
                <Box display="flex" flexDirection="row" justifyContent={'center'} mt={13} >
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
                    <Box display="flex" flexDirection={"column"} ml={3}  alignItems={'center'} >
                        <Typography variant="body1" fontWeight={'400'}> Seat selection </Typography>
                            <Divider variant="middle" light={true} sx={{width:'80%'}}/>
                            <Box pt={1}>
                                <SeatSelection  
                                width={seatingData?.width} 
                                height={seatingData?.height} 
                                seatingData={seating}
                                onClickFunction={onClickHandler}
                                ></SeatSelection>
                            </Box>
                        <SeatLegend></SeatLegend>
                    </Box>
                </Box>
               


                <Box pt={4}>
                    <Box display="flex"  flexDirection={"column"} justifyContent={'center'} alignItems={'center'} >
                        <Typography variant="h6" fontWeight={'400'}> Seats Selected </Typography>
                        <Divider variant="middle" light={true} sx={{width:'80%', mb:2}}/>
                        <Box ml={1} height={30} display={'flex'} flexDirection={'row'} justifyContent={'center'}>
                            {
                            selectedSeatDisplay && selectedSeatDisplay.map((seat, index) => (
                                <Button
                                    disabled
                                    variant="contained"
                                    size="large"
                                    sx={{mr:1}}
                                    key={index}> 
                                    <Typography color={'whitesmoke'}>{`${seat.rowCharacter}${seat.columnNumber}`}</Typography>
                                </Button>
                            ))
                            }
                        </Box> 
                    </Box>
                </Box>
                    
                <Box display={'flex'} mt={4} justifyContent={'center'}>
                    <Button 
                        disabled={selectedSeatDisplay.length == 0} 
                        onClick={submitDataHandler} 
                        size="medium" variant="contained" 
                        color="success"
                        sx={{fontWeight:'bold'}}>
                        Proceed
                    </Button>
                </Box>


            </Box>) : (<LoadingPage></LoadingPage>)}
        </Suspense>

    );
}

export default MovieSeatingPage;