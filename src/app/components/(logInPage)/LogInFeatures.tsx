
"use client"
import {Box, Typography, Grid, Avatar, Paper, TextField, Button, FormControlLabel, Checkbox, Link} from "@mui/material/";
import LogInForm from "../(logInPage)/LogInForm";

const LogInFeatures = () => {
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const data = new FormData(event.currentTarget);
      console.log({
        email: data.get('email'),
        password: data.get('password'),
      });
    }
    return (
      <Grid container sx={{ height:'98vh' }}>
        <Grid item xs={false} sm={4} md={7} sx={{
            backgroundImage: 'url("https://cutewallpaper.org/21x/26i1hxgsq/I-Love-Wallpapers-Anime,Movies,-Series-Collage.jpg")',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: '140% auto',
            backgroundPosition: '-130px 0px',
          }}
        />
        <LogInForm/>
      </Grid>
      
    )
  
}

export default LogInFeatures;