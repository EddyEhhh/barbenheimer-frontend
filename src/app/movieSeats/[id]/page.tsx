'use client'
import DescriptionBox from "../../components/(movieSeatsPage)/DescriptionBox";
import SeatSelection from "../../components/(movieSeatsPage)/SeatSelection";
import { dateConverter, convertTo12Hours } from "@/app/services/util";
import { useState, useEffect } from "react";
import { MovieSeatInformationInterface, SeatingArrangementInterface,MovieSpecificDetailsInterface, SeatingInterface } from "@/app/interface/interface";
import { redirect, useParams} from 'next/navigation';
import { Box, Typography, Divider, Button} from "@mui/material";
import { useRouter } from 'next/navigation';
import { Suspense } from "react";
import LoadingPage from "../../loading";
import SeatLegend from "../../components/(movieSeatsPage)/SeatLegend";
import { submitSeats, getScheduleFromHall, getSpecificMovies } from "@/app/services/services";
import Cookies from 'js-cookie';
import handler from "@/app/api/checkout/route";
import getStripe from "@/app/services/getStripe";
import { red } from "@mui/material/colors";


const MovieSeatingPage = () => {
    const params = useParams();
    const router = useRouter();

    const [movieData, setMovieData] = useState<MovieSeatInformationInterface>();
    const [seatingData, setSeatingData] = useState<SeatingArrangementInterface>()
    const [seating, setSeating] = useState<SeatingInterface[]>([]);
    const [selectedSeatDisplay, setSelectedSeatDisplay] = useState<SeatingInterface[]>([]);
    const [showTime, setShowTime] = useState<string>('');
    const [totalPrice, setTotalPrice] = useState<number>(0);

    const onClickHandler = (seat:SeatingInterface, index:number) => {
        const updatedSelectedSeatDisplay = [...selectedSeatDisplay];

        //when seat is not selected
        if (seat.state == 0) {
            seat.state = 4;
            updatedSelectedSeatDisplay.push(seat);
            setTotalPrice(totalPrice + seat.price);

        //when seat is selected
        } else if (seat.state == 4) {
            updatedSelectedSeatDisplay.splice(selectedSeatDisplay.indexOf(seat), 1);
            seat.state = 0;
            setTotalPrice(totalPrice - seat.price);

        }
        setSelectedSeatDisplay(updatedSelectedSeatDisplay)
    }


    const submitDataHandler =  async () => {
           
            // const data = await submitSeats(`${params.showId}`, selectedSeatDisplay);
            // Cookies.set('test1', data);
            // const cookieValue = Cookies.get('sessid');
            // router.push(`/paymentDetails?id=${params.id}&sid=${params.showId}&time=${params.showTimes}&date=${params.showDate}&hall=${params.hall}`);
      
    }

    const submitStripe = async () => {
        try {
            const ticket = {
                ticketType: 'value1',
                amount : 5,
                };
            const data = await fetch('/api/checkout/',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({amount: selectedSeatDisplay.length, seat:selectedSeatDisplay})
            })
            // const url = await data.json();
            // console.log(url);
            console.log(data.status)
            if (data.status === 200) {
                const url = await data.json()
                .then((data)=> {
                    window.location.href = data;
                });
            } else {
                console.error(data.status);
            }

        } catch{
            console.error('error');

        }
    }
 
    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getScheduleFromHall(params.id);
                console.log(data);
                setSeating(data.seats);
                setSeatingData(data);
                setMovieData(data);
            } catch {
    
            }
        }
        fetchData();
        console.log(showTime);

    }, []);

    
    return (
        <Suspense fallback={<LoadingPage/>}>
            {movieData ? (<Box  height='100vh'>  
                <Box display="flex" flexDirection="row" justifyContent={'center'} mt={13} >
                    {<DescriptionBox 
                        title={movieData.movie.title}
                        runtimeInMinute={movieData.movie.runtimeInMinute}
                        ageRestriction={movieData.movie.ageRestriction}
                        language={movieData.movie.language}
                        movieImage={movieData.movie.movieImages[0].imageUrl}
                        showDate={dateConverter(movieData.showdate)}
                        showTime={convertTo12Hours(movieData.showtime)}
                        hall={movieData.number}
                    />}
                    <Box display="flex" flexDirection={"column"} ml={3}  alignItems={'center'} >
                        <Typography variant="body1" fontWeight={'400'}> Seat selection </Typography>
                            <Divider variant="middle" light={true} sx={{width:'80%'}}/>
                            <Box pt={1}>
                                <SeatSelection  
                                width={movieData.width} 
                                height={movieData.height} 
                                seatingData={seating}
                                onClickFunction={onClickHandler}
                                ></SeatSelection>
                            </Box>
                        <SeatLegend></SeatLegend>
                    </Box>
                </Box>
               


                <Box className="seat-display-container" pt={4}>
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
                
                <Box className="seat-price-container" pt={4}>
                    <Box display="flex"  flexDirection={"column"} justifyContent={'center'} alignItems={'center'} >
                        <Typography variant="h6" fontWeight={'400'}> Total price </Typography>
                        <Divider variant="middle" light={true} sx={{width:'80%', mb:2}}/>
                        <Box ml={1} height={30} display={'flex'} flexDirection={'row'} justifyContent={'center'}>
    
                            {selectedSeatDisplay.length != 0 &&<Button
                                disabled
                                variant="contained"
                                size="large"
                                sx={{mr:1}}>
                                <Typography color={'whitesmoke'}>{`$${totalPrice}`}</Typography>
                            </Button> }
                           
                        </Box> 
                    </Box>
                </Box>

                <Box display={'flex'} mt={4} justifyContent={'center'}>
                    <Button 
                    type="submit"
                        disabled={selectedSeatDisplay.length == 0} 
                        onClick={submitStripe} 
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