import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Container } from '@mui/material';
import { useFetch } from '../../customHooks/useFetch';
import  Loader from '../../components/Loader/Loader'
import { Grid } from '@mui/material';
import Pagination from '../Pagination/Pagination';

const CatBreeds = () => {
    const cat_breed_url = `https://api.thecatapi.com/v1/breeds`;
    const catBreeds = useFetch(cat_breed_url);

    return (
        <Container>
            {
                !catBreeds && <Loader />
            }
            {
                catBreeds
                    &&  <Container>
                            <Grid container spacing={4}>
                                <Grid item>
                                    <Pagination />
                                </Grid>
                                    <Grid item container spacing={4} >
                                        {
                                            catBreeds.map(item => {
                                                    return (
                                                        <React.Fragment>
                                                            {
                                                                item.image
                                                                    &&  <Grid item xs={4}>
                                                                            <Card sx={{ maxWidth: 345 }}>
                                                                                <CardActionArea>
                                                                                <CardMedia
                                                                                    component="img"
                                                                                    height="140"
                                                                                    image={item.image.url}
                                                                                    alt="green iguana"
                                                                                />
                                                                                <CardContent>
                                                                                    <Typography gutterBottom variant="h5" component="div">
                                                                                        {item.name}
                                                                                    </Typography>
                                                                                    <Typography variant="body2" color="text.secondary">
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
                                <Grid item>
                                    <Pagination />
                                </Grid>
                            </Grid>
                        </Container>
            }
        </Container>
    )

}

export default CatBreeds