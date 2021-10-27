import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { emphasize, fade, darken, lighten } from '@material-ui/core/styles/colorManipulator';

import clsx from 'clsx';

import Container from '@material-ui/core/Container';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import InputBase from '@material-ui/core/InputBase';

import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
    search: {
    position: 'relative',
    marginTop: 14,
    borderRadius: theme.shape.borderRadius,
    backgroundColor: '#28c6c6',
    '&:hover': {
      backgroundColor: fade(theme.palette.primary.dark, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    backgroundColor: '#92E1E1',
    borderRadius: theme.shape.borderRadius,
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'primary.light',
  },
  inputInput: {
    color: 'primary.light',
    marginLeft: 20,
    marginTop: 10,
    padding: theme.spacing(1, 2, 2, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '30ch',
      '&:focus': {
        width: '30ch',
      },
    },
  },
}
));

export default function Component(props) {
  const classes = useStyles();

  return (
    <><div className="Styled-my-4"></div><Container disableGutters="true">
      <Toolbar>
        <Grid container spacing={2}>
          <Grid item xs={12} md={8}>
            <Typography className="header" variant="h2" gutterBottom={true}>Wheel Assemblies:</Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Part Number/NSN..."
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }} />
            </Box>
          </Grid>
        </Grid>
      </Toolbar>
    </Container></>
  );
}