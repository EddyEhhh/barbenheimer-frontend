import {Box, Typography, Grid} from "@mui/material/";
import { alignProperty } from "@mui/material/styles/cssUtils";

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
            <Grid className="content" container sx= {{border:2, width:1, height:500, pl: '5%', pr:'5%'}}>
                <Grid sx = {{width:'40%'}}>
                    <Box className = "picture-box" sx ={{height:500, border:1}}> 
                        <Grid>
                            <Grid sx={{height:300}}>
                                <Box sx={{border:0}}>
                                    
                                </Box>
                            </Grid>
                            <Grid>

                            </Grid>
                        </Grid>
                    </Box>
                </Grid>

                <Grid sx ={{width:'60%'}} >
                    <Box className = "desc-box" sx={{height:500, border:1}}>
                        <Grid>
                            <Grid container direction='row' justifyContent={'center'} sx={{border:1, height: 100}} alignContent={"center"}>
                                <Typography variant="h3" sx={{mr:4}}>
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