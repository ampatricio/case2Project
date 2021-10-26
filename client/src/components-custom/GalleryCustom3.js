import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { emphasize, fade, darken, lighten } from '@material-ui/core/styles/colorManipulator';

import clsx from 'clsx';

import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import image1 from '../images/1.png'
import image2 from '../images/2.png'
import image3 from '../images/3.png'
import image4 from '../images/4.png'
import image5 from '../images/5.png'
import image6 from '../images/6.png'
import UpdateAircraftDialog from '../components/dialogs/findAircraftDialog'
import UpdatePartDialog from '../components/dialogs/findPartDialog'

const useStyles = makeStyles((theme) => ({
  media: {
    height: '256px',
  },
}
));

export default function Component(props) {
  const classes = useStyles();

  const [isAircraftModalOpen, setIsAircraftModalOpen] = React.useState(false);
  const [isPartModalOpen, setIsPartModalOpen] = React.useState(false);


  return (
<Box py={4}>
  <Container maxWidth="lg">
    <Grid container spacing={10}>
      <Grid item xs={12} md={4}>
        <Card>
          <CardActionArea href="/viewaircraft">
            <CardMedia className={classes.media} image={image1} />
          </CardActionArea>
        </Card>
      </Grid>
      <Grid item xs={12} md={4}>
        <Card>
          <CardActionArea href="/addaircraft">
            <CardMedia className={classes.media} image={image2} />
          </CardActionArea>
        </Card>
      </Grid>
      <Grid item xs={12} md={4}>
        <Card>
          <CardActionArea onClick={() => setIsAircraftModalOpen(true)}>
            <CardMedia className={classes.media} image={image3} />
          </CardActionArea>
        </Card>
      </Grid>
      <Grid item xs={12} md={4}>
        <Card>
          <CardActionArea href="/viewpartsdata">
            <CardMedia className={classes.media} image={image4} />
          </CardActionArea>
        </Card>
      </Grid>
      <Grid item xs={12} md={4}>
        <Card>
          <CardActionArea href="/addparts">
            <CardMedia className={classes.media} image={image5} />
          </CardActionArea>
        </Card>
      </Grid>
      <Grid item xs={12} md={4}>
        <Card>
          <CardActionArea onClick={() => setIsPartModalOpen(true)}>
            <CardMedia className={classes.media} image={image6} />
          </CardActionArea>
        </Card>
      </Grid>
    </Grid>
  </Container>

  <UpdateAircraftDialog
        isOpen={isAircraftModalOpen}
        onClose={() => setIsAircraftModalOpen(false)}
        />
    <UpdatePartDialog
        isOpen={isPartModalOpen}
        onClose={() => setIsPartModalOpen(false)}
        />
</Box>
  );
}