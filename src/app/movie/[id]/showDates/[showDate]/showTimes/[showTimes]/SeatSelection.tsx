import { Box, Checkbox, Typography, Paper} from "@mui/material"
import Seat from "./Seat"
import { useState, useEffect } from "react"
import { SeatingInterface } from "@/app/interface/interface"

const SeatSelection = (props : {seatingData : SeatingInterface[], width :number, height: number, 
    onClickFunction: (seat: SeatingInterface, index: number) => void
}) => {
    const width = props.width * 0.59 //2 is width of box * 5 columns
    const height = props.height * 0.6  //6 is height of box * 2 rows

    const onClickHandler = (seat:SeatingInterface, index:number) => {
        console.log(seat);
        if (seat.state == 0) {
            seat.state =1
        } else {
            seat.state = 0
        }
    }


    return (
        <Box display="flex" p={1} flexDirection="column">
            <Box width={1} border={1} mb={1.5} display='flex' justifyContent={'center'} alignContent={'center'} >
                <Typography variant="body2" >
                    SCREEN
                </Typography>
            </Box>
            <Box position='relative' display={"flex"} justifyContent={"center"} style={{width:`${width *2.2}em`, height:`${height*2.2}em`}}>
                <Box width={1}  display={'flex'} justifyContent={'center'}>
                    {(props.seatingData).map((seat : SeatingInterface, index) => (
                        <Seat 
                        x={seat.x} 
                        y={seat.y} 
                        number ={index} 
                        key = {index}
                        state={seat.state}
                        onClickHandler={() => props.onClickFunction(seat,index)}>
                        </Seat>)
                    )}
                </Box>
                
            </Box>
        </Box>
    )
}

export default SeatSelection