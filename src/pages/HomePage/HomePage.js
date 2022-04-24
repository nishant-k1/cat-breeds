import React from 'react'
import CatBreeds from '../../components/CatBreeds/CatBreeds'

const HomePage = ({searchQuery}) => {
  return (
    <CatBreeds searchQuery={searchQuery} />
  )
}

export default HomePage