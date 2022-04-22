import * as React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import HomePage from '../../pages/HomePage/HomePage'
import { createTheme } from '@mui/material/styles';
import { green, purple } from '@mui/material/colors';
import {
  Container
} from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: green[500],
    },
  },
});

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

  const Layout = () => {
    return (
        <HomePage />
    );
  }

export default Layout