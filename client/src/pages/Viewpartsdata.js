import React from 'react';

import HorizontalNavsCustom1 from '../components-custom/HorizontalNavsCustom1';
import StructuresCustom2 from '../components-custom/viewPartsHeader';
import StructuresCustom3 from '../components-custom/StructuresCustom3';
import StructureDiv from '../components/__structures/StructureDiv';
import StructuresCustom4 from '../components-custom/StructuresCustom4';

export default function Viewpartsdata() {
  return (
    <React.Fragment>
      <HorizontalNavsCustom1 />

      <StructuresCustom2 />

      <StructuresCustom3 />

      <StructureDiv bucket1={[<StructuresCustom4 />]} />
    </React.Fragment>
  );
}

