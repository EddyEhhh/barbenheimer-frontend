import {Typography, Grid, Button, Stack, Paper} from "@mui/material/";    
import Link from "next/link";
import { MovieScheduleDatesInterface } from "../interface/interface";



const SelectDate = ({id, showDate, onClickHandler, selectedDate} : MovieScheduleDatesInterface)  => {
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
    const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];

    const dateConverter = (showDate : string) => {
        // const year = 2000 + parseInt(showDate.slice(0,2), 10); // Assuming 20XX format for years
        // const month = parseInt(showDate.slice(2, 2), 10);
        // const day = parseInt(showDate.slice(4, 2), 10);
        const [years, months, days] = showDate.split("-");
        const day = parseInt(days, 10);
        const month = parseInt(months,10);
        const date = new Date(2022, month-1 ,day);
    
        return `${dayNames[date.getDay()]} ${days} ${monthNames[month -1]}`
    }

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