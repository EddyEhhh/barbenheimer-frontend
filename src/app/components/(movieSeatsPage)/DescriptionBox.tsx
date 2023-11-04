import {Typography,Box} from "@mui/material";
import Image from "next/image";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import TodayIcon from '@mui/icons-material/Today';
import CameraOutdoorIcon from '@mui/icons-material/CameraOutdoor';
import LanguageIcon from '@mui/icons-material/Language';


const DescriptionBox = ( props : {title:string, runtimeInMinute:number, ageRestriction:string, language:string, movieImage:string, showDate:string, showTime:string, hall:string} ) => {
    const ratings : string[] = ["G", "PG", "PG13", "NC16", "M18", "R21" ]
    return (
        <Box display={'flex'} width={'auto'} justifyContent={'center'} flexDirection={'column'} >
            <Box display={'flex'} justifyContent={'center'} height={400} >
                <Box width={270}  position={"relative"} className="image-section"  > 
                    <Image 
                        src ={props.movieImage}
                        alt="no image" 
                        fill={true}
                        sizes="(max-width: 768px) 100vw, 600px"
                        style={{objectFit:"contain", aspectRatio:2/3}}
                        priority={true}>
                    </Image>                       
                </Box>
            </Box>
         
        <Box justifyContent={'end-left'} alignItems={'center'} display={'flex'}>
            <Box flexDirection={'column'}>
            <Typography variant="h6"> {props.title} </Typography>
                <Typography fontWeight='300'variant="body1"> Rated: {`${ratings[props.ageRestriction]}`}   </Typography>
                <Typography fontWeight='300'variant="body1"> {props.runtimeInMinute} minutes  </Typography>
                <Typography fontWeight='300'variant="body1"> <LanguageIcon color="disabled" fontSize="small"/> {props.language} </Typography>
                <Typography fontWeight='300'variant="body1"> <TodayIcon color="disabled" fontSize="small"/> {props.showDate}  </Typography>
                <Typography fontWeight='300'variant="body1"> <AccessTimeIcon color="disabled" fontSize="small"/> {props.showTime}</Typography>
                <Typography fontWeight='300'variant="body1" alignItems={'center'}> <CameraOutdoorIcon color="disabled" fontSize="small"/> Hall {props.hall}</Typography>
            </Box>    
        </Box>
          
        </Box>

    )
}

export default DescriptionBox;