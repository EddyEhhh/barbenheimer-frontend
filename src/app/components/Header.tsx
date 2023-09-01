import { AppBar, Toolbar, IconButton, Box, Typography, Button,  } from '@mui/material';
import Link from 'next/link';

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
            <Box sx={{font:'bold', width:'100%', display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
                <Box sx={{display: 'flex'}}>
                    <Typography  variant="h6" component="div"> TITLE </Typography>
                </Box>
                <Box sx={{display:'flex', width:'20%', justifyContent:'space-around', alignItems: 'center'}}>
                    <Link href = "/"> Home </Link>
                    <Link href = "/MovieDetails"> Movies </Link>
                    <Link href = "/Account"> Acc </Link>
                </Box>
            </Box>
          
          </Toolbar>
        </AppBar>
      </Box>

    )
}

export default Header;