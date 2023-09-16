import {Box, Typography, Grid, Button, Stack, Paper} from "@mui/material/";
import { MovieScheduleTimeInterface } from "../interface/interface";

const SelectTime = ( {id, showTime, hall} : MovieScheduleTimeInterface ) => {
    return (
        <main>
            <Grid xs={1}>
                <Button variant='contained'>{showTime}</Button>
            </Grid>

           
        </main>
    )
}

export default SelectTime;