import { AppBar, Toolbar, IconButton, Stack, Box, Typography, Button, Avatar  } from '@mui/material';
import Link from 'next/link';


const options = ['Home', 'Movies', 'Acc'];
const Header = () => {
    return (
      <Box>
        <AppBar color="secondary" position="absolute">
          <Toolbar>
            {/* <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
            </IconButton> */}
            <Box sx={{font:'bold', width:'100%', display:'flex', flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
                <Box >
                    <Typography  variant="h5" component="div"> Barbenhemier </Typography>
                </Box>
                <Stack sx={{width:'1/20'}} color='secondary' direction='row' spacing = '18'>
                  <Button size='large' href = "/"> Home </Button>
                  <Button size='large' href = "/MovieDetails"> Movies </Button>
                  <Button href= "/Account" >
                    <Avatar></Avatar>
                  </Button>
                </Stack>
            </Box>
          
          </Toolbar>
        </AppBar>
      </Box>

    )
}

export default Header;