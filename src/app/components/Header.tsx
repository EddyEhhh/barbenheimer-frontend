import { AppBar, Toolbar, IconButton, Box, Typography, Button,  } from '@mui/material';
import MenuItem from '@mui/material/MenuItem/MenuItem';
import Link from 'next/link';

const Header = () => {
    return (
        <Box>
        <AppBar position="static">
       
          <Toolbar>
            {/* <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
            </IconButton> */}
            <Box sx={{width: '100%', border: 1, display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                <Box sx={{display: 'flex'}}>
                    <Typography variant="h6" component="div">
                        Title
                    </Typography>
                </Box>
                <Box sx={{display: 'flex', width: '20%', justifyContent: 'space-around'}}>
                    <Link href = "/"> HOME </Link>
                    <Link href = "/MovieDetails"> MOVIES </Link>
                    <Link href = "/Account"> ACC </Link>
                </Box>
            </Box>
          
          </Toolbar>
        </AppBar>
      </Box>

    )
}

export default Header;