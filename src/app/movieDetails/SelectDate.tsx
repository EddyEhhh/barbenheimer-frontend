import {Typography, Grid, Button, Stack, Paper} from "@mui/material/";    
import Link from "next/link";
import { MovieScheduleDatesInterface } from "../interface/interface";



const SelectDate = ({id, showDate, onClickHandler} : MovieScheduleDatesInterface)  => {
    return (
            <Grid item xs={1}>
                <Button sx={{fontWeight:"bold"}} variant="contained" size="large"
                onClick={onClickHandler}>
                    {showDate}
                </Button>
            </Grid>
    )
}

export default SelectDate;