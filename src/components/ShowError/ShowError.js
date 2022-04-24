import React from 'react';
import { Container } from '@mui/material';
import {Typography} from '@mui/material';

const ShowError = () => {
  return (
    <Container sx={
        {
            display:"grid",
            justifyContent:"center",
            alignItems:'center',
            height:'80vh'
        }}
    >
        <Typography
            gutterBottom
            variant="h3"
            component="div">
            Internal Server Error 😿
        </Typography>
    </Container>
  )
}

export default ShowError