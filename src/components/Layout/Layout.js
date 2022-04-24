import * as React from 'react';
import HomePage from '../../pages/HomePage/HomePage';
import NavBar from '../NavBar/NavBar'

const Layout = () => {
  const [searchQuery, setSearchQuery] = React.useState("");
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