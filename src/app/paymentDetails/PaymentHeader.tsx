import {Box, Typography, Grid, Button, Stack, Paper} from "@mui/material/";
import Image from 'next/image';
import MovieImage from "../images/img1041.webp";



type paymentDetails = {
    title?: string,
    date?: string,
    time?: string,
    hall?: string,
    seatNumber?: string,
    image?: string
}
const PaymentHeader = ({title, date, time, hall, seatNumber, image} : paymentDetails) => {
    return (
        <main>
            <Grid container sx= {{width:1, height:250, pl: '5%', pr:'5%'}}>
                <Grid container sx = {{width:'45%'}} justifyContent={"center"} >
                    <Box position='absolute' sx={{aspectRatio:3/2, height:250}}>
                        <Image 
                            src={image} alt="no image" 
                            fill={true}
                            style={{objectFit:"contain"}}>
                        </Image>
                    </Box>
                </Grid>

                <Grid container sx ={{width:'55%'}} direction="column">
                    <Grid sx={{height: '15%'}}>
                        <Typography variant="h5" sx={{fontWeight:600}}>
                                {title}
                        </Typography>
                    </Grid>
                    
                    <Grid container direction="column" justifyContent="space-between" height={'45%'} >
                        {/* <Grid>
                            <Typography variant='h5'>
                                {}Movie Theatre: Somewhere
                            </Typography>
                        </Grid> */}
                        <Grid>
                            <Typography variant='subtitle1' >
                                Date: {date}
                            </Typography>
                        </Grid>

                        <Grid>
                            <Typography variant='subtitle1' >
                                Time: {time}
                            </Typography>
                        </Grid>
                        
                        <Grid>  
                            <Typography variant='subtitle1' >
                                Hall: {hall}
                            </Typography>
                        </Grid>
                        
                        <Grid>
                            <Typography variant='subtitle1' >
                                Seat Numbers:{}
                            </Typography>
                        </Grid>
                    </Grid>     
                </Grid>
            </Grid>
        </main>
    )
}

export default PaymentHeader;