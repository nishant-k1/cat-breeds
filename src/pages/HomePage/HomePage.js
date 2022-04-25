import React from 'react'
import CatBreeds from '../../components/CatBreeds/CatBreeds'

const HomePage = ({searchQuery}) => {
  // Hompage components

  return (
    <React.Fragment>
      <CatBreeds searchQuery={searchQuery} />
    </React.Fragment>
  )
}

export default HomePage