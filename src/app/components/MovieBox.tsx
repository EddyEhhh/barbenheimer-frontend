
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
        <Grid item lg={1} md={1} sm={1} xs={1}>
            <Box className="picture-section" 
                sx ={{
                    position:'relative',
                    display:'flex', flexDirection:'column', 
                    borderRadius:'4px',
                    overflow:'hidden', 
                    aspectRatio:2/3,

                    transition:"width 0.2s ease-in-out",
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
                
                <Paper elevation={1} sx={{borderRadius:"4px", borderTopLeftRadius:'0', borderTopRightRadius:'0'}} >
                    <Stack className="text-section" height="48px" display={"flex"} flexDirection={"column"} sx={{pl:1, pr:1}}>
                        <Stack direction='row' display={'flex'} justifyContent={'space-between'} alignItems={"center"}>
                            <Typography fontWeight="bold" variant="h6"> {title} Title </Typography>
                            <Typography fontWeight="semibold" variant="subtitle1"> {ageRating} Age Rating PG13 </Typography>
                        </Stack>
                        <Box display={"flex"} pt={1} alignItems="center" justifyContent="space-between">
                        <Typography fontWeight="semibold" variant="subtitle1"> {duration} Time 60 Minutes </Typography>
                        <Button sx = {{fontWeight:"bold"}} variant="contained" color="primary" size="small">Buy now</Button>
                        </Box>
                      

                    </Stack>

                    <Box sx={{display:'flex', justifyContent:'center',mt:3, mb:1}}>
                    </Box>
                </Paper>

            </Box>
        </Grid>
        </>
   
    )
}

export default MovieBox;