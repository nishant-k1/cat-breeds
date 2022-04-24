import * as React from 'react';
import HomePage from '../../pages/HomePage/HomePage';
import NavBar from '../NavBar/NavBar'

const Layout = () => {
  // Setting state to contro the input search query
  const [searchQuery, setSearchQuery] = React.useState("");

  // A Layout to to contain pages and the navbar
  return (
    <React.Fragment>
      <NavBar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      <HomePage searchQuery={searchQuery} />
    </React.Fragment>
  );
}

export default Layout