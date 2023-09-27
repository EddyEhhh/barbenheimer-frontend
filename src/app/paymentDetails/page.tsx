'use client'
import {Button, Box, Divider, Grid} from "@mui/material/";
import PaymentHeader from "./PaymentHeader";
import QuantityDetails from "./QuantityDetails";
import ContactInfo from "./ContactInfo";
import CreditCardInfo from "./PaymentInformation";
import ConfirmationDialog from "./ConfirmationDialog";
import React, { useEffect, useState } from 'react';
import CountdownTimer from "./CountdownTimer";
import { useSearchParams } from "next/navigation";
import AxiosInstance from "../api/AxiosInstance";
import { MovieSpecificDetailsInterface } from "../interface/interface";
import Cookies from 'js-cookie'

const paymentDetails = () => {
    const [dialogOpen, setDialogOpen] = useState(false);
    const [movieData, setMovieData] = useState<MovieSpecificDetailsInterface>();

    const search = useSearchParams();
    useEffect(() => {
        const fetchData = async () => {        
            try {
                console.log(Cookies.get('test1'))
                const {data, status} = await AxiosInstance.get(`/api/v1/pay`,Cookies.get('test1'));
                setMovieData(data);
                console.log(data);
            } catch {

            }
        }
         fetchData();
    }, [])

    const handleConfirm = () => {
      //Go to Backend?
      setDialogOpen(false);
    }

    return (
        <main>
            <CountdownTimer></CountdownTimer>
            <Box sx={{pb:10, pt:10}}>
                <PaymentHeader
                    title={movieData?.title}
                    date={search.get('date')}
                    time={search.get('time')}
                    hall={search.get('hall')}
                    image={movieData?.movieImages[0].imageUrl}
                    seatNumber={search.get('seats')}
                ></PaymentHeader>

                <Divider orientation="horizontal" flexItem sx={{mt:6,mb:3}}></Divider>
                <QuantityDetails></QuantityDetails>
                <Divider orientation="horizontal" flexItem sx={{mt:3,mb:3}}></Divider>
                <ContactInfo></ContactInfo>
                <Divider orientation="horizontal" flexItem sx={{mt:3,mb:3}}></Divider>
                <CreditCardInfo></CreditCardInfo>

                <Grid container sx={{width:1, mt:8}} justifyContent={"center"} >
                <Button sx={{position:'absolute', fontWeight:'bold'}} variant='contained' onClick={() => setDialogOpen(true)}>
                    Confirm
                </Button>
                <ConfirmationDialog
                    open={dialogOpen}
                    onClose={() => setDialogOpen(false)}
                    onConfirm={handleConfirm}
                />
            </Grid>
            </Box>
        </main> 
    )
}


export default paymentDetails;