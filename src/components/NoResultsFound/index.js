import React from 'react';
import { Container } from '@mui/material';
import {Typography} from '@mui/material';

const NoResultsFound = () => {
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
            Sorry!! No results found 😿
        </Typography>
    </Container>
  )
}

export default NoResultsFound