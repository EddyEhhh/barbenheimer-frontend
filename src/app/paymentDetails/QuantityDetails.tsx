import {Box, Typography, Grid, Button, Stack, Paper, Divider} from "@mui/material/";
import Image from 'next/image';
import MovieImage from "../images/img1041.webp";


type paymentDetails = {
    ticketType?: string,
    quantity?: number,
    ticketPrice?: number;
}

const QuantityDetails = ({ticketType, quantity, ticketPrice} : paymentDetails) => {
    return (
        <main>
            <Grid container direction='row' sx= {{width:1, height:60, pl: '20%', pr:'20%'}} alignItems={'center'} justifyContent={"space-between"}>
                <Grid direction="column" justifyContent="center" alignItems="center">
                    <Grid container justifyContent={"center"}>
                        <Typography variant='h6' fontWeight={'bold'}>
                            Type
                        </Typography>
                    </Grid>
                    <Grid container justifyContent={'center'}>
                        <Typography>
                            {ticketType}Type of Ticket
                        </Typography>
                    </Grid>
                </Grid>

                <Divider orientation="vertical" flexItem></Divider>

                <Grid direction="column" justifyContent="center" alignItems="center">
                    <Grid container justifyContent={"center"}>
                        <Typography variant='h6' fontWeight={'bold'}>
                        Quantity
                        </Typography>
                    </Grid>
                    <Grid container justifyContent={'center'}>
                        <Typography>
                        {quantity} Quantity of Ticket
                        </Typography>
                    </Grid>
                </Grid>

                <Divider orientation="vertical" flexItem></Divider>
                
                <Grid direction="column" justifyContent="center" alignItems="center">
                    <Grid container justifyContent={"center"}>
                        <Typography variant='h6' fontWeight={'bold'}>
                        Price
                        </Typography>
                    </Grid>
                    <Grid container justifyContent={'center'}>
                        <Typography>
                            {ticketPrice}Total Price ($7 x 2)
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
        </main>
    )
}

export default QuantityDetails;