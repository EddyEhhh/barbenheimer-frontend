import { Button, Box, Checkbox, Typography } from "@mui/material";
const label = { inputProps: { 'aria-label': 'Checkbox' } };
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import EventSeatOutlinedIcon from '@mui/icons-material/EventSeatOutlined';
import EventSeatIcon from '@mui/icons-material/EventSeat';
import EventSeatTwoToneIcon from '@mui/icons-material/EventSeatTwoTone';


const Seat = (props : any) => {
    // const color = props.availability === 'AVAILABLE' ? "#499167" : "#FE5F55";
    // const style = {
    //   position: "absolute",
    //   left: `${props.y*2}em`,
    //   top: `${props.x*2}em`,
    //   backgroundColor: color,
    //   color: "white"
    // }

    return (
  
    <Box display={'flex'}>
        <Checkbox  {...label} icon={<EventSeatTwoToneIcon/>} checkedIcon={<EventSeatIcon/>} color="success" sx={{left:`${props.x*1.3}em`,
            top:`${props.y*1.3}em`,position:"absolute", width:4, height:4 }} size="medium">
        </Checkbox>
    </Box>
    )
}
{/* <Checkbox  {...label} icon={<Favorite/>} checkedIcon={<Favorite/>} sx={{left:`${props.y*2}em`,
top:`${props.x*2}em`,position:"absolute", fontSize:'small'}}/> */}

export default Seat;