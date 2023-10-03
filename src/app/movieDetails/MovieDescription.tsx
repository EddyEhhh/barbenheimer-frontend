import {Paper, Typography, Grid, Container} from "@mui/material/";
import Image from 'next/image'

type MovieDetail = {
    id: number,
    title: string,
    runtimeInMinute: number,
    movieImages?: string,
    rating?: number,
    ageRestriction: string,
    releaseDate: string,
    lastShowingDate?: Date,
    showingDate: Date,
    ticketSaleDate?: Date,
    basePrice?: number,
    cast?: string,
    description?: string,
    language?: string,
    genre?: string,
    director: string,
}
const MovieDescription = ({title, runtimeInMinute, movieImages, rating, ageRestriction, releaseDate, language, subtitle, director, cast, description} : MovieDetail) => {
    return (
        <>
            <Grid container className="content" 
                direction={"row"} columnGap={5}
                sx= {{width:1, height:600}}
                >
                <Grid item position={"relative"}container xs={5}>
                        <Image 
                            src={movieImages} 
                            alt="no image" 
                            fill={true}
                            style={{objectFit:"contain", aspectRatio:3/2}}>
                        </Image>
                </Grid>

            
                <Grid item xs={6}>
                    <Paper square={false}>
                        <Grid container columns={2} direction={"column"} pl={2} pr={2} rowGap={2}>
                            <Grid container className="TITLE BOX" pt={2}>
                                <Typography  fontWeight="bold" variant="h4">
                                    {title}
                                </Typography>
                            </Grid> 
                            <Typography fontWeight="bold" variant="h6">
                                    Rating: {ageRestriction}
                                </Typography>

                            <Grid>
                        
                            <Paper elevation={5} square={false}>
                            <Grid className="content-box" pt={1} pb={2} mb={1} pl={2} pr={2} container rowGap={2} >
                                <Grid  container direction='row' justifyContent={"space-between"}>
                                    <Grid>
                                        <Typography variant="h6" fontWeight={"bold"}> 
                                            Duration:
                                            <Typography > 
                                                {runtimeInMinute} minutes 
                                            </Typography> 
                                        </Typography>
                                        <Typography variant="h6" fontWeight={"bold"}> 
                                            Release Date: 
                                            <Typography>
                                                {releaseDate}
                                            </Typography>
                                        </Typography>
                                    </Grid>
                                    
                                    <Grid>
                                        <Typography fontWeight={"bold"} variant="h6">
                                            Spoken Language:
                                            <Typography>
                                                {language}
                                            </Typography>
                                        </Typography>
                                        {/* <Typography>
                                            {subtitle}Subtitles:
                                        </Typography> */}
                                    </Grid>
                                </Grid>

                                <Grid>
                                    <Typography  variant="h6" fontWeight={"bold"}> 
                                        Director: 
                                        <Typography>
                                        {director} 
                                        </Typography>
                                    </Typography>
                                    <Typography variant="h6" fontWeight={"bold"}>
                                        Cast: 
                                        <Typography>
                                        {cast}
                                        </Typography>
                                    </Typography>
                                </Grid>
                                
                                <Grid>
                                    <Typography  fontWeight={"bold"} mt={2} variant="h6">
                                        Synopsis:
                                        <Typography>
                                        {description}
                                        </Typography>
                                    </Typography>
                                </Grid> 

                            </Grid>
                            </Paper>
                            </Grid>

                        </Grid>

                        </Paper>
                </Grid>
            </Grid>
        </>
        
    )
}

export default MovieDescription;