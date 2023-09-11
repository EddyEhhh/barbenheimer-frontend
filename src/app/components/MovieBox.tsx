
import {Box, Stack, Button, Typography, Grid, Grow, Paper} from "@mui/material"
import Image from "next/image"
import anime1 from '../images/anime1.jpeg'
import {useState} from "react"

type MovieDetails = {
    title?: string,
    duration?: number,
    picture?: HTMLImageElement,
    rating?: number,
    ageRating?: string
}


const MovieBox = ({title, duration, picture, rating, ageRating} : MovieDetails) => {
    const [isHover, setIsHover] = useState<boolean>(false);

    const pictureOnMouseEnter = () => {
        setIsHover(true);
    }
    const pictureOnMouseLeave = () => {
        setIsHover(false);
    }

    return (
        <>
        <Grid item xs={4} sm={4} md={4} lg={4}>
            <Box className="picture-section" 
                sx ={{
                    position:'relative',
                    display:'flex', flexDirection:'column', 
                    borderRadius:'8px',
                    overflow:'hidden', 
                    height:350, 
                    transition:"width 0.2s ease-in-out", width: isHover === true ? '101%' : '100%',
                    }}>     
                
                <Button sx= {{display:'flex', height:'90%'}}>
                    <Image 
                        src={anime1} alt="nothing" 
                        fill={true}
                        objectFit="cover"
                        onMouseEnter={pictureOnMouseEnter}
                        onMouseLeave={pictureOnMouseLeave}>
                    </Image>
                </Button>
                
                <Paper elevation={3} sx={{borderRadius:"12px", borderTopLeftRadius:'0', borderTopRightRadius:'0'}} >
                    <Stack className="text-section" height="40px" display={"flex"} flexDirection={"column"} sx={{pl:1, pr:1}}>
                        <Stack direction='row' display={'flex'} justifyContent={'space-between'} alignItems={"center"}>
                            <Typography fontWeight="bold" variant="h6"> {title} Title </Typography>
                            <Typography fontWeight="semibold" variant="subtitle1"> {ageRating} Age Rating PG13 </Typography>
                        </Stack>
                        <Typography fontWeight="semibold" variant="subtitle1"> {duration} Time 60 Minutes </Typography>
                    </Stack>

                    <Box sx={{display:'flex', justifyContent:'center',mt:3, mb:1}}>
                        <Button sx = {{mt:'7', fontWeight:"bold"}} variant="contained" color="primary" size="small">Book now</Button>
                    </Box>
                </Paper>

            </Box>
        </Grid>
        </>
   
    )
}

export default MovieBox;