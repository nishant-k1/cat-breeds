import React from 'react';
import Layout from './components/Layout/Layout';
import AppBar from './components/AppBar/AppBar';
import './App.css';
import { Stack } from '@mui/material';

function App() {
  return (
    <Stack className=".App">
        <AppBar />
        <Layout />
    </Stack>
  );
}

export default App;
