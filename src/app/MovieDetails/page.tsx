import MovieDescription from "../components/MovieDescription";
import SelectDate from "../components/SelectDate";
import SelectTime from "../components/SelectTime";
import {Box} from "@mui/material";

const MovieDetails = () => {
    return (
        <main>
            <Box sx={{pb:10, pt:10}}>
                <MovieDescription></MovieDescription>
                <SelectDate></SelectDate>
                <SelectTime></SelectTime>
            </Box>
            
        </main> 
    )
}


export default MovieDetails;