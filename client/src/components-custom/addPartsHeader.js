import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { emphasize, fade, darken, lighten } from '@material-ui/core/styles/colorManipulator';

import clsx from 'clsx';

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme) => ({
}
));

export default function Component(props) {
  const classes = useStyles();

  return (
    <><div className="Styled-my-4"></div><Container disableGutters="true">
      <Typography variant="h2" fontWeight="bold">Add Wheel Assembly Parts:</Typography>
    </Container></>
  );
}