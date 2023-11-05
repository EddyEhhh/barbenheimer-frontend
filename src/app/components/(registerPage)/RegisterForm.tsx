import * as React from 'react';
import {Avatar, Button, Paper, TextField, Link, Grid, Box, Typography} from '@mui/material/';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import AxiosInstance from '../../api/AxiosInstance';

const emailRegex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,}$/;
const usernameRegex = /^[A-Za-z][A-Za-z0-9_]{3,30}$/;

const RegisterForm = () => {
  const [error, setError] = React.useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const password = data.get('password') as string;
    const confirmPassword = data.get('confirmPassword') as string;
    const email = data.get('email') as string;
    const username = data.get('username') as string;

    if (!username || !email || !password || !confirmPassword) {
      setError('Please fill in all the fields.');
      return;
    }

    if (!emailRegex.test(email)) {
      setError('Invalid email format.');
      return;
    }

    if (!passwordRegex.test(password)) {
      setError('Invalid password format.');
      return;
    }
    

    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    if (!emailRegex.test(email)) {
      setError('Invalid email format.');
      return;
    }
    
    
    setError(''); 
    
    console.log({
      email: email,
      password: password,
    });
  };

  return (
    <Grid item xs={12} sm={8} md={5} component={Paper} elevation={0} sx={{ pt: 4, pb: 2, pl: 7, pr: 7 }}>
      <Grid sx={{ borderRadius: 9, pt: 4, mt: 1 }} component={Paper} elevation={3}>
        <Grid
          sx={{
            pl: 6,
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <HowToRegIcon/>
          </Avatar>
          <Typography variant="h3" fontWeight={'bold'}>
            Sign Up
          </Typography>
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
          <Box
            sx={{
              marginTop: 0,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >

            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    autoComplete="username"
                    name="username"
                    fullWidth
                    id="username"
                    label="Username"
                    autoFocus
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="new-password"
                  />
                <Grid sx={{mt:1, ml:1}}>
                  <Typography variant="subtitle2" sx={{lineHeight:1}} color="grey">
                  Passwords must be: <br/>&#8226; at least 8 characters long <br/>&#8226; contain at least one letter<br/>&#8226; one number<br/>&#8226; and one special character ($, @, !, %, *, ?, or &).
                  </Typography>
                </Grid>

                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    name="confirmPassword"
                    label="Confirm Password"
                    type="password"
                    id="confirmPassword"
                    autoComplete="new-password"
                  />
                </Grid>
              </Grid>
              <Grid sx={{ height: 3, mt:1}}>
                {error && <Typography lineHeight={1} variant="subtitle2" color="error">{error}</Typography>}
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                <Typography fontWeight={"bold"}>
                  Sign Up
                </Typography>
              </Button>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link href="../../logIn" variant="body2">
                    Already have an account? Sign in
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default RegisterForm;
