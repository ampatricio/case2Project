import React from 'react';

import HorizontalNavsCustom1 from '../components-custom/HorizontalNavsCustom1';
import StructuresCustom2 from '../components-custom/addAircraftHeader';
import StructuresCustom3 from '../components-custom/addAircraftForm';

export default function Addaircraft() {
  return (
    <React.Fragment>
      <HorizontalNavsCustom1 />

      <StructuresCustom2 />

      <StructuresCustom3 />
    </React.Fragment>
  );
}

