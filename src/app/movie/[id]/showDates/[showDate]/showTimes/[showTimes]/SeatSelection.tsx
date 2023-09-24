import { Box, Checkbox, Typography, Paper} from "@mui/material"
import Seat from "./Seat"
import { useState, useEffect } from "react"
import { SeatingInterface } from "@/app/interface/interface"

//2 rows 3 columns
const seats = [
    { x: 0, y: 0 },
    { x: 0, y: 1 },
    { x: 0, y: 2 },
    { x: 0, y: 3 },
    { x: 0, y: 4 }, // Added an extra seat for demonstration
    { x: 1, y: 0 },
    { x: 1, y: 1 },
    { x: 1, y: 2 },
    { x: 1, y: 4 }, 
    { x: 1, y: 5 }, 
    { x: 2, y: 1 },
    { x: 2, y: 2 },
    { x: 3, y: 4 }, 
    { x: 3, y: 5 }, 
]

const SeatSelection = (props : {seatingData : SeatingInterface}) => {

    const seatingArrangement = [];

    for (let row = 0; row < 14; row++) {
        const rowSeats = [];
        for (let col = 0; col <16; col++) {
            // Check if the seat should be empty for aisles
            if (col === 4 || col === 5 || col === 8 || col === 9 || col === 14) {
                rowSeats.push({ x: null, y: null });
            } else {
                rowSeats.push({ x: row, y: col });
            }
        }
        seatingArrangement.push(rowSeats);
    }
    
    // console.log(seatingArrangement);
    
    //30px
    const width = 30 * 0.59 //2 is width of box * 5 columns
    const height = 30* 0.6  //6 is height of box * 2 rows
    return (
        <Box display="flex" p={1} flexDirection="column">
            <Box width={1} border={1} mb={1.5} display='flex' justifyContent={'center'} alignContent={'center'} >
                <Typography variant="body2" >
                    SCREEN
                </Typography>
            </Box>
            <Box position='relative' display={"flex"} justifyContent={"center"} style={{width:`${width *2.2}em`, height:`${height*2.2}em`}}>
                <Box width={1} display={'flex'} justifyContent={'center'}  >
    {/* {seatingArrangement.map((seat,index) => 
            (seat.map((seating, index) => (
            <Seat x={seating.x} y ={seating.y} number={index} key={index}></Seat> ))
        ))} */}
                    {(props.seatingData).map((seat : SeatingInterface, index) => (
                        <Seat x = {seat.x} y ={seat.y} number ={index} key = {index}></Seat>)
                    )}
                </Box>
                
            </Box>
        </Box>
    )
}

export default SeatSelection