import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import '../../App.css';
import { Container, Stack } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { Search, StyledInputBase } from './search';
import { useNavigate } from "react-router-dom";
import Divider from '@mui/material/Divider';
import catLogo from '../../assets/cat-logo.png';
import './Navbar.css';

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
            <img
              src={catLogo}
              variant="contained"
              alt="cat_logo"
              component="div"
              onClick={() => {navigate('/')}}
              className="Logo"
            />
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