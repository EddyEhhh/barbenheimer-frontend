import {Box, Typography, Grid, Button, Stack, Paper} from "@mui/material/";

const SelectTime = () => {
    return (
        <main>
            <Paper elevation={5}>
                <Grid container sx={{mt:4, height:50}} direction={"row"} justifyContent='center' >
                    <Grid container textAlign={"center"} alignContent={"center"} justifyContent={"center"}>
                        <Typography>Select Time</Typography>
                    </Grid>
                </Grid>
            </Paper>
            

            <Stack direction="row" spacing={2} justifyContent={"center"} sx={{mt:5}}>
                <Button variant='outlined'>Time</Button>
            </Stack>
        </main>
    )
}

export default SelectTime;