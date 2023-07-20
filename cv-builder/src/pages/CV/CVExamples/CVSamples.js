import React from 'react';
import { homeObjOne,  homeObjThree, homeObjFour, homeObjTwo } from './Data';
import { Footer, InfoSection } from '../../../components';

function CVSamples() {
  return (
    <>
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <InfoSection {...homeObjThree} />
      <InfoSection {...homeObjFour} />
      <Footer/>
    </>
  );
}

export default CVSamples;
