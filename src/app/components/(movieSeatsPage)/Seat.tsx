import {Box} from "@mui/material";
const label = { inputProps: { 'aria-label': 'Checkbox' } };
import EventSeatIcon from '@mui/icons-material/EventSeat';
import EventSeatTwoToneIcon from '@mui/icons-material/EventSeatTwoTone';
import { SeatingInterface } from "@/app/interface/interface";


const Seat = (props : SeatingInterface) => {
  

    return (
        <Box
        onClick={props.onClickHandler}
        sx={{
            left:`${props.x*1.3}em`,
            top:`${props.y*1.3}em`,
            position:"absolute"}} 
        >
            
        {props.state == 0 && <EventSeatIcon color="secondary"/> }
        {props.state == 1 && <EventSeatIcon color="error" />}
        {props.state == 2 && <EventSeatIcon color="disabled"/>} 
        {props.state == 4 && <EventSeatIcon color = "success"/>}
        </Box>
    )
}
export default Seat;