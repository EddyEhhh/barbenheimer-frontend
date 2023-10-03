import {Box, Typography, Grid, Button, Stack, Paper} from "@mui/material/";
import { MovieScheduleTimeInterface } from "../../interface/interface";


//id of time is 1 , 2 , 3 ... need to minus one for index
const SelectTime = ({id, showTime, selectedTime, onClickHandler} : MovieScheduleTimeInterface) => {
    const convertTo12Hours = (showTime : string) => {
        const [hours, minute] = showTime.split(":");
        let time = 'AM';
        let hour = parseInt(hours, 10);

        if (hour >= 12) {
            time = "PM";
            if (hour > 12) {
              hour -= 12;
            }
        }

        return `${hour}:${minute} ${time}`;

    }

    return (
        <Grid pl={2}>
            <Button 
                size='medium' 
                variant={selectedTime == id ? 'contained' : 'outlined'} 
                color={selectedTime == id ? 'success' : 'secondary'} 
                sx={{fontWeight:"bold"}}
                onClick={onClickHandler}>
                {convertTo12Hours(showTime)}
            </Button>
        </Grid>
    )
}

export default SelectTime;