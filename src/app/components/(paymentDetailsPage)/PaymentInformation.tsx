import {Box, Grid, Typography, TextField, InputAdornment} from "@mui/material";
import React, { useState } from "react";



const PaymentInformation = () => {
    const [cardNumber, setCardNumber] = useState<string>('');
    const [isValidCard, setIsValidCard] = useState<boolean>(false);

    function validateByLuhn(cardNumber: string) {
        let sum = 0;
        let isSecond = false;
    
        for (let i = cardNumber.length - 1; i >= 0; i--) {
          let digit = parseInt(cardNumber.charAt(i), 10);
    
          if (isSecond) {
            digit *= 2;
            if (digit > 9) {
              digit -= 9;
            }
          }
    
          sum += digit;
          isSecond = !isSecond;
        }
    
        return sum % 10 === 0;
      }

    const handleCardNumberChange = (event:React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setCardNumber(value);

        const cardValidation = validateByLuhn(value);
        setIsValidCard(cardValidation);
    };
     
    return (
        <main>
            <Grid className='payment-info-header' container sx={{height:50}} justifyContent={"center"} alignContent={"center"}>
                <Typography variant="body1" fontWeight={'bold'}>
                    Payment Information
                </Typography>
            </Grid>

            <Grid className='payment-info-fields' container justifyContent={"center"} sx={{height:230, mt: 5}}>
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
