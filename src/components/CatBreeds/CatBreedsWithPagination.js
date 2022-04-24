import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Container } from '@mui/material';
import { useFetch } from '../../customHooks/useFetch';
import  Loader from '../Loader/Loader'
import { Grid } from '@mui/material';
import Pagination from '../Pagination/Pagination';

const CatBreedsWithPagination = () => {
    const cat_breed_url = `https://api.thecatapi.com/v1/breeds`;

    // setting default page for pagination
    const [page, setPage] = React.useState(1);

     // fetched cat list from server
    const catBreedsList = useFetch(cat_breed_url, page);

    // setting state to control the total no pages in pagination
    const [pageCount, setPageCount] = React.useState(null);

    // state to control cat list per pagination page
    const [catBreeds, setCatBreeds] = React.useState([]);

    // Applying pagination and item count per pagination page
    React.useEffect(() => {
        if(catBreedsList.length > 0){
             // Setting item count per pagination page
            const itemCount = 9;

             // Settnig total no. of pages for pagination
            setPageCount(() => Math.ceil(catBreedsList.length/itemCount));

            // Setting index of the last item per pagination page
            const last_item_index = page * itemCount;

            // Setting index of the first item per pagination page
            const first_item_index = last_item_index - itemCount;

            // Setting list of total cat items respective to the every paination pages
            setCatBreeds(() => catBreedsList.slice(first_item_index, last_item_index));
        }
    }, [
        catBreedsList,
        catBreedsList.length,
        pageCount,
        page
    ]);

    return (
        <React.Fragment>
            {
                !catBreeds.length > 0
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
            {
               catBreeds.length > 0  && pageCount > 0
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
                                        catBreeds.map(item => {
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

export default CatBreedsWithPagination