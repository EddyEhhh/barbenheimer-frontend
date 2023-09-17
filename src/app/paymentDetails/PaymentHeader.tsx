import {Box, Typography, Grid, Button, Stack, Paper} from "@mui/material/";
import Image from 'next/image';
import MovieImage from "../images/img1041.webp";



type paymentDetails = {
    title?: string,
    date?: string,
    time?: string,
    hall?: string,
    seatNumber?: string,


}
const PaymentHeader = ({title, date, time, hall, seatNumber} : paymentDetails) => {
    return (
        <main>
            <Grid container sx= {{width:1, height:350, pl: '5%', pr:'5%'}}>
                <Grid container sx = {{width:'45%'}} justifyContent={"center"} >
                    <Box position='absolute' sx={{aspectRatio:3/2, height:350}}>
                        <Image 
                            src={MovieImage} alt="no image" 
                            fill={true}
                            style={{objectFit:"contain"}}>
                        </Image>
                    </Box>
                </Grid>

                <Grid container sx ={{width:'55%'}} direction="column">
                    <Grid sx={{height: '45%'}}>
                        <Typography variant="h2" sx={{fontWeight:700}}>
                                {title} Title
                        </Typography>
                    </Grid>
                    
                    <Grid container direction="column" justifyContent="space-between" height={'55%'} >
                        <Grid>
                            <Typography variant='h5'>
                                {}Movie Theatre: Somewhere
                            </Typography>
                        </Grid>
                        <Grid>
                            <Typography variant='h5' >
                                {}Date:
                            </Typography>
                        </Grid>

                        <Grid>
                            <Typography variant='h5' >
                                {}Time:
                            </Typography>
                        </Grid>
                        
                        <Grid>  
                            <Typography variant='h5' >
                                {}Hall:
                            </Typography>
                        </Grid>
                        
                        <Grid>
                            <Typography variant='h5' >
                                {}Seat Numbers:
                            </Typography>
                        </Grid>
                    </Grid>     
                </Grid>
            </Grid>
        </main>
    )
}

export default PaymentHeader;