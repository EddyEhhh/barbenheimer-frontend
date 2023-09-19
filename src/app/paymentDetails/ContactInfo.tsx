import {Box, Divider, Typography, TextField, Grid} from "@mui/material/";
import * as React from 'react';

type paymentDetails = {
    
}

const ContactInfo = () => {
    return (
        <main>
            <Grid container sx={{height:50}} justifyContent={"center"} alignContent={"center"}>
                <Typography variant="h5" fontWeight={'bold'}>
                    Contact Information
                </Typography>
            </Grid>

            <Grid container justifyContent={"center"} sx={{height:230, mt:5}}>
                <Grid container direction="column" height={230} width={"40%"} justifyContent="space-between">
                    <TextField label="Name" sx={{width:1}}></TextField>
                    <TextField label="Email" sx={{width:1}}></TextField>
                    <TextField label="Contact Number" sx={{width:1}}></TextField> 
                </Grid>
            </Grid>
        </main> 
    )
}


export default ContactInfo;