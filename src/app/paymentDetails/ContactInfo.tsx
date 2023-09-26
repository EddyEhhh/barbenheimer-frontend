'use client'
import {Box, Divider, Typography, TextField, Grid} from "@mui/material/";
import * as React from 'react';
import {useState} from "react"

type paymentDetails = {
    
}

const ContactInfo = () => {
    const [email, setEmail] = useState('');
    const [isValidEmail, setIsValidEmail] = useState(true);
  
    const validateEmail = (inputEmail : string) => {
      const emailRegex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/
      return emailRegex.test(inputEmail);
    };
  
    const handleEmailChange = (event : any) => {
      const inputEmail = event.target.value;
      setEmail(inputEmail);
      setIsValidEmail(validateEmail(inputEmail));
    };

    return (
        <main>
            <Grid container sx={{height:30}} justifyContent={"center"} alignContent={"center"}>
                <Typography variant="body1" fontWeight={'bold'}>
                    Contact Information
                </Typography>
            </Grid>

            <Grid container justifyContent={"center"} sx={{height:155, mt:5}}>
                <Grid container direction="column" height={155} width={"40%"} justifyContent="space-between">
                    <TextField label="Name" size="medium"></TextField>
                    <TextField label="Email" value={email} onChange={handleEmailChange} error={!isValidEmail}
        helperText={!isValidEmail ? 'Invalid email format' : ''} sx={{width:1}}>{email}</TextField>
                    {/*TextField label="Contact Number" sx={{width:1}}></TextField> */}
                </Grid>
            </Grid>
        </main> 
    )
}


export default ContactInfo;