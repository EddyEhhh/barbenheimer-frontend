
import {Box, Stack, Button, Typography, Grid, Paper, Link} from "@mui/material"
import Image from "next/image"
import {useState} from "react"


const ratings : string[] = ["G", "PG", "PG13", "NC16", "M18", "R21" ]

type MovieDetails = {
    id: number,
    title?: string,
    runtimeInMinute?: number,
    movieImages?: string,
    rating?: number,
    ageRestriction?: number
}


const MovieBox = ({id,title, runtimeInMinute, movieImages, rating, ageRestriction} : MovieDetails) => {
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
        <Link href = {`/movieDetails/${id}`}>
            <Box className="picture-section"
                sx ={{
                    position:'relative',
                    display:'flex', flexDirection:'column',
                    borderRadius:'4px',
                    overflow:'hidden',
                    transition:"width 0.2s ease-in-out",
                    }}>
                <Button sx= {{display:'flex', aspectRatio:2/3}}>
                    <Image
                        src={movieImages} alt="nothing" 
                        fill={true}
                        style={{objectFit:"contain"}}
                        sizes="(max-width: 600px) 100vw, 600px"
                        onMouseEnter={pictureOnMouseEnter}
                        onMouseLeave={pictureOnMouseLeave}>
                    </Image>
                </Button>

                <Paper elevation={1}  sx={{borderRadius:"4px", borderTopLeftRadius:'0', borderTopRightRadius:'0'}} >
                    <Stack className="text-section" display={"flex"} pb={1} height="85px" justifyContent={"space-between"}  flexDirection={"column"} sx={{pl:1, pr:1}}>
                        <Stack direction='row' display={'flex'}  justifyContent={'space-between'}>
                            <Typography variant="inherit" width={"3/4"}> {title}</Typography>
                            <Typography variant="subtitle1"> {ratings[ageRestriction]} </Typography>
                        </Stack>
                        <Box display={"flex"} justifyContent="space-between">
                            <Typography variant="subtitle1"> {runtimeInMinute} minutes</Typography>
                            <Button sx = {{fontWeight:"bold"}} variant="contained" color="primary" size="small">Buy now</Button>
                        </Box>
                    </Stack>


                </Paper>

            </Box>
            </Link>
        </Grid>
        </>
    )
}

export default MovieBox;