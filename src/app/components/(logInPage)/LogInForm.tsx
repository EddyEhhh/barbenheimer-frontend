import React, { ReactEventHandler, SetStateAction, useState, ChangeEvent} from 'react';
import { Box, Typography, Grid, Avatar, Paper, TextField, Button, FormControlLabel, Checkbox, Link } from '@mui/material/';
import LoginIcon from '@mui/icons-material/Login';
import AxiosInstance from '../../api/AxiosInstance';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
import { checkLoginDetails } from '@/app/services/userAuth';

const LogInForm = () => {
  const [error, setError] = useState(''); 
  const [username, setUsername] = useState('');
  const [password,setPassword]= useState('');
  const router = useRouter();

  const usernameHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setUsername(e.target.value);
  }
  const passwordHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setPassword(e.target.value);
  }

  const inputValidation = () => {
    //checks if password/username is empty
    console.log(password);
    if (username == ''|| password=='') {
      return false;
    }
    return true;
  }

  const handleSubmit = async () => {
    console.log(inputValidation());
    if (inputValidation()) {
      await checkLoginDetails(username, password).then((data) => {
        const tokenExpireTime :number = parseInt(data.expiresIn) /86400  ;
        const refreshTokenExpireTime :number = parseInt(data.refreshExpiresIn) /86400 ;
        Cookies.set('access_token', data.accessToken, {expires:tokenExpireTime, secure:true});
        Cookies.set('refresh_token', data.refreshToken, {expires:refreshTokenExpireTime,secure:true});
        router.push('/');      
        }).catch((error) => {
          const message = 'Wrong Credentials'
          setError(message);
        });
    } else {
      const message = 'Please enter password/username'
      setError(message);
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
          <Box sx={{ mt: 2 }}>
            <TextField
              margin="normal"
              fullWidth
              label="Username" 
              name="username" 
              autoComplete="username" 
              autoFocus
              onChange={usernameHandler}
            />
            <TextField
              margin="normal"
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              onChange={passwordHandler}
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Grid sx={{ height: 3 }}>
              {error && <Typography variant="subtitle2" color="error"> {error} </Typography>}
            </Grid>
            <Button type="submit" onClick={handleSubmit} fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
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
