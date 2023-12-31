'use client'
import {Box, Button, Grid, Icon, Typography, Paper, Link} from "@mui/material";
import CheckCircleIcon from '@mui/icons-material/CheckCircle'; 
import { useEffect } from "react";
import {useSearchParams } from "next/navigation";
import { getCompletedPurchaseInfo } from "../services/services";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { paymentSummaryDisplayInterface } from "../interface/interface";
import paymentDetails from "../paymentDetails/page";
import { seatToString } from "../services/util";

const PaymentSummary = () => {
    const [purchaseInfo, setPurchaseInfo] = useState<paymentSummaryDisplayInterface>();
    const params = useSearchParams();
    const router = useRouter();
    const clientSecret= params.get('payment_intent');

    useEffect(()=> {
        getCompletedPurchaseInfo(clientSecret!).then((res : any)=>{
            console.log(res.data);
            setPurchaseInfo(res.data);
        }).catch((error) => {
            router.push('/error');
        })
    },[])



    return (
        <Box sx = {{mt:10, height:800, width:"100%"}}> 
                {purchaseInfo && 
            <Grid container height={800} columns={4} justifyContent="center" alignItems="center">
                {/*Grid for Check Icon*/}
                <Grid>
                    <CheckCircleIcon sx={{ fontSize: 90}} />
                </Grid>
                {/*Grid for Payment Successful*/}
                <Grid container >
                    <Grid container justifyContent="center" alignItems="center">
                        <Typography variant="h5" fontWeight="bold">
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
                    <Box sx = {{ width: 550, backgroundColor:'black', pt:2 }}> 
                        <Grid container width='100%' height='100%'>
                            {/*Grid for Payment Summary*/}
                            <Grid className ="paymentSummary"container height={30} px={3}>
                                <Grid item xs>
                                    <Typography component="div" fontWeight="bold" fontSize={18}>
                                        Payment summary
                                    </Typography>
                                </Grid>
                                {/* <Grid item>
                                    <Typography component="div" fontWeight="bold">
                                        Ticket ID: 0000000
                                    </Typography>
                                </Grid> */}
                            </Grid>
                            <Grid className = "movieDetails" height='90%' sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly' }}>
                                <Grid container ml={6.5}>
                                    <Grid container mb={1}>
                                        <Grid container xs={6} md={7.8}>
                                            <Typography>
                                                Movie: {purchaseInfo?.movie.title}
                                            </Typography>
                                        </Grid>

                                        <Grid container xs={6} md={4} >
                                            <Typography>
                                                Quantity: 2
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                    <Grid container mb={1}>
                                        <Grid container xs={6} md={7.8}>
                                            <Typography>
                                                Date & Time: {purchaseInfo?.movieDate} {purchaseInfo?.movieTime}
                                            </Typography>
                                        </Grid>
                                        <Grid container xs={6} md={4}>
                                            <Typography>
                                                Seat: {seatToString(purchaseInfo.seatDetails)}
                                            </Typography>
                                        </Grid>
                                        
                                    </Grid>

                                    <Grid container  mb={1}>
                                        <Grid container xs={6} md={2.5}>
                                            <Typography>
                                                Hall number:
                                            </Typography>
                                        </Grid>
                                        <Grid container xs={6} md={9}>
                                            <Typography>
                                            {purchaseInfo?.hallNumber}
                                            </Typography>
                                        </Grid>
                                        
                                    </Grid>

                                    
                                    <Grid className="bookingDetails" container  >
                                        <Grid container mb={1}>
                                            <Grid container xs={6} md={5.3}>
                                                <Typography>
                                                    Booking ID: {clientSecret?.substring(3)}
                                                </Typography>
                                            </Grid>
                                            {/* <Grid container xs={6} md={6}>
                                                <Typography>
                                                    Payment type: Credit Card
                                                </Typography>
                                            </Grid> */}
                                        </Grid>
                                    </Grid>
                                </Grid>

                                {/*line*/}
                                <Grid className="line" container border={0.1} sx={{ mx: 'auto', width: '80%'}}></Grid>
                                {/*line*/}
                                <Grid className="Total Amount" sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly' }}>
                                    <Grid container ml={6.5}>
                                        <Grid container xs={6} md={8.5}>
                                            <Typography >
                                                Total Amount
                                            </Typography>
                                        </Grid>
                                        <Grid container xs={6} md={3}>

                                            <Typography>
                                               ${purchaseInfo?.paidAmount /100}
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>

                                {/*line*/}
                                <Grid className="line" container border={0.1}  sx={{ mx: 'auto', width: '80%'}}></Grid>
                                {/*line*/}

                           

                                
                                {/* line */}
                                {/* <Grid container border={0.1} sx={{ mx: 'auto', width: '80%'}}></Grid> */}
                                {/*line*/}

                                {/* <Grid container ml={10}>
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
                                </Grid> */}
                            </Grid>
                        </Grid>
                    </Box>
                    
                </Grid>

                <Grid container justifyContent="center"> 
                    <Button href="/" variant="contained"> 
                        <Typography fontWeight={'bold'} variant="subtitle2"> Back to home </Typography>
                    </Button>
                </Grid>
            </Grid>}

        </Box>
    );
}

export default PaymentSummary;