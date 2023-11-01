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

const PaymentHeader = (props: paymentDetails) => {
    return (
            <Grid className='payment-header' container width={"100%"} sx= {{ pl: '5%', pr:'5%'}}>

                {/* <Box position="relative" width={'1'} border={1}>
                    <Image
                        src={props.image}
                        fill={true}
                        style={{objectFit:"contain"}}
                        sizes="(max-width: 600px) 100vw, 600px"
                        priority
                    >
                    </Image>
                </Box> */}
                <Grid className='description-box' container  direction="row">
                    <Grid  className='title' sx={{height:'30%'}}>
                        <Typography variant="h5" sx={{fontWeight:600}}>
                            {props.title}
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
                                Date: {props.date}
                            </Typography>
                        </Grid>

                        <Grid className='time'>
                            <Typography variant='h6' >
                                Time: {props.time}
                            </Typography>
                        </Grid>
                        
                        <Grid className='hall'>  
                            <Typography variant='h6'>
                                Hall: {props.hall}
                            </Typography>
                        </Grid>
                        
                        <Grid className='seat-number'>
                            <Typography variant='h6' >
                                Selected seats: {props.seatNumber}
                            </Typography>
                        </Grid>
                    </Grid>     
                </Grid>
            </Grid>
    )
}
export default PaymentHeader;