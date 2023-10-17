import {Box, Typography, Grid, Button, Stack, Paper} from "@mui/material/";
import { MovieScheduleTimeInterface } from "../../interface/interface";
import { convertTo12Hours } from "@/app/services/util";

//id of time is 1 , 2 , 3 ... need to minus one for index
const SelectTime = ({id, showTime, selectedTime, onClickHandler} : MovieScheduleTimeInterface) => {
    return (
        <Grid pl={2}>
            <Button 
                size='medium' 
                variant={selectedTime == id ? 'contained' : 'outlined'} 
                color={selectedTime == id ? 'primary' : 'secondary'} 
                sx={{fontWeight:"bold"}}
                onClick={onClickHandler}>
                {convertTo12Hours(showTime)}
            </Button>
        </Grid>
    )
}

export default SelectTime;