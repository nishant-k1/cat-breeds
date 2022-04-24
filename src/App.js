import React from 'react';
import Layout from './components/Layout/Layout';
import './App.css';
import { Stack } from '@mui/material';

function App({searchQuery, setSearchQuery}) {
  return (
    // All App components
    <Stack className=".App">
      <Layout />
    </Stack>
  );
}

export default App;
