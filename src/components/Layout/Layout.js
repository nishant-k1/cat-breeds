import * as React from 'react';
import HomePage from '../../pages/HomePage/HomePage';
import AppBar from '../AppBar/AppBar'

const Layout = () => {
  return (
    <React.Fragment>
      <AppBar />
      <HomePage />
    </React.Fragment>
  );
}

export default Layout