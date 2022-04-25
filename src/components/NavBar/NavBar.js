import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import '../../App.css';
import { Button, Container, Stack } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import {
  Search,
  StyledInputBase
} from './search'
import { useNavigate } from "react-router-dom";
import Divider from '@mui/material/Divider';


const NavBar = ({searchQuery, setSearchQuery}) => {
  const navigate = useNavigate();
  // State to control the input search form control
  const [inputQuery, setInputQuery] = React.useState("");

  return (
    // Rendering Navbar UI on the page
    <Box sx={{ flexGrow: 1, marginBottom:'4rem'}}>
      <AppBar position="fixed" sx={{ background:"#af8313" }}>
        <Container>
          <Toolbar>
            <Button
              variant="contained"
              noWrap
              component="div"
              onClick={() => {navigate('/cat-breeds')}}
              sx={{
                  textDecoration:'none',
                  minWidth:"fit-content",
                  textTransform:'none',
                  boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
                  background:"#896509",
                  transition:".3s",
                  marginRight:"1rem",
                  '&:hover': {
                    backgroundColor: '#896509',
                    transform: 'scale(.92, 0.92)',
                    transition:".3s",
                    boxShadow: 'rgba(199, 117, 165, 0.6) 0px 8px 24px',
                },
              }}
            >
              Cat Breeds
            </Button>
            <Box sx={{ flexGrow: 1 }} />
                <Search>
                <Stack direction="row" spacing={2} sx={{alignItems:"center"}} divider={<Divider orientation="vertical" flexItem />}>
                  <StyledInputBase
                      placeholder="Search…"
                      inputProps={{ 'aria-label': 'search' }}
                      value={inputQuery}
                      onChange={event => {setInputQuery(event.target.value)}}
                      onKeyDown={(event) => {
                        if(event.key === 'Enter'){
                          setSearchQuery(inputQuery);
                        }
                      }}
                    />
                    <IconButton
                      size="large"
                      onClick={() => {setSearchQuery(inputQuery)}}
                      color="inherit"
                    >
                    <SearchIcon />
                  </IconButton>
                  </Stack>
                </Search>

            {/* <Box sx={{ flexGrow: 1 }} /> */}
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}

export default NavBar