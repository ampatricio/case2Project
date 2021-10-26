import React from 'react';
import { Grid, CircularProgress } from '@material-ui/core'
import Container from '@material-ui/core/Container';
import { useSelector } from 'react-redux';
//import DataRow from '../components/charts/aircraftDataRow'

import HorizontalNavsCustom1 from '../components-custom/HorizontalNavsCustom1';
import StructuresCustom2 from '../components-custom/viewAircraftHeader';
import ElementsCustom3 from '../components-custom/ElementsCustom3';

export default function Viewaircraft() {
  return (

    <React.Fragment>

      <HorizontalNavsCustom1 />

      <StructuresCustom2 />

      <Container>

      </Container>

      <ElementsCustom3 />
    </React.Fragment>
  );
}

