import { Grid, Typography,Box, Paper, Divider} from "@mui/material";
import Image from "next/image";

import SeatSelection from "./SeatSelection";


const DescriptionBox = ( props : {title:string, runtimeInMinute:number, ageRestriction:number, language:string, movieImage:string, showDate:string, showTime:string, hall:string} ) => {
    const ratings : string[] = ["G", "PG", "PG13", "NC16", "M18", "R21" ]
    return (
        <Box display={'flex'} justifyContent={'center'} flexDirection={'column'} height={'100%'} >
            <Box display={'flex'} justifyContent={'center'} mt={10} height={400}>

                <Box width={400}  position={"relative"} className="image-section"> 
                    <Image 
                        src ={props.movieImage}
                        alt="no image" 
                        fill={true}
                        sizes="(max-width: 600px) 100vw, 600px"
                        style={{objectFit:"contain", aspectRatio:2/3}}>
                    </Image>                       
                </Box>
            </Box>
         
        <Box justifyContent={'center'} display={'flex'}>
            <Box flexDirection={'column'}>
            <Typography variant="h6"> {props.title} </Typography>

                <Typography fontWeight='300'variant="body1"> Rated {`${ratings[props.ageRestriction]}`} | Duration: {props.runtimeInMinute} minutes | Language: {props.language} </Typography>
                <Typography fontWeight='300'variant="body1"> Selected Date: {props.showDate}  </Typography>
                <Typography fontWeight='300'variant="body1"> Selected Time: {props.showTime}</Typography>
                <Typography fontWeight='300'variant="body1"> Selected Hall: Hall {props.hall}</Typography>
            </Box>    
        </Box>
          
        </Box>

    )
}

export default DescriptionBox;