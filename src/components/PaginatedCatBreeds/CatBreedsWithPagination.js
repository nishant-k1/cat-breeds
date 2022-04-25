import * as React from 'react';
import { useFetch } from '../../customHooks/useFetch';
import  Loader from '../Loader/Loader';
import NoResultsFound from '../NoResultsFound/index.js';
import PaginatedCatBreeds from './PaginatedCatBreeds';
import { Container } from '@mui/material';
import ShowError from '../ShowError/ShowError';

const CatBreedsWithPagination = () => {
    const url = `https://api.thecatapi.com/v1/breeds`;

    // setting default page for pagination
    const [page, setPage] = React.useState(1);

    // fetched cat list from server
    const {loading, error:networkError, list:catBreedList} = useFetch(url, page);

    // setting state to control the total no pages in pagination
    const [pageCount, setPageCount] = React.useState(null);

    // state to control cat list per pagination page
    const [catBreedListPaginated, setCatBreedListPaginated] = React.useState([]);

    // Applying pagination and item count per pagination page
    React.useEffect(() => {
        if(!loading){
             // Setting item count per pagination page
            const itemCount = 9;

             // Setting total no. of pages for pagination
            setPageCount(() => Math.ceil(catBreedList.length/itemCount));

            // Setting index of the last item per pagination page
            const last_item_index = page * itemCount;

            // Setting index of the first item per pagination page
            const first_item_index = last_item_index - itemCount;

            // Setting list of total cat items respective to the every paination pages
            setCatBreedListPaginated(() => catBreedList.slice(first_item_index, last_item_index));
        }
    }, [
        loading,
        catBreedList,
        page
    ]);

    return (
        <React.Fragment>
            {
                networkError && <ShowError />
            }
            {
                // rendering loader if list is still being fetched from server
                loading && <Loader />

            }
            {
                !loading && catBreedListPaginated.length === 0
                    &&  <NoResultsFound />
            }
            {
                // rendering below UI, if list is already fetched from server
                !loading && catBreedListPaginated.length > 0
                    &&  <PaginatedCatBreeds
                            page={page}
                            setPage={setPage}
                            pageCount={pageCount}
                            catBreedListPaginated={catBreedListPaginated}
                        />
            }
        </React.Fragment>
    )
}

export default CatBreedsWithPagination