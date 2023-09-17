import {Box, Grid, Typography, TextField, InputAdornment} from "@mui/material";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import CreditCard from "@mui/icons-material/CreditCard";

const PaymentInformation = () => {
    return (
        <main>
            <Grid container sx={{height:50}} justifyContent={"center"} alignContent={"center"}>
                <Typography variant="h5" fontWeight={'bold'}>
                    Payment Information
                </Typography>
            </Grid>

            <Grid container justifyContent={"center"} sx={{height:230, mt: 5}}>
                <Grid container  direction="column" height={230} width={"40%"} justifyContent="space-between">
                    <TextField label="Card Number" 
                        InputProps={{startAdornment: (<InputAdornment position="start"> <CreditCardIcon /></InputAdornment>),}}sx={{width:1}}>
                    </TextField>

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
