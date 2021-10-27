import React, { useState, useEffect } from 'react';

import Box from '@material-ui/core/Box'
import HorizontalNavsCustom1 from '../components-custom/HorizontalNavsCustom1';
import StructuresCustom2 from '../components-custom/viewPartsHeader';
import StructuresCustom3 from '../components-custom/StructuresCustom3';
import StructureDiv from '../components/__structures/StructureDiv';
import StructuresCustom4 from '../components-custom/StructuresCustom4';
import PartsDataChart from '../components/charts/partsDataChart';
import { getParts } from '../actions/users';
import '@fontsource/roboto/300.css';

import { useDispatch } from 'react-redux';


export default function Viewpartsdata() {


  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getParts());
  }, [currentId, dispatch]);

  return (
    <React.Fragment>
      <HorizontalNavsCustom1 />

      <Box sx={{ pt: 5 }}>
        <StructuresCustom2 />
      </Box>

      <Box sx={{ pb: 5 }}>
      <StructuresCustom3 />
      </Box>

      <Box sx={{ pb: 5 }}>
      <PartsDataChart />
      </Box>

      <StructureDiv bucket1={[<StructuresCustom4 />]} />
    </React.Fragment>
  );
}

