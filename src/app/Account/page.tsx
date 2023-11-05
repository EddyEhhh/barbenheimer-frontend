import {Typography, Box, Button, Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Link} from '@mui/material';
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
      <Box>
        <Grid container>
          <Paper sx={{width:1, height:'70px',mt:5, mb:5, display:"flex", alignItems:'center'}}>
            <Typography sx={{ml:5}} variant='h6' fontWeight="semibold">User Profile</Typography>
          </Paper>

           {/*Body*/}
          <Grid container>
            <Grid xs={2}></Grid>
            <Grid xs={8}>
              <Grid className='accountDetailsGrid'container >

                <Grid container border={2} borderRadius={3} borderColor='divider'>
                {/*Account Icon*/}
                <Grid className='accountIcon' sx={{pl: 3, pr:3, pt:2, pb:1.9,}}
                  >
                  <AccountCircleRoundedIcon sx={{fontSize: 110}}/>
                </Grid>
                <Grid sx={{pl:1}} xs={9.26}>
                  {/*Name*/}
                  <Grid container>
                    <Grid rowSpacing={1} sx={{p:2}}>
                      <Typography variant='h6'>Name:</Typography>
                    </Grid>
                    <Grid sx={{p:2}}>
                      <Typography variant='h6' fontWeight="semibold">James</Typography>
                    </Grid>
                  </Grid>
                  {/*Email*/}
                  <Grid container>
                    <Grid rowSpacing={1} sx={{p:2, pr:2.6}}>
                      <Typography variant='h6'>Email:</Typography>
                    </Grid>
                    <Grid sx={{p:2}}>
                      <Typography variant='h6' fontWeight="semibold">james@bmail.com</Typography>
                    </Grid>
                  </Grid>
                  </Grid>
                </Grid>
                <Grid className='logoutButton' container display="flex" justifyContent="right">
                  <Button style={{borderRadius: '16px'}}>
                    <Link href="/" underline="none" style={{textTransform: 'none', 
                      fontStyle: 'semibold',fontSize: '16px'}}>
                        <Typography>
                          Log Out
                        </Typography>
                    </Link> 
                    </Button>
                </Grid>
                
              </Grid>
              <Grid className='purchaseHistoryGrid'>
                 {/*Purchase History*/}
                <Grid sx={{ pt:8, pb:2}}>
                  <Typography variant='h6' fontWeight="bold">Purchase History</Typography>
                </Grid>
                  {/*Purchase History List*/}
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
                          sx={{ '&:last-child td, &:last-child th': { border: 0 }}}>
                          <TableCell component="th" scope="row" style={{width: 300}}>
                            <Typography fontWeight="semibold">
                              {row.date}
                            </Typography>
                            
                            </TableCell>
                          <TableCell align="right" style={{width: 400}}>
                            <Grid container>
                              <Grid>
                                <Box sx={{width: 100, backgroundColor: 'primary.main', pt:15}}>
                                </Box>
                              </Grid>
                              <Grid sx={{pt:6, pl:3}}>
                                <Typography fontWeight="semibold">
                                  {row.movie}
                                </Typography>
                              </Grid>
                            </Grid>
                            
                            
                          </TableCell>
                          <TableCell align="right">
                              <Button variant="text" style={{textTransform: 'none', 
                              fontStyle: 'semibold', borderRadius: '16px'}}>
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