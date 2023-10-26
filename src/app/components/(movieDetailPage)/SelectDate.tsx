import {Typography, Grid, Button, Stack, Paper} from "@mui/material/";    
import Link from "next/link";
import { MovieScheduleDatesInterface } from "../../interface/interface";
import { dateConverter } from "@/app/services/util";


const SelectDate = ({id, showDate, onClickHandler, selectedDate} : MovieScheduleDatesInterface)  => {

    return (
        <Grid pl={2}>
            <Button 
                size="medium" 
                sx={{fontWeight:"bold"}} 
                variant={selectedDate == id ? 'contained' : 'outlined'} 
                color={selectedDate == id ? 'primary' : 'secondary'} 
                disableElevation={true}
                onClick={onClickHandler}>
                {dateConverter(showDate)}
            </Button>
        </Grid>
    )
}

export default SelectDate;