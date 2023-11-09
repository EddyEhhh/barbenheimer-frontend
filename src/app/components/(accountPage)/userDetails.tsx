import { Box, Grid, Paper, Typography, Button, Link } from "@mui/material";
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import { jwtDecode } from "jwt-decode";
import Cookies from 'js-cookie'
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";



const UserDetails = () => {

    const router = useRouter();
    // let decodedToken = null;
    const [decodedToken, setDecodedToken] = useState();

useEffect(() => {
    const token = Cookies.get('token');

    if (token === "undefined") {
        router.push('/');
    } else {
        const data = jwtDecode(token);
        setDecodedToken(data);
        // jwtDecode(token);
        console.log(decodedToken);
    }
},[])

  return (
    <Box width="80%">
        {decodedToken  && (
        <Grid container display="column" justifyContent="center">
        <Grid component={Paper} sx={{ width: "100%", height: '70px', mt: 5, mb: 5, display: "flex", alignItems: 'center' }}>
          <Typography sx={{ ml: 5 }} variant="h5" fontWeight="bold">
            User Profile
          </Typography>
        </Grid>

        {/* Body */}
        <Grid container border={2} borderRadius={3} borderColor="divider" display="flex" width={"100%"} justifyContent={"space-between"} height={200}>
          {/* Account Icon */}
          <Grid display={"flex"} width={"65%"}>
            <Grid container className='accountIcon' alignContent="center" justifyContent={"center"} width={"35%"}>
                <AccountCircleRoundedIcon fontSize='large' style={{ fontSize: '9em' }} />
            </Grid>

            <Grid container display="column" alignContent={"center"} width={"20%"}>
              {/* Name */}
                <Grid sx={{ pt:2, pl:2, pr:2}}>
                  <Typography variant='h6'>Username:</Typography>
                </Grid>
              {/* Email */}
                <Grid sx={{ pb: 2, pl:2, pr:2, mt: 2}}>
                  <Typography variant='h6'>Email:</Typography>
                </Grid>
            </Grid>
            
            <Grid container display="column" alignContent={"center"} width={"30%"}>
                <Grid sx={{  pt:2, pl:2, pr:2}}>
                  <Typography variant='h6' fontWeight="semibold">{decodedToken.preferred_username}</Typography> 
                </Grid>
                <Grid sx={{ pb: 2, pl:2, pr:2, mt: 2}}>
                  <Typography variant='h6' fontWeight="semibold">{decodedToken.email}</Typography>
                </Grid>
            </Grid>
          </Grid>

          <Grid container className='logoutButton' alignContent={"center"} width={"20%"} display={"flex"} justifyContent={"center"}>
            <Button sx={{ border: 1 }}>
              <Link href="/" underline="none">
                <Typography>Log Out</Typography>
              </Link>
            </Button>
          </Grid>
        </Grid>
        </Grid>
            )}
      
    </Box>
  );
}

export default UserDetails;