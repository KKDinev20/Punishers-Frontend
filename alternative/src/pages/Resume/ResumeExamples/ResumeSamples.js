import React from 'react';
import { homeObjOne,  homeObjThree, homeObjFour, homeObjTwo } from './Data';
import { Footer, InfoSection } from '../../../components';

function ResumeSamples() {
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

export default ResumeSamples;
