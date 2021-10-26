import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { emphasize, fade, darken, lighten } from '@material-ui/core/styles/colorManipulator';
import { useState } from 'react';
import { Redirect } from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Link from '@material-ui/core/Link';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Button from '@material-ui/core/Button';
import logo from '../images/logo.png'
//import '@fontsource/roboto/300.css';


const useStyles = makeStyles((theme) => ({
  linkBrand: {
    flexGrow: 1,
  },
  linkBrandSmall: {
    display: 'none',
    flexGrow: 1,
    [theme.breakpoints.down('xs')]: {
      display: 'inline-block',
    }
  },
  tabs: {
    flexGrow: 5,
    marginLeft: theme.spacing(1),
    [theme.breakpoints.down('md')]: {
      order: 12,
      width: '100%',
      marginLeft: theme.spacing(0),
    },
  },
 
  secondaryButton: {
    marginRight: theme.spacing(2),
  },
}
));

export default function Component(props) {
  const [loggedIn, setLoggedIn] = useState(true)

  const classes = useStyles();

  const handleLogout = (event) => {
    setLoggedIn(false)
};

  return (
<AppBar position="static" color="white">
  <Toolbar>
    <Link href="/control" variant="h5" color="inherit" underline="none" className={classes.linkBrand}>
      <img src={logo} alt="" width="90" />
    </Link>
    <Tabs value={0} className={classes.tabs}>
      <Tab href="#" component={Link} label="Aircraft" color="inherit" className={classes.tab} position="left"/>
      <Tab href="#" component={Link} label="Parts" color="inherit" className={classes.tab} />
    </Tabs>
    <Button variant="contained" color="primary" onClick={() => handleLogout()}>Logout</Button>
  </Toolbar>
  { loggedIn ? <div></div> : <Redirect to="/" /> }
</AppBar>
  );
}