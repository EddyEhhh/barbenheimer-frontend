import { Grid, Typography } from "@mui/material";
import Image from "next/image";



const DescriptionBox = ( props : {title:string, runtimeInMinute:number, ageRestriction:number, language:string, movieImage:string, showDate:string, showTime:string} ) => {
    const ratings : string[] = ["G", "PG", "PG13", "NC16", "M18", "R21" ]
    return (
        <>
            <Grid sx={{mt:10}} container height={400} >
                <Grid item xs={6} position={"relative"} className="image-section" justifyContent={"end"}> 
                    <Image 
                            src ={props.movieImage}
                            alt="no image" 
                            fill={true}
                            sizes="(max-width: 600px) 100vw, 600px"
                            style={{objectFit:"contain", aspectRatio:2/3}}>
                        </Image>                       
                </Grid>

                <Grid item xs={6}>
                    <Grid>
                        <Typography variant="h4" fontWeight={"bold"}> {props.title} </Typography>
                        <Typography variant="h6"> Rated {`${ratings[props.ageRestriction]}`} | Duration: {props.runtimeInMinute} minutes | Language: {props.language} </Typography>
                        <Typography variant="h6"> Selected Date: {props.showDate}  </Typography>
                        <Typography variant="h6"> Selected Time: {props.showTime}</Typography>
                    </Grid>    

                </Grid>

            </Grid>
        </>
    )
}

export default DescriptionBox;