import { Box,Typography } from "@mui/material";
import EventSeatOutlinedIcon from '@mui/icons-material/EventSeatOutlined';
import EventSeatIcon from '@mui/icons-material/EventSeat';
import EventSeatTwoToneIcon from '@mui/icons-material/EventSeatTwoTone';

const SeatLegend = () =>{
    return (
        <Box display={'flex'} flexDirection={'row'} width={400} alignContent={'center'} justifyContent={'space-between'}>
            <Box display={'flex'} flexDirection={'row'} justifyItems={'center'} alignContent={'center'}>
                <EventSeatIcon color="success"></EventSeatIcon> 
                <Typography>your seat</Typography>
            </Box>
            <Box display={'flex'} flexDirection={'row'} justifyItems={'center'} alignContent={'center'}>
                <EventSeatIcon color="secondary"/> 
                <Typography>available</Typography>
            </Box>
            <Box display={'flex'}  flexDirection={'row'} justifyItems={'center'} alignContent={'center'}>
                <EventSeatIcon color='disabled'></EventSeatIcon>
                <Typography>sold out</Typography>
            </Box>
            <Box display={'flex'} flexDirection={'row'} justifyItems={'center'} alignContent={'center'}>
                <EventSeatIcon color='error'></EventSeatIcon>  
                    <Typography>reserved</Typography>
            </Box>
          
        </Box>
    )
}

export default SeatLegend;