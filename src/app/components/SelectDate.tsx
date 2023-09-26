import {Box, Typography, Grid, Button, Stack, Paper} from "@mui/material/";


const SelectDate = () => {
    return (
        <main>
            <Paper elevation={5}>
                <Grid container sx={{mt:4, height:65}} direction={"row"} justifyContent='center' >
                    <Grid container textAlign={"center"} alignContent={"center"} justifyContent={"center"}>
                        <Typography fontWeight="bold" >Select Date</Typography>
                    </Grid>
                </Grid>
            </Paper>
            
            <Stack direction="row" spacing={2} justifyContent={"center"} sx={{mt:4}}>
                <Button variant='contained'>Date</Button>
                <Button variant='contained'>Date</Button>
            </Stack>
        </main>
    )
}

export default SelectDate;