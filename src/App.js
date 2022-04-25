import React from 'react';
import Layout from './components/Layout/Layout';
import './App.css';
import { Stack } from '@mui/material';

function App({searchQuery, setSearchQuery}) {

  return (
    <React.Fragment>
      <Stack className=".App">
        <Layout />
      </Stack>
    </React.Fragment>

  );
}

export default App;
