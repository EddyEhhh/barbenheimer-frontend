import {Box, Typography, Grid, Button, Stack, Paper} from "@mui/material/";
import { MovieScheduleTimeInterface } from "../interface/interface";


//id of time is 1 , 2 , 3 ... need to minus one for index
const SelectTime = ({id, showTime, hall, selectedTime, onClickHandler} : MovieScheduleTimeInterface) => {
    // console.log(selectedTime);
    return (
        <Grid item xs={1}>
            <Button variant={selectedTime == id ? 'contained' : 'outlined'} sx={{fontWeight:"bold"}}
            onClick={onClickHandler} >
                {showTime}
            </Button>
        </Grid>
    )
}

export default SelectTime;