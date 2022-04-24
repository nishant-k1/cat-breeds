import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Container } from '@mui/material';
import { useFetch } from '../../customHooks/useFetch';
import  Loader from '../Loader/Loader';
import { Grid } from '@mui/material';
import Pagination from '../Pagination/Pagination';

const CatBreedsWithSearchedQuery = ({searchQuery}) => {
    const cat_breed_url = `https://api.thecatapi.com/v1/breeds`;
    const [page, setPage] = React.useState(1);
    const fetchedCatBreedList = useFetch(cat_breed_url, page);

    const catBreedList = fetchedCatBreedList.filter(item => {
        if(item.name.replace(/\s/g, "").trim().toLowerCase()
            .includes(searchQuery.replace(/\s/g, "").trim().toLowerCase())){
            return item
        }
        return null
    })

    // catBreedList[0] && alert(JSON.stringify(catBreedList));
    const [catBreeds, setCatBreeds] = React.useState([]);

    const [pageCount] = React.useState(6);

    const last_list_item_index = page * pageCount;
    const first_list_item_index = (last_list_item_index + 1) - pageCount;

    // alert(JSON.stringify(catBreedsPaginated));
    // const catBreedsPaginated = catBreedList.slice(first_list_item_index, last_list_item_index + 1);

    catBreedList && setCatBreeds(catBreedList);
    // alert(JSON.stringify(catBreeds));

    return (
        <React.Fragment>
            {
                // !catBreedList[0]
                (catBreeds[0] === null)
                    &&  <Container sx={
                            {
                                display:"grid",
                                justifyContent:"center",
                                alignItems:'center',
                                height:'80vh'
                            }}
                        >
                            <Loader />
                        </Container>
            }
            {/* {
                (catBreeds[0] === 0)
                    &&  <Container sx={
                            {
                                display:"grid",
                                justifyContent:"center",
                                alignItems:'center',
                                height:'80vh'
                            }}
                        >
                            <Typography
                                gutterBottom
                                variant="h4"
                                component="div">
                                Sorry!! No results found 😭
                            </Typography>
                        </Container>
            } */}
            {
                (catBreeds[0] !== null)
                    &&  <Container>
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
                                        catBreedList.map(item => {
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
            }
        </React.Fragment>
    )
}

export default CatBreedsWithSearchedQuery