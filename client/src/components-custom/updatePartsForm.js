import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { emphasize, fade, darken, lighten } from '@material-ui/core/styles/colorManipulator';

import clsx from 'clsx';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
  myTextbox: {
    border: 5,
  }
}
));

export default function Component(props) {
  const classes = useStyles();

  return (
    <><div className="Styled-my-8"></div><Container>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <form noValidate>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField className="myTextbox" variant="outlined" required fullWidth name="partNumber" id="partNumber" label="Part Number" />
              </Grid>
              <Grid item xs={12}>
                <TextField variant="outlined" required fullWidth name="nsn" id="nsn" label="NSN" />
              </Grid>
              <Grid item xs={12}>
                <TextField variant="outlined" required fullWidth name="nomenclature" id="nomenclature" label="Nomenclature" />
              </Grid>
              <Grid item xs={12}>
                <TextField variant="outlined" required fullWidth name="qty" id="qty" label="QTY in Stock" />
              </Grid>
              <Grid item xs={12}>
                <TextField variant="outlined" required fullWidth name="price" id="price" label="Price" />
              </Grid>
              <Grid item xs={12}>
                <TextField variant="outlined" required fullWidth name="supplier" id="supplier" label="Supplier" />
              </Grid>
            </Grid>
            <div className="Styled-my-4"></div>
          </form>
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField variant="outlined" multiline rows="21" fullWidth name="desc" id="desc" label="Description" />
        </Grid>
      </Grid>
      <div className="Styled-my-4"></div>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Typography align="center">
            <Button type="cancel" size="large" variant="contained" color="primary">
              Cancel
            </Button>
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography align="center">
            <Button type="submit" size="large" variant="contained" color="primary">
              Update
            </Button>
          </Typography>
        </Grid>
      </Grid>
      <div className="Styled-my-4"></div>


    </Container></>
  );
}