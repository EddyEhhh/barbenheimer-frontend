import {Box, Typography, Grid} from "@mui/material/";
import { alignProperty } from "@mui/material/styles/cssUtils";
import MovieImage from "../images/img1041.webp";
import Image from 'next/image'

type MovieDetail = {
    title?: string,
    duration?: number,
    picture?: HTMLImageElement,
    rating?: number,
    ageRating?: string
    releaseDate?: string
    spokenLanguage?: string
    subtitle?: string
    director?: string
    cast?: string
    synopsis?: string
}
const MovieDescription = ({title, duration, picture, rating, ageRating, releaseDate, spokenLanguage, subtitle, director, cast, synopsis} : MovieDetail) => {
    return (
        <main>
            <Grid className="content" container sx= {{width:1, height:500, pl: '5%', pr:'5%'}}>
                <Grid sx = {{width:'40%'}}>
                    <Box className = "picture-box" sx ={{height:500}}> 
                        <Grid sx={{height:500}} justifyContent={'center'}>
                            <Box position='relative' sx={{aspectRatio:3/2, height:500}}>
                                <Image 
                                    src={MovieImage} alt="no image" 
                                    fill={true}
                                    style={{objectFit:"contain"}}>
                                </Image>
                            </Box>
                        </Grid>
                    </Box>
                </Grid>

                <Grid sx ={{width:'60%'}} >
                    <Box className = "desc-box" sx={{height:500}}>
                        <Grid>
                            <Grid container direction='row' justifyContent={'center'} sx={{height: 100}} alignContent={"center"}>
                                <Typography variant="h3" sx={{mr:4, fontWeight:700}}>
                                    {title} Movie Title
                                </Typography>
                                
                                <Typography>
                                    {ageRating} Age Rating
                                </Typography>
                        
                            </Grid> 

                            <Grid container direction='row' justifyContent={"space-between"}>
                                <Grid sx={{width:'40%'}}>
                                    <Typography>
                                        {duration}Duration:
                                    </Typography>
                                    <Typography>
                                        {releaseDate}Release Date:
                                    </Typography>
                                </Grid>
                                
                                <Grid sx={{width:'40%'}}>
                                    <Typography>
                                        {spokenLanguage}Spoken Language:
                                    </Typography>
                                    <Typography>
                                        {subtitle}Subtitles:
                                    </Typography>
                                </Grid>
                            </Grid>

                            <Grid sx={{mt: 4}}>
                                <Typography>
                                    {director}Director:
                                </Typography>
                                <Typography>
                                    {cast}Cast:
                                </Typography>
                            </Grid>
                            
                            <Grid sx={{mt:4}}>
                                <Typography>
                                    {synopsis}Synopsis:
                                </Typography>
                            </Grid>          
                        </Grid>
                    </Box>
                </Grid>
            </Grid>
        </main>
        
    )
}

export default MovieDescription;