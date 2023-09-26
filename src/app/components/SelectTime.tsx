import {Box, Typography, Grid, Button, Stack, Paper} from "@mui/material/";

const SelectTime = () => {
    return (
        <main>
            <Paper elevation={5}>
                <Grid container sx={{mt:4, height:65}} direction={"row"} justifyContent='center' >
                    <Grid container textAlign={"center"} alignContent={"center"} justifyContent={"center"}>
                        <Typography fontWeight="bold">Select Time</Typography>
                    </Grid>
                </Grid>
            </Paper>
            

            <Stack direction="row" spacing={2} justifyContent={"center"} sx={{mt:4}}>
                <Button variant='contained'>Time</Button>
            </Stack>
        </main>
    )
}

export default SelectTime;