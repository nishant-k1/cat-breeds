import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import '../../App.css';
import { Container, Stack } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import {
  Search,
  StyledInputBase
} from './search'

const NavBar = ({searchQuery, setSearchQuery}) => {
  // State to control the input search form control
  const [inputQuery, setInputQuery] = React.useState("");

  return (
    // Rendering Navbar UI on the page
    <Box sx={{ flexGrow: 1, marginBottom:'4rem'}}>
      <AppBar position="fixed" sx={{ background:"#af8313" }}>
        <Container>
          <Toolbar>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ display: { xs: 'none', sm: 'block' } }}
            >
              Cat Breeds
            </Typography>
            <Box sx={{ flexGrow: 1 }} />
            <Stack direction="row" sx={{alignItems:"center"}}>
                <Search >
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
              </Search>
            </Stack>
            {/* <Box sx={{ flexGrow: 1 }} /> */}
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}

export default NavBar