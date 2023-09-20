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
                sx= {{width:1, height:500}}
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
                            <Grid container className="TITLE BOX" width={'60%'} pt={1}>
                                <Typography  fontWeight="500" variant="h6">
                                    {title}
                                </Typography>
                                <Typography sx={{mt:1}} variant="body2">
                                        {description}
                                </Typography>
                            </Grid> 
    
                        <Grid>
                        
                            <Grid className="content-box" pt={1} pb={2} mb={1} pl={1} pr={2} container rowGap={2} >
                                <Grid container direction='row' justifyContent={"space-between"}>
                               
                                    <Grid xs={6} container direction={'column'} rowGap={1}>
                                        <Typography fontWeight="500" variant="body2">
                                            Rating: {ageRestriction}
                                        </Typography>
                                        <Typography variant="body2"  fontWeight={"500"}> 
                                            Duration:
                                            <Typography  variant="body2" > 
                                                {runtimeInMinute} minutes 
                                            </Typography> 
                                        </Typography>
                                        <Typography variant="body2" fontWeight={"500"}> 
                                            Release Date: 
                                            <Typography variant="body2">
                                                {releaseDate}
                                            </Typography>
                                        </Typography>

                                        <Typography variant="body2">
                                            Spoken Language:
                                            <Typography variant="body2">
                                                {language}
                                            </Typography>
                                            </Typography>
                                    </Grid>


                                    
                                    <Grid container direction={'column'}xs={6}  rowGap={1}>
                                        <Typography  variant="body2" fontWeight={"bold"}> 
                                            Director: 
                                            <Typography variant="body2">
                                            {director} 
                                            </Typography>
                                        </Typography>
                                        <Typography variant="body2" fontWeight={"bold"}>
                                            Starring: 
                                            <Typography variant="body2">
                                            {cast}
                                            </Typography>
                                        </Typography>
                                    </Grid>
                                </Grid>

                            </Grid>
                           
                            </Grid>

                        </Grid>

                        </Paper>
                </Grid>
            </Grid>
        </>
        
    )
}

export default MovieDescription;