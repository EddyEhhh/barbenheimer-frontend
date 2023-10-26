
import {Typography, Box, Paper, AppBar, Toolbar} from '@mui/material'
import Link from 'next/link'
const Footer = () => {
    return (
            <AppBar position="static" color="primary">
                <Toolbar>
                <Typography variant="body2" color="inherit">
                    Barbenheimer
                </Typography>
                </Toolbar>
            </AppBar>     
    )
   
}

export default Footer;