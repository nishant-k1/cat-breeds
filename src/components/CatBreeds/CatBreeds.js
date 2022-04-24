import React from 'react'
import CatBreedsWithSearchedQuery from '../SearchedCatBreeds/CatBreedsWithSearchedQuery';
import CatBreedsWithPagination from '../PaginatedCatBreeds/CatBreedsWithPagination';

const CatBreeds = ({searchQuery}) => {

  return (
    <React.Fragment>
      {
        // component to conditionally render cat list if there is a search qurery
        `${searchQuery.length}` > 0 && <CatBreedsWithSearchedQuery searchQuery={searchQuery} />
      }
      {
        // component to conditionally render cat list if there is NO search qurery
        (searchQuery === "") && <CatBreedsWithPagination />
      }
    </React.Fragment>
  )
}

export default CatBreeds