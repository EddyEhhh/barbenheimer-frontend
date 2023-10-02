
import {Typography, Box, Paper} from '@mui/material'
import Link from 'next/link'
const Footer = () => {
    return (
        <Box width={'100%'}>
            <Paper sx={{mt:5, p:2}}> 
                <Typography variant="body2" align="center"> 
                    &copy; {new Date().getFullYear()} Barbenheimer
                </Typography> 
            </Paper>
        </Box>
     
    )
   
}

export default Footer;