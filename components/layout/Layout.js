import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { AppBar, Nav } from './sublayout';

const useStyles = makeStyles(theme => ({
  root: {
    margin: 'auto',
    height: '100vh',
  },
}));

function Layout({ children }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar />
      <Nav />
      {children}
    </div>
  );
}

export default Layout;
