import {Typography, Grid, Button, Stack, Paper} from "@mui/material/";    
import Link from "next/link";
import { MovieScheduleDatesInterface } from "../interface/interface";



const SelectDate = ({id, showDate, onClickHandler, selectedDate} : MovieScheduleDatesInterface)  => {
    return (
            <Grid item xs={1}>
                <Button size="small" sx={{fontWeight:"bold"}} variant={selectedDate == id ? 'contained' : 'outlined'} 
                    onClick={onClickHandler}>
                    {showDate}
                </Button>
            </Grid>
    )
}

export default SelectDate;