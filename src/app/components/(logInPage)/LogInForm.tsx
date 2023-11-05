import React, { useState } from 'react';
import { Box, Typography, Grid, Avatar, Paper, TextField, Button, FormControlLabel, Checkbox, Link } from '@mui/material/';
import LoginIcon from '@mui/icons-material/Login';
import AxiosInstance from '../../api/AxiosInstance';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
import { checkLoginDetails } from '../../services/userAuth';


const LogInForm = () => {
  const [error, setError] = useState('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const username = data.get('username') as string; 
    const password = data.get('password') as string;
    // console.log("CREDENTIALS: "+ username + password);
    const router = useRouter();

    if (!username || !password) {
      setError('Please fill in all the fields.');
      return;
    }
    console.log("A1");
    setError('');
    console.log("A2");
    try {
      console.log("before data");
      const data = await checkLoginDetails(username, password); 
      console.log("data stuff: " + data);
      console.log('Response from the backend:', data);
      Cookies.set('access_token', data.accessToken, { secure: true });
      Cookies.set('refresh_token', data.refreshToken, { secure: true });
      Cookies.set('expires_in', data.expiresIn, { secure: true });
      Cookies.set('refresh_expires_in', data.refreshExpiresIn, { secure: true });
      Cookies.set('token_type', data.tokenType, { secure: true });
      router.push('/');       
    } catch (error) {
      console.error('Error while sending data to the backend:', error);
    }
  };

  return (
    <Grid item xs={12} sm={8} md={5} component={Paper} elevation={0} sx={{ pt: 9, pb: 5, pl: 7, pr: 7 }}>
      <Grid sx={{ borderRadius: 9, pt: 7, mt: 1 }} component={Paper} elevation={3}>
        <Grid
          sx={{
            pl: 6,
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LoginIcon />
          </Avatar>
          <Typography variant="h3" fontWeight={'bold'}>
            Welcome back!
          </Typography>
          <Typography variant="h6">We Missed You!</Typography>
        </Grid>

        <Grid
          sx={{
            pb: 10,
            mx: 6,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 2 }}>
            <TextField
              margin="normal"
              fullWidth
              label="Username" 
              name="username" 
              autoComplete="username" 
              autoFocus
            />
            <TextField
              margin="normal"
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Grid sx={{ height: 3 }}>
              {error && <Typography variant="subtitle2" color="error">{error}</Typography>}
            </Grid>
            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
              <Typography sx={{ fontWeight: 'bold' }}>Sign In</Typography>
            </Button>
            <Grid container>
              <Grid item xs></Grid>
              <Grid item>
                <Link href="../../register" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default LogInForm;
