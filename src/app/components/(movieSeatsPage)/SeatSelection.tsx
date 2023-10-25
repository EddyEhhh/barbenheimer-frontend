import { Box, Checkbox, Typography, Paper, alpha} from "@mui/material"
import Seat from "./Seat"
import { useState, useEffect } from "react"
import { SeatingInterface } from "@/app/interface/interface"


const SeatSelection = (props : {seatingData : SeatingInterface[], width :number, height: number, 
                                onClickFunction: (seat: SeatingInterface, index: number) => void
}) => {
    const width = props.width * 0.59 //2 is width of box * 5 columns
    const height = props.height * 0.6  //6 is height of box * 2 rows
    const alphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R']
    const onClickHandler = (seat:SeatingInterface, index:number) => {
        if (seat.state == 0) {
            seat.state =1
        } else {
            seat.state = 0
        }
    }


    return (
        <Box display="flex" flexDirection="column">
            <Box width={1} border={1} mb={1.5} display='flex' justifyContent={'center'} alignContent={'center'} >
                <Typography variant="body2" >
                    screen
                </Typography>
            </Box>

            <Box display={'flex'} flexDirection={'row'}>
                <Box pr={1}>
                    {
                    alphabet.map((alp, index) => {
                        if (index <  props.height) {
                            return <Typography key={index} mb={0.2} fontSize={'small'}> {alp} </Typography>
                        }
                    })
                    }
                </Box>
                <Box position='relative' display={"flex"} justifyContent={"center"} style={{width:`${width *2.2}em`, height:`${height*2.2}em`}}>
                    <Box width={1} border={1} display={'flex'} justifyContent={'center'}>
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
                <Box pl={2}>
                    {alphabet.map((alp, index) => {
                        if (index < props.height) {
                            return <Typography key={index} mb={0.2} fontSize={'small'}> {alp} </Typography>
                        }
                    })}
                </Box>
            </Box>
          
        </Box>
    )
}

export default SeatSelection