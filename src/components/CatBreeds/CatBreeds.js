import React from 'react'
import CatBreedsWithSearchedQuery from './CatBreedsWithSearchedQuery';
import CatBreedsWithPagination from './CatBreedsWithPagination';

const CatBreeds = ({searchQuery}) => {
  return (
    <React.Fragment>
      {
        `${searchQuery.length}` > 0 && <CatBreedsWithSearchedQuery searchQuery={searchQuery} />
      }
      {
        (searchQuery === "") && <CatBreedsWithPagination />
      }
    </React.Fragment>
  )
}

export default CatBreeds