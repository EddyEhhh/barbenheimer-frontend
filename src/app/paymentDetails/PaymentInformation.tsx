import {Box, Grid, Typography, TextField, InputAdornment} from "@mui/material";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import CreditCard from "@mui/icons-material/CreditCard";
import React, { useState } from "react";



const PaymentInformation = () => {
    const [cardNumber, setCardNumber] = useState<string>('');
    const [isValidCard, setIsValidCard] = useState<boolean>(false);
    const [cardType, setCardType] = useState<string>('');

    function validateByLuhn(cardNumber) {
        let digits = cardNumber.length;
        let sum = 0;
        let isSecond = false;
        for (let i = digits - 1; i >= 0; i--) {
            let d = cardNumber[i].charCodeAt() - '0'.charCodeAt(0);
            if (isSecond == true)
                d = d * 2;
            sum += parseInt(String(d / 10), 10);
            sum += d % 10;
 
            isSecond = !isSecond;
        }
        return (sum % 10 == 0);
    }

    const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setCardNumber(value);

        const cardValidation = validateByLuhn(value);
        setIsValidCard(cardValidation);
    };
     
    return (
        <main>
            <Grid container sx={{height:50}} justifyContent={"center"} alignContent={"center"}>
                <Typography variant="h5" fontWeight={'bold'}>
                    Payment Information
                </Typography>
            </Grid>

            <Grid container justifyContent={"center"} sx={{height:230, mt: 5}}>
                <Grid container direction="column" height={230} width={"40%"} justifyContent="space-between">
                    <TextField label="Credit Card Number" variant="outlined" value={cardNumber} onChange={handleCardNumberChange} error={!isValidCard}
                    helperText={!isValidCard ? 'Card is not valid' : ''} sx={{width:1}}>{cardNumber}</TextField>
                    
                    <TextField label="Cardholder Name" sx={{width:1}}></TextField>
                    <Grid container direction="row" justifyContent="space-between" sx={{width:1}}>
                        <TextField label="Expiration Date (MM/YY)" sx={{width:'40%'}}></TextField>
                        <TextField label="CVC/CVC2" sx={{width:'40%'}}></TextField>
                    </Grid>
                </Grid>
            </Grid>
        </main> 
    )
}

export default PaymentInformation;
