import {Typography, Box, Button, Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper} from '@mui/material';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';

function createData(
  date: string,
  movie: string,
  review: null

) {
  return { date, movie, review};
}
const rows = [
  createData('01/01/2111', 'Barbie', null),
  createData('01/01/2111', 'Barbie', null),
  createData('01/01/2111', 'Barbie', null),
  createData('01/01/2111', 'Barbie', null),
];

const Account = () => {
    return (
    // <>
    //   <main className="flex flex-col items-center justify-between">
    //     <div>
    //         Account page
    //     </div>
    //   </main> 
    // </>
      <Box>
        <Grid container>
          <Grid container sx={{p: 10}}>
            <Typography fontSize={32} fontWeight="bold">User Profile</Typography>
          </Grid>
           {/*Body*/}
          <Grid container>
            <Grid xs={2}></Grid>
            <Grid xs={8}>
              <Grid className='accountDetailsGrid'container>
                {/*Account Icon*/}
                <Grid className='accountIcon'>
                  <AccountCircleRoundedIcon sx={{fontSize: 60}}/>
                </Grid>
                <Grid sx={{pl:3}}>
                  {/*Name*/}
                  <Grid container >
                    <Grid rowSpacing={1} sx={{p:2}}>
                      <Typography fontSize={17}>Name:</Typography>
                    </Grid >
                    <Grid sx={{p:2}}>
                      <Typography fontSize={18} fontWeight="bold">Jaibun Thana</Typography>
                    </Grid>
                  </Grid>
                  {/*Email*/}
                  <Grid container>
                    <Grid rowSpacing={1} sx={{p:2, pr:2.6}}>
                      <Typography fontSize={17}>Email:</Typography>
                    </Grid>
                    <Grid sx={{p:2}}>
                      <Typography fontSize={18} fontWeight="bold">JaibunThana@gmail.com</Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid className='purchaseHistoryGrid'>
                 {/*Purchase History*/}
                <Grid sx={{ pt:8, pb:2}}>
                  <Typography fontSize={20} fontWeight="bold">Purchase History</Typography>
                </Grid>
                {/*Purchase History List*/}
                {/* <Grid>
                  <Grid container>
                    <Grid border={1} xs={4}>
                      <Typography fontSize={20}>Date</Typography>
                    </Grid>
                    <Grid border={1} xs={8}>
                      <Typography fontSize={20}>Movie</Typography>
                    </Grid>
                    <Grid>
                    </Grid>
                    
                  </Grid> */}

                  {/*Test Table*/}
                  <TableContainer component={Paper}>
                  <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                      <TableRow>
                        <TableCell><Typography fontWeight="bold">Date</Typography></TableCell>
                        <TableCell align="left"><Typography fontWeight="bold">Movie</Typography></TableCell>
                        <TableCell align="right"><Typography fontWeight="bold"></Typography></TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {rows.map((row) => (
                        <TableRow
                          key={row.date}
                          sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                          <TableCell component="th" scope="row" style={{width: 200}}>{row.date}</TableCell>
                          <TableCell align="right" style={{width: 300}}>
                            <Grid container>
                              <Grid>
                                <Box sx={{width: 100, backgroundColor: 'primary.main', pt:15}}>
                                </Box>
                              </Grid>
                              <Grid sx={{pt:6, pl:3}}>
                                {row.movie} 
                              </Grid>
                            </Grid>
                            
                            
                          </TableCell>
                          <TableCell align="right">
                              <Button variant="text" style={{textTransform: 'none'}}>
                                Review
                              </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
                
              </Grid>
            </Grid>
            <Grid xs={2}></Grid>
          </Grid>
        </Grid>
      </Box>
      
    );
}

export default Account;