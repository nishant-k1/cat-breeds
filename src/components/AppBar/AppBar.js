import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import '../../App.css';
import { Container } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import SearchIcon from '@mui/icons-material/Search';
import {
  Search,
  SearchIconWrapper,
  StyledInputBase
} from './search'

const NavBar = () => {
  return (
    // <Box sx={{ flexGrow: 1 }}>
    //   <AppBar position="static" >
    //     {/* <Container> */}
    //     <Toolbar sx={{ maxHeight:"2rem", justifyContent:'space-between'}}>
    //         <Typography
    //           variant="h6"
    //           noWrap
    //           component="div"
    //           // sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
    //         >
    //           <h2 style={{fontFamily:"'Dancing Script','cursive'"}}>Cat Breeds</h2>
    //         </Typography>
    //         <Search >
    //           <SearchIconWrapper>
    //             <SearchIcon />
    //           </SearchIconWrapper>
    //           <StyledInputBase
    //             placeholder="Search…"
    //             inputProps={{ 'aria-label': 'search' }}
    //           />
    //         </Search>
    //         <IconButton
    //             size="large"
    //             edge="start"
    //             color="inherit"
    //             aria-label="open drawer"
    //             // sx={{ mr: 2 }}
    //           >
    //           <Brightness7Icon />
    //         </IconButton>
    //     </Toolbar>
    //     {/* </Container> */}
    //   </AppBar>
    // </Box>

    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
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
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
              />
            </Search>
            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
              <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-haspopup="true"
                color="inherit"
              >
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}

export default NavBar