
"use client"
import {Box, Typography, Grid, Avatar, Paper, TextField, Button, FormControlLabel, Checkbox, Link} from "@mui/material/";
import LogInForm from "../(logInPage)/LogInForm";
import img from "../../images/logInPicture.png"

const LogInFeatures = () => {
    return (
      <Grid container position={'relative'} sx={{ height:'98vh' }}>
        <Grid item xs={false} sm={4} md={7} sx={{
            backgroundImage: `url(${img.src})`,
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <LogInForm/>
      </Grid>
      
    )
  
}

export default LogInFeatures;