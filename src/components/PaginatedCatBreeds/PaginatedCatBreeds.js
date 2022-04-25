import React from 'react'
import Pagination from '../Pagination/Pagination';
import { Grid, Container } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActions } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const PaginatedCatBreeds = ({
    page,
    setPage,
    pageCount,
    catBreedListPaginated
}) => {
const navigate = useNavigate();

  return (
    <Container>
        <Grid
            container
            spacing={4}>
            <Grid
                item
                sx={{
                    margin:"4rem 0",
                    display:"grid",
                    justifyContent:"center"
                }}
                xs={12} >
                <Pagination
                    page={page}
                    setPage={setPage}
                    pageCount={pageCount}
                />
            </Grid>
            <Grid
                item
                container
                spacing={4}
            >
                {
                    catBreedListPaginated.map(item => {
                        return (
                            <React.Fragment key={item.id}>
                                {
                                    item.image
                                        &&  <Grid
                                                item
                                                xs={12}
                                                sm={6}
                                                md={4}
                                            >
                                                <Card sx={{
                                                    maxWidth: 345,
                                                    boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px'
                                                }}>
                                                    <CardMedia
                                                            component="img"
                                                            height="140"
                                                            image={item.image.url}
                                                            alt={item.name}
                                                        />
                                                    <CardContent>
                                                        <Typography
                                                            gutterBottom
                                                            variant="h5"
                                                            component="div">
                                                            {item.name}
                                                        </Typography>
                                                        <Typography
                                                            gutterBottom
                                                            variant="h6"
                                                            component="div">
                                                            {`Origin: ${item.origin}`}
                                                        </Typography>
                                                        <Typography
                                                            variant="body2"
                                                            color="text.secondary">
                                                            {item.description}
                                                        </Typography>
                                                    </CardContent>
                                                    <CardActions>
                                                        <Button
                                                            onClick={() => navigate(`/${item.id}`)}
                                                            size="small">
                                                            Learn More
                                                        </Button>
                                                    </CardActions>
                                                </Card>
                                            </Grid>
                                }
                            </React.Fragment>
                        )
                    })
                }
            </Grid>
            <Grid
                item
                sx={
                    {
                        margin:"4rem 0",
                        display:"grid",
                        justifyContent:"center"
                    }
                }
                xs={12}
            >
                <Pagination
                    page={page}
                    setPage={setPage}
                    pageCount={pageCount}
                />
            </Grid>
        </Grid>
    </Container>
  )
}

export default PaginatedCatBreeds