import React from 'react'
import CatBreedsWithSearchedQuery from './CatBreedsWithSearchedQuery';
import CatBreedsWithPagination from './CatBreedsWithPagination';


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