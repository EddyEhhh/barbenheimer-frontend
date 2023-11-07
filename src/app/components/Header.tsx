
import {AppBar, Toolbar, Box, Typography, Avatar, Autocomplete, TextField, Link, Button} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import TheatersIcon from '@mui/icons-material/Theaters';
import React, { useEffect,useState } from 'react';
import AxiosInstance from '../api/AxiosInstance';
import { useRouter } from 'next/navigation';
import { getAllMovies } from '../services/services';
import useAuth, {client} from "@/app/hooks/useAuth";
import {logout} from "@/app/services/userAuth";
import Cookies from "js-cookie";

interface searchFormat {
  title: string
  id: string
}

const Header = () => {
  const router = useRouter();
    const [searchData, setSearchData] = useState<searchFormat[]>([])
    const [enteredData, setEnteredData] = useState<searchFormat>('');

    useEffect (() => {
        getAllMovies().then((data)=>setSearchData(data));
    }, [])


      
    const searchOnEnterHandler = (event: React.KeyboardEvent<HTMLElement>) => {
    if (event.key == 'Enter') { 
        router.push(`/movie/${enteredData!.id}`);
      }
    }

    const setEnteredDataHandler =(event, value) => {
      setEnteredData(value);
    }

    const loginButtonHandler = ()  => {
        client.login();
    }

    const logoutButtonHandler = ()  => {
        client.logout()
    }

    const isLogin = useAuth();


    return (

      <Box>
        <AppBar component={"nav"}  sx={{justifyContent:"center"}}>
          <Toolbar>
            <Box sx={{font:'bold', width:'100%', display:'flex', flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
                <Box width={'20%'}>
                  <Link color={"white"} underline="none" href= "/"> <Typography fontWeight={"600"} variant="h6"> Barbenhemier </Typography> </Link>
                </Box>
                <Autocomplete
                  sx ={{width:'50%', height:'50%', justifyContent:'center'}}
                  onChange={setEnteredDataHandler}
                  freeSolo
                  options={searchData}
                  getOptionLabel={(option) => option.title}
                  renderInput={(params) => <TextField {...params} size='small' label="Search movies" onKeyDown={searchOnEnterHandler}
                  />}
                />
                <Box sx={{width:'20%', display:'flex', flexDirection:'row', justifyContent:'space-evenly', alignItems:'center'}}>
                  <Link underline="none" color={"white"} href = "/"> 
                    <Box display="flex" flexDirection={"row"}  justifyContent={"space-between"} alignItems={"center"} > 
                    <HomeIcon fontSize="small"/><Typography sx={{ml:'6px'}} fontWeight={"500"} variant="body2" > Home </Typography> 
                    </Box>
                  </Link>

                  <Link underline="none" color={"white"} href = "/browseMovie"> 
                    <Box display="flex" flexDirection={"row"}  justifyContent={"space-between"} alignItems={"center"} > 
                     <TheatersIcon fontSize="small"  /><Typography sx={{ml:'6px'}}  fontWeight={"500"} variant="body2"> Movies </Typography>
                    </Box>
                  </Link>
                  

                      {isLogin ?
                          <div>
                          <Link underline="none" href= "/account" >
                              <Avatar></Avatar>
                          </Link>
                          </div>
                          :
                          <Button
                              className={"px-5"}
                              color="primary"
                              size="small"
                              variant="text">
                              <Link onClick={loginButtonHandler}>
                                  Login
                              </Link>
                          </Button>
                          }
                    <Button onClick={logoutButtonHandler}>Logout</Button>



                </Box>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    )
}

export default Header;