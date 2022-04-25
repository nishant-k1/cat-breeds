import React from 'react';
import Layout from './components/Layout/Layout';
import './App.css';
import { Stack } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';


const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App({searchQuery, setSearchQuery}) {


  return (
    <React.Fragment>
        <ThemeProvider theme={darkTheme}>
          <Stack className=".App">
            <Layout />
          </Stack>
        </ThemeProvider>

    </React.Fragment>

  );
}

export default App;
