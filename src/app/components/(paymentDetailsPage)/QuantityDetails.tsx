import {Typography, Grid, Divider} from "@mui/material/";

type paymentDetails = {
    ticketType?: string,
    quantity?: number,
    ticketPrice?: number;
}

const QuantityDetails = ({ticketType, quantity, ticketPrice} : paymentDetails) => {
     
    const renderDetail = (label: string, value: string) => (
            <Grid direction="column" justifyContent="center" alignItems="center">
                <Grid className='quantity-details-column-title' container justifyContent={"center"}>
                    <Typography variant="body1" fontWeight="bold">{label}</Typography>
                </Grid>
                <Grid className='quantity-details-column-values' container justifyContent={"center"}>
                    <Typography variant="body1">{value}</Typography>
                </Grid>
            </Grid>
    );

    return (
        <main>
            <Grid className='quantity-details' border={1} container direction="row" sx={{ width: '1', height: 200, pl: '20%', pr: '20%' }} alignItems="center" justifyContent="space-between">
                {renderDetail("Type", `${ticketType} Type of Ticket`)}
                <Divider orientation="vertical" flexItem></Divider>
                {renderDetail("Quantity", `${quantity} Quantity of Ticket`)}
                <Divider orientation="vertical" flexItem></Divider>
                {renderDetail("Price", `${ticketPrice} Total Price ($${ticketPrice * 7})`)}
            </Grid>
        </main>
    )

}

export default QuantityDetails;