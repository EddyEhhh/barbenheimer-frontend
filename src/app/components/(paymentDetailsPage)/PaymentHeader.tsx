import {Box, Typography, Grid} from "@mui/material/";
import Image from 'next/image';

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
            <Grid className='payment-header' container sx= {{width:1, height:250, pl: '5%', pr:'5%'}}>
                <Grid className='picture-box' container sx = {{width:'45%'}} justifyContent={"center"} >
                    <Box position='absolute' sx={{aspectRatio:3/2, height:250}}>
                        <Image src={image} alt="no image" fill={true} style={{objectFit:"contain"}}></Image>
                    </Box>
                </Grid>

                <Grid className='description-box' container sx ={{width:'55%'}} direction="column">
                    <Grid className='title' sx={{height: '15%'}}>
                        <Typography variant="h5" sx={{fontWeight:600}}>
                                {title}
                        </Typography>
                    </Grid>
                    
                    <Grid className='selected-movie-details' container direction="column" justifyContent="space-between" height={'45%'} >
                        {/* <Grid className='theatre'>
                            <Typography variant='h5'>
                                {}Movie Theatre: Somewhere
                            </Typography>
                        </Grid> */}
                        <Grid className='date'>
                            <Typography variant='subtitle1' >
                                Date: {date}
                            </Typography>
                        </Grid>

                        <Grid className='time'>
                            <Typography variant='subtitle1' >
                                Time: {time}
                            </Typography>
                        </Grid>
                        
                        <Grid className='hall'>  
                            <Typography variant='subtitle1' >
                                Hall: {hall}
                            </Typography>
                        </Grid>
                        
                        <Grid className='seat-number'>
                            <Typography variant='subtitle1' >
                                Seat Numbers:{seatNumber}
                            </Typography>
                        </Grid>
                    </Grid>     
                </Grid>
            </Grid>
        </main>
    )
}

export default PaymentHeader;