import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { emphasize, fade, darken, lighten } from '@material-ui/core/styles/colorManipulator';

import clsx from 'clsx';

import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme) => ({
}
));

export default function Component(props) {
  const classes = useStyles();

  return (
<Typography className="header" align="center" variant="h1" gutterBottom={true} sx={{padding: 2}}>
  	Welcome to IBN
</Typography>
  );
}