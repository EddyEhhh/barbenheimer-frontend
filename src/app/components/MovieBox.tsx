
import {Box, Stack, Button, Typography, Grid} from "@mui/material"

type MovieDetails = {
    title?: string,
    duration?: number,
    picture?: HTMLImageElement,
    rating?: number,
    ageRating?: string
}


const MovieBox = ({title, duration, picture, rating, ageRating} : MovieDetails) => {
    return (
        <Grid>
            <Box sx ={{display:'flex', flexDirection:'column',border:1, width:'320', height:'380'}}>
                <Button sx= {{display:'flex', backgroundColor: 'secondary.white', border:1, height:'70%', width:'100%'}}>
                    <Box> insert img </Box>
                </Button>
             
                <Stack display={"flex"} flexDirection={"column"} sx={{pl:1}}>
                    <Stack direction='row' display={'flex'} justifyContent={'space-between'}>
                        <Typography variant="h6"> {title} insert title </Typography>
                        <Typography variant="subtitle1"> {ageRating} Age Rating PG13 </Typography>
                    </Stack>
                    <Typography variant="subtitle1"> {duration} Time 99 Minutes </Typography>
                </Stack>

                <Box sx={{display:'flex', justifyContent:'center'}}>
                    <Button sx = {{mt:'4', display:'flex'}} variant="contained" color="success"  size="small"> Book now </Button>
                </Box>
        
            </Box>
        </Grid>
   
    )
}

export default MovieBox;