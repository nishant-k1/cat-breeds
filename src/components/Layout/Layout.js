import * as React from 'react';
import HomePage from '../../pages/HomePage/HomePage';
import NavBar from '../NavBar/NavBar'
import CatDetails from '../../pages/CatDetails/CatDetails';
import { Routes, Route } from "react-router-dom";
import NoResultsFound from '../NoResultsFound';

const Layout = () => {
  // Setting state to control the input search query
  const [searchQuery, setSearchQuery] = React.useState("");

  // A Layout to contain pages and the navbar
  return (
    <React.Fragment>
      <NavBar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      <Routes>
        <Route path="*" element={<NoResultsFound />} />
        <Route path='/cat-breeds/*' element={<NoResultsFound />} />
        <Route path='/cat-breeds/:id/*' element={<NoResultsFound />} />
        <Route path='/cat-breeds' element={<HomePage searchQuery={searchQuery} />} />
        <Route path='/cat-breeds/:id' element={<CatDetails />} />
      </Routes>
    </React.Fragment>
  );
}

export default Layout