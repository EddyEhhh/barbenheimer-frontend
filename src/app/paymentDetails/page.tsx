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

const paymentDetails = () => {
    const [dialogOpen, setDialogOpen] = useState(false);
    const [movieData, setMovieData] = useState<MovieSpecificDetailsInterface>();

    const search = useSearchParams();
    useEffect(() => {
        const fetchData = async () => {        
            try {
                const {data, status} = await AxiosInstance.get(`/api/v1/movies/${search.get(`id`)}`);
                setMovieData(data);
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
            <Button sx={{ml:5, mt:10, position:'absolute', fontWeight:'bold'}} variant='contained'>
                Back
            </Button>
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