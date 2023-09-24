import { Box, CircularProgress } from "@mui/material"

const LoadingPage =() => {
    return (
            <Box sx={{ display: 'flex', justifyContent:'center', alignItems:'center', pt:50, width:'100%', height:'100%'}}>
              <CircularProgress />
            </Box>
    )

}


export default LoadingPage;