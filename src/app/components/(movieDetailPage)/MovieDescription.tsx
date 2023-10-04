import {Paper, Typography, Grid, Container} from "@mui/material/";
import Image from 'next/image'
import { MovieSpecificDetailsInterface } from "../../interface/interface";

const MovieDescription = ({title, runtimeInMinute, movieImages, rating, ageRestriction, releaseDate, language, director, cast, description} : MovieSpecificDetailsInterface) => {
    return (
        <>
        <Paper square={false} sx={{pt:2 ,pb:2}}>
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
                        <Grid container columns={2}  direction={"column"} pl={2} pr={2} rowGap={2}>
                            <Grid container direction={'column'} className="TITLE BOX" width={'80%'} pt={1}>
                                <Typography  fontWeight="600" variant="h6">
                                    {title}
                                </Typography>
                                <Typography sx={{mt:1}} variant="body2">
                                    {description}
                                </Typography>
                            </Grid> 
        
                            <Grid className="content-box" pt={1} pb={2} mb={1} pr={2} container rowGap={2} >
                                <Grid container direction='row' justifyContent={"space-between"}>
                                    <Grid xs={6} container direction={'column'} rowGap={1}>
                                        <Grid>
                                            <Typography variant="body2" color={'GrayText'}>
                                                Rating:
                                            </Typography>
                                            <Typography  variant="body2" > {ageRestriction}</Typography> 
                                        </Grid>
                                        
                                        <Grid>
                                            <Typography variant="body2" color={'GrayText'}> 
                                                Duration:
                                            </Typography>
                                            <Typography  variant="body2" >{runtimeInMinute} minutes</Typography> 
                                        </Grid>
                                
                                        <Grid>
                                            <Typography variant="body2" color={'GrayText'}> 
                                                Release Date: 
                                            </Typography>
                                            <Typography variant="body2">{releaseDate}</Typography>
                                        </Grid>
                                    
                                        <Grid>
                                            <Typography variant="body2" color={'GrayText'}>
                                                Spoken Language:
                                            </Typography>
                                            <Typography variant="body2">{language}</Typography>
                                        </Grid>

                                    </Grid>

                                    <Grid container direction={'column'}xs={6}  rowGap={1}>
                                        <Grid>
                                            <Typography variant="body2" color={"GrayText"}> 
                                                Director: 
                                            </Typography>
                                            <Typography variant="body2">
                                                {director} 
                                            </Typography>
                                        </Grid>
                                       
                                        <Grid>
                                            <Typography variant="body2" color={"GrayText"}>
                                                Starring: 
                                            </Typography>
                                            <Typography variant="body2">
                                                {cast}
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                   
                </Grid>


            </Grid>
            </Paper>

        </>
  
    )
}

export default MovieDescription;