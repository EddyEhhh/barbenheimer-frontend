
import {Box, Stack, Button, Typography, Grid, Hidden} from "@mui/material"
import Image from "next/image"
import anime1 from '../images/anime1.jpeg'

type MovieDetails = {
    title?: string,
    duration?: number,
    picture?: HTMLImageElement,
    rating?: number,
    ageRating?: string
}


const MovieBox = ({title, duration, picture, rating, ageRating} : MovieDetails) => {
    return (
 
        <Grid item xs={1} sm={4} md={4} width={4}>
            <Box className="picture-section" 
                sx ={{
                    position:'relative',
                    display:'flex', flexDirection:'column', 
                    border:2, borderRadius:'12px',
                    overflow:'hidden', 
                    height:380}}>    
                <Button  sx= {{display:'flex', height:'70%', width:'100%'}}>
                    <Image 
                        src={anime1} alt="nothing" 
                        layout="fill" 
                        objectFit="cover">
                    </Image>
                </Button>
             
                <Stack className="text-section" display={"flex"} flexDirection={"column"} sx={{pl:1}}>
                    <Stack direction='row' display={'flex'} justifyContent={'space-between'} alignItems={"center"}>
                        <Typography variant="h6"> {title} insert title </Typography>
                        <Typography variant="subtitle1"> {ageRating} Age Rating PG13 </Typography>
                    </Stack>
                    <Typography variant="subtitle1"> {duration} Time 99 Minutes </Typography>
                </Stack>

                <Box sx={{display:'flex', justifyContent:'center',mt:2}}>
                    <Button sx = {{mt:'7', fontWeight:"bold"}} variant="outlined" color="primary" size="small">Book now</Button>
                </Box>

            </Box>
        </Grid>

   
    )
}

export default MovieBox;