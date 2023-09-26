import { Button, Box, Checkbox, Typography } from "@mui/material";
const label = { inputProps: { 'aria-label': 'Checkbox' } };
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import EventSeatOutlinedIcon from '@mui/icons-material/EventSeatOutlined';
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
            position:"absolute",}} 
            >
            {props.state == 0 && <EventSeatTwoToneIcon/> }
            {props.state == 1 && <EventSeatIcon color = "success"/>}
            {props.state == 2 && <EventSeatIcon color="disabled"/>}
       
        </Box>
    )
}
{/* <Checkbox  {...label} icon={<Favorite/>} checkedIcon={<Favorite/>} sx={{left:`${props.y*2}em`,
top:`${props.x*2}em`,position:"absolute", fontSize:'small'}}/> */}

export default Seat;


// <Checkbox {...label} 
// icon={<EventSeatTwoToneIcon/>} 
// checkedIcon={<EventSeatIcon/>} 
// color="success" 
// sx={{
// left:`${props.x*1.3}em`,
// top:`${props.y*1.3}em`,
// position:"absolute", 
// width:4, 
// height:4,
// }} 
// onClick={props.onClickHandler}
// size="medium"
// // disabled={props.state == 1}
// >
// </Checkbox>