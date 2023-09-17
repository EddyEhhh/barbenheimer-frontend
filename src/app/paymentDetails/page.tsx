import {Button, Box, Divider, Grid} from "@mui/material/";
import PaymentHeader from "./PaymentHeader";
import QuantityDetails from "./QuantityDetails";
import ContactInfo from "./ContactInfo";
import CreditCardInfo from "./PaymentInformation";


const paymentDetails = () => {
    return (
        <main>
            <Button sx={{ml:5, mt:10, position:'absolute', fontWeight:'bold'}} variant='contained'>
                Back
            </Button>
            <Box sx={{pb:10, pt:15}}>
                <PaymentHeader></PaymentHeader>
                <Divider orientation="horizontal" flexItem sx={{mt:6,mb:6}}></Divider>
                <QuantityDetails></QuantityDetails>
                <Divider orientation="horizontal" flexItem sx={{mt:6,mb:6}}></Divider>
                <ContactInfo></ContactInfo>
                <Divider orientation="horizontal" flexItem sx={{mt:6,mb:6}}></Divider>
                <CreditCardInfo></CreditCardInfo>

                <Grid container sx={{width:1, mt:8}} justifyContent={"center"} >
                <Button sx={{position:'absolute', fontWeight:'bold'}} variant='contained'>
                    Confirm
                </Button>
            </Grid>
            </Box>            
        </main> 
    )
}


export default paymentDetails;