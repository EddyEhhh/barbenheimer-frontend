import { Box, Grid, Paper, Typography, Button, Link } from "@mui/material";
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';

const UserDetails = () => {
  return (
    <Box width="80%">
      <Grid container display="column" justifyContent="center">
        <Grid component={Paper} sx={{ width: "100%", height: '70px', mt: 5, mb: 5, display: "flex", alignItems: 'center' }}>
          <Typography sx={{ ml: 5 }} variant="h5" fontWeight="bold">
            User Profile
          </Typography>
        </Grid>

        {/* Body */}
        <Grid border={2} borderRadius={3} borderColor="divider" display="flex"width={"100%"}>
          {/* Account Icon */}
          <Grid container className='accountIcon' border={1} alignContent="center" justifyContent={"center"} width={"20%"}>
              <AccountCircleRoundedIcon fontSize='large' />
          </Grid>

          <Grid display="column">
            {/* Name */}
              <Grid sx={{ pt:2, pl:2, pr:2}}>
                <Typography variant='h6'>Username:</Typography>
              </Grid>
            {/* Email */}
              <Grid sx={{ pb: 2, pl:2, pr:2, mt: 2}}>
                <Typography variant='h6'>Email:</Typography>
              </Grid>
          </Grid>
          
          <Grid display="column">
              <Grid sx={{  pt:2, pl:2, pr:2}}>
                <Typography variant='h6' fontWeight="semibold">James</Typography>
              </Grid>
              <Grid sx={{ pb: 2, pl:2, pr:2, mt: 2}}>
                <Typography variant='h6' fontWeight="semibold">James@gmail.com</Typography>
              </Grid>
          </Grid>

          <Grid container className='logoutButton' alignContent={"center"}>
            <Button sx={{ border: 1 }}>
              <Link href="/" underline="none">
                <Typography>Log Out</Typography>
              </Link>
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

export default UserDetails;
