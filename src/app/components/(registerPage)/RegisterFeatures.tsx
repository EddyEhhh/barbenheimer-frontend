
"use client"
import {Grid} from "@mui/material/";
import RegisterForm from "../(registerPage)/RegisterForm";
import background from "../../images/Untitled design (1).png";


const RegisterFeatures = () => {
    return (
      <Grid container sx={{ height:'98vh' }}>
        <Grid item xs={false} sm={4} md={7} sx={{
            position: 'relative',
            backgroundImage: 'url("../../images/logInPicture.png")',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <RegisterForm/>
      </Grid>
      
    )
  
}

export default RegisterFeatures;