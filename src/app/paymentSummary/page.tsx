import {Box, Button, Grid, Icon, Typography, Paper} from "@mui/material"
import Link from "next/link";
import CheckCircleIcon from '@mui/icons-material/CheckCircle'; 

const PaymentSummary = () => {
    return (
        <Box sx = {{mt:10, height:800, width:"100%"}}> 
            <Grid container height={800} columns={4} justifyContent="center" alignItems="center">
                {/*Grid for Check Icon*/}
                <Grid>
                    <CheckCircleIcon sx={{ fontSize: 100}} />
                </Grid>
                {/*Grid for Payment Successful*/}
                <Grid container >
                    <Grid container justifyContent="center" alignItems="center">
                        <Typography variant="h4" fontWeight="bold">
                            Payment Successful 
                        </Typography>
                    </Grid>
                    <Grid container justifyContent="center" alignItems="center">
                        <Typography>
                            Thank you for your purchase
                        </Typography>
                    </Grid>
                    <Grid container justifyContent="center" alignItems="center">
                        <Typography>
                            You will receive an email with your ticket download link 
                        </Typography>
                    </Grid>
                </Grid>

                {/*Grid for Payment Summary*/}
                <Grid container height={500} justifyContent="center">
                    <Box sx = {{ width: 600, backgroundColor:'black', pt:2 }}> 
                        <Grid container width='100%' height='100%'>
                            {/*Grid for Payment Summary*/}
                            <Grid container height={50} mx={1}>
                                <Grid item xs>
                                    <Typography gutterBottom component="div" fontWeight="bold">
                                        Payment summary
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Typography component="div">
                                        Ticket ID: 0000000
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Grid height='90%' sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly' }}>
                                <Grid container ml={6}>
                                    <Grid container >
                                        <Grid container xs={6} md={8}>
                                            <Typography>
                                                Movie: Barbenheimer
                                            </Typography>
                                        </Grid>

                                        <Grid container xs={6} md={4} >
                                            <Typography>
                                                Quantity: 2
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                    <Grid container>
                                        <Grid container xs={6} md={8}>
                                            <Typography>
                                                Date & Time: 01/01/00001 2359
                                            </Typography>
                                        </Grid>
                                        <Grid container xs={6} md={4}>
                                            <Typography>
                                                Seat: A1, A2
                                            </Typography>
                                        </Grid>
                                        
                                    </Grid>

                                    <Grid container>
                                        <Grid container xs={6} md={3}>
                                            <Typography>
                                                Venue Details: 
                                            </Typography>
                                        </Grid>
                                        <Grid container xs={6} md={9}>
                                            <Typography>
                                                Gold Class Express, Lala Mall 
                                                Hall 2
                                            </Typography>
                                        </Grid>
                                        
                                    </Grid>
                                </Grid>
                            
                            

                                {/*line*/}
                                <Grid container border={0.1} sx={{ mx: 'auto', width: '80%'}}></Grid>
                                {/*line*/}
                                <Grid container ml={6}  >
                                    <Grid container >
                                        <Grid container xs={6} md={5}>
                                            <Typography>
                                                Booking ID: 0000000
                                            </Typography>
                                        </Grid>
                                        <Grid container xs={6} md={7}>
                                            <Typography>
                                                Payment type: Credit Card
                                            </Typography>
                                        </Grid>
                                    </Grid>

                                    <Grid container>
                                        <Grid>
                                            <Typography>
                                                Booking Date & Time: 01/01/00001 2359
                                            </Typography>
                                        </Grid>
                                    
                                    </Grid>
                                </Grid>
                                

                                {/*line*/}
                                <Grid container border={0.1}  sx={{ mx: 'auto', width: '80%'}}></Grid>
                                {/*line*/}

                                <Grid container ml={10}>
                                    <Grid container>
                                        <Grid container xs={6} md={7.8}>
                                            <Typography >
                                                Ticket(2)
                                            </Typography>
                                        </Grid>
                                        <Grid container xs={6} md={4}>
                                            <Typography>
                                                $30.00
                                            </Typography>
                                        </Grid>
                                    </Grid>

                                    <Grid container>
                                        <Grid container xs={6} md={7.8}>
                                            <Typography>
                                                Food & Beverage
                                            </Typography>
                                        </Grid>
                                        <Grid container xs={6} md={4}>
                                            <Typography>
                                                $30.00
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                    <Grid container>
                                        <Grid container xs={6} md={7.8}>
                                            <Typography >
                                                Convenience Fees
                                            </Typography>
                                        </Grid>
                                        <Grid container xs={6} md={4}>
                                            <Typography>
                                                $30.00
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>

                                
                                {/*line*/}
                                <Grid container border={0.1} sx={{ mx: 'auto', width: '80%'}}></Grid>
                                {/*line*/}

                                <Grid container ml={10}>
                                    <Grid container xs={6} md={7.8}>
                                        <Typography >
                                            Total Amount
                                        </Typography>
                                    </Grid >
                                    <Grid container xs={6} md={4}>
                                        <Typography>
                                            $90.00
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Box>
                    
                </Grid>

                <Grid container justifyContent="center">
                    <Button color="primary">
                        <Link href="/" style={{ textDecoration: 'none'}}> {'Back to home'} </Link>
                    </Button>
                </Grid>
            </Grid>
        </Box>
    );
}

export default PaymentSummary;