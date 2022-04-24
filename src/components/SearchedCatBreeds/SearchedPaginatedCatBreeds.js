import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Container } from '@mui/material';
import { Grid } from '@mui/material';
import Pagination from '../Pagination/Pagination';

const SearchedPaginatedCatBreeds = ({page, setPage, pageCount, catBreedSearchedPaginatedList}) => {
  return (
    <Container>
        <Grid
            container
            spacing={4}>
            <Grid
                item
                sx={
                    {
                        margin:"4rem 0",
                        display:"grid",
                        justifyContent:"center"
                    }
                }
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
                    catBreedSearchedPaginatedList.map(item => {
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
                                                <Card sx={{ maxWidth: 345 }}>
                                                    <CardActionArea>
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
                                                            variant="body2"
                                                            color="text.secondary">
                                                            {item.description}
                                                        </Typography>
                                                    </CardContent>
                                                    </CardActionArea>
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

export default SearchedPaginatedCatBreeds