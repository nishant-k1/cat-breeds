import React from 'react'
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';
import { Container } from '@mui/material';
// A Loader component to show while page data is still being fetched from the server
const Loader = () => {
  return (
    <Container sx={{
      display:"grid",
      justifyContent:"center",
      alignItems:'center',
      height:'80vh'
    }}
    >
    <Stack sx={{ color: 'grey.500' }} spacing={2} direction="row">
        <CircularProgress color="secondary" />
      </Stack>
    </Container>
  )
}

export default Loader