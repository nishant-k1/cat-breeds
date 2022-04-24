import * as React from 'react';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';
import { useFetch } from '../../customHooks/useFetch';
import  Loader from '../Loader/Loader';
import SearchedPaginatedCatBreeds from './SearchedPaginatedCatBreeds';
import SearchedCatBreedsWithoutPagination from './SearchedCatBreedsWithoutPagination';
import ShowError from '../ShowError/ShowError';

const CatBreedsWithSearchedQuery = ({searchQuery}) => {
    const url = `https://api.thecatapi.com/v1/breeds`;

    // setting default page for pagination
    const [page, setPage] = React.useState(1);

    // fetched cat list from server
    const {loading, error:networkError, list:catBreedList} = useFetch(url, page);

    // setting state to control the total no pages in pagination
    const [pageCount, setPageCount] = React.useState(null);

    // state to control searched cat list according to the search query
    const [catBreedSearchedList, setCatBreedSearchedList] = React.useState([]);

    // state to control serached cat list per pagination page
    const [catBreedSearchedPaginatedList, setCatBreedSearchedPaginatedList] = React.useState([]);

    React.useEffect(() => {
        // Searching list of items from the cat list as per serach query
        if(!loading){
            setCatBreedSearchedList(() => (catBreedList.filter(item => {
                if(item.name.replace(/\s/g, "").trim().toLowerCase()
                    .includes(searchQuery.replace(/\s/g, "").trim().toLowerCase())){
                    return item
                }
                return null
            })));
        }

    }, [
        loading,
        catBreedList,
        catBreedList.length,
        searchQuery,
        pageCount,
        page
    ]);

    //Applying pagination if searched item list length exceeds item count per pagination page
    React.useEffect(() => {

        // Setting item count per pagination page
        const itemCount = 9;

        // Settnig total no. of pages for pagination
        setPageCount(() => Math.ceil(catBreedList.length/itemCount));

        // Setting index of the last item per pagination page
        const last_item_index = page * itemCount;

        // Setting index of the first item per pagination page
        const first_item_index = last_item_index - itemCount;

        // Setting list of total searched cat items respective to the every paination pages
        setCatBreedSearchedPaginatedList(() => catBreedSearchedList.slice(first_item_index, last_item_index));
    }, [
        catBreedList,
        catBreedList.length,
        searchQuery,
        catBreedSearchedList,
        catBreedSearchedList.length,
        pageCount,
        page
    ]);

    return (
        <React.Fragment>
            {
                networkError && <ShowError />
            }
            {
                // Loader while list still getting fetched from server
                loading
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
                !loading && catBreedSearchedList.length === 0
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
                                variant="h3"
                                component="div">
                                Sorry!! No results found 😿
                            </Typography>
                        </Container>
            }
            {
                // Rendering list accoring to the searched query
                !loading && catBreedSearchedList.length < 9
                    &&  <SearchedCatBreedsWithoutPagination
                            catBreedSearchedList={catBreedSearchedList}
                        />
            }
            {
                // Rendering list according to the searched query if list lenght exceeds length of item count per pagination page
                !loading && catBreedSearchedList.length > 9
                    && <SearchedPaginatedCatBreeds
                            page={page}
                            setPage={setPage}
                            pageCount={pageCount}
                            catBreedSearchedPaginatedList={catBreedSearchedPaginatedList}
                        />
            }
        </React.Fragment>
    )
}

export default CatBreedsWithSearchedQuery