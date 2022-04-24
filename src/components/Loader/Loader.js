import React from 'react'
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';

// A Loader component to show while page data is still being fetched from the server
const Loader = () => {
  return (
    <Stack sx={{ color: 'grey.500' }} spacing={2} direction="row">
        <CircularProgress color="secondary" />
    </Stack>
  )
}

export default Loader