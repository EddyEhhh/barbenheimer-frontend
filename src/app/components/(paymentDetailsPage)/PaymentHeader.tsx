import {Box, Typography, Grid} from "@mui/material/";
import Image from 'next/image';
import { relative } from "path";

type paymentDetails = {
    title?: string,
    date?: string,
    time?: string,
    hall?: string,
    seatNumber?: string,
    image?: string;
}

const PaymentHeader = ({title, date, time, hall, seatNumber, image} : paymentDetails) => {
    return (
        <main>
            <Grid className='payment-header' container sx= {{ height:250, pl: '5%', pr:'5%'}}>
                


                <Grid className='description-box' container sx ={{width:'75%'}} direction="column">
                    <Grid  className='title' sx={{height: '40%'}}>
                        <Typography variant="h5" sx={{fontWeight:600}}>
                                NARUTO SHIPPUDEN 2{title}
                        </Typography>
                    </Grid>
                    
                    <Grid container className='selected-movie-details'  direction="column" justifyContent="space-between"  >
                        {/* <Grid className='theatre'>
                            <Typography variant='h5'>
                                {}Movie Theatre: Somewhere
                            </Typography>
                        </Grid> */}
                        <Grid className='date'>
                            <Typography variant='h6' >
                                Date: {date}
                            </Typography>
                        </Grid>

                        <Grid className='time'>
                            <Typography variant='h6' >
                                Time: {time}
                            </Typography>
                        </Grid>
                        
                        <Grid className='hall'>  
                            <Typography variant='h6'>
                                Hall: {hall}
                            </Typography>
                        </Grid>
                        
                        <Grid className='seat-number'>
                            <Typography variant='h6' >
                                Selected seats:{seatNumber}
                            </Typography>
                        </Grid>
                    </Grid>     
                </Grid>
            </Grid>
        </main>
    )
}
export default PaymentHeader;