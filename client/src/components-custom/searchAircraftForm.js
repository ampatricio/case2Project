import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { emphasize, fade, darken, lighten } from '@material-ui/core/styles/colorManipulator';

import clsx from 'clsx';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
}
));

export default function Component(props) {
  const classes = useStyles();

  return (
    <><div className="Styled-my-6"></div><Container>
      <Container>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <form noValidate>
              <Grid container spacing={2}>
                <Grid container spacing={2}>
                  <Grid item xs={3}>
                    <Typography variant="h5" align="center">Assembly Date:</Typography>
                  </Grid>
                  <Grid item xs={4}>
                    <TextField variant="outlined" fullWidth name="startDate" id="startDate" label="Start" />
                  </Grid>
                  <Grid item xs={1}>
                    <Typography variant="h5" align="center">to</Typography>
                  </Grid>
                  <Grid item xs={4}>
                    <TextField variant="outlined" fullWidth name="endDate" id="endDate" label="End" />
                  </Grid>
                </Grid>
                <div className="Styled-my-6"></div>
                <Grid container spacing={2}>
                  <Grid item xs={3}>
                    <Typography variant="h5" align="center">Chief Designer:</Typography>
                  </Grid>
                  <Grid item xs={9}>
                    <TextField variant="outlined" fullWidth name="designer" id="designer" />
                  </Grid>
                </Grid>
                <div className="Styled-my-6"></div>
                <Grid container spacing={2}>
                  <Grid item xs={3}>
                    <Typography variant="h5" align="center">Primary Customer:</Typography>
                  </Grid>
                  <Grid item xs={9}>
                    <TextField variant="outlined" fullWidth name="customer" id="customer" />
                  </Grid>
                </Grid>
              </Grid>
              <div className="Styled-my-4"></div>
            </form>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <Typography variant="h5" align="center">Parts Supplier:</Typography>
          </Grid>
          <FormGroup>
            <Grid item xs={9}>
              <FormControlLabel control={<Checkbox name="honeywell" value="honeywell" color="primary" />} label="Honeywell" />
              <FormControlLabel control={<Checkbox name="jay" value="jay" color="primary" />} label="Em Aerospace Corporation Jay" />
              <FormControlLabel control={<Checkbox name="gore" value="gore" color="primary" />} label="Gore" />
              <FormControlLabel control={<Checkbox name="spirit" value="spirit" color="primary" />} label="Spirit Aerosystems" />
              <FormControlLabel control={<Checkbox name="chief" value="chief" color="primary" />} label="Chief Aircraft" />
            </Grid>
          </FormGroup>
        </Grid>
        <div className="Styled-my-4"></div>
        <div className="Styled-my-4"></div>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography align="center">
              <Button type="Submit" size="large" variant="contained" color="primary">
                Search for Aircraft
              </Button>
            </Typography>
          </Grid>
        </Grid>
        <div className="Styled-my-4"></div>
      </Container>
    </Container></>
  );
}