'use client'
import {Button, Box, Divider, Grid} from "@mui/material/";
import PaymentHeader from "./PaymentHeader";
import QuantityDetails from "./QuantityDetails";
import ContactInfo from "./ContactInfo";
import CreditCardInfo from "./PaymentInformation";
import ConfirmationDialog from "./ConfirmationDialog";
import React, { useState } from 'react';
import CountdownTimer from "./CountdownTimer";



const paymentDetails = () => {
    const [dialogOpen, setDialogOpen] = useState(false);

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
                <PaymentHeader></PaymentHeader>
                <Divider orientation="horizontal" flexItem sx={{mt:6,mb:6}}></Divider>
                <QuantityDetails></QuantityDetails>
                <Divider orientation="horizontal" flexItem sx={{mt:6,mb:6}}></Divider>
                <ContactInfo></ContactInfo>
                <Divider orientation="horizontal" flexItem sx={{mt:6,mb:6}}></Divider>
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