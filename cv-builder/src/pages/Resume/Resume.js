import React from 'react';
import { homeObjOne, homeObjThree } from './Data';
import { InfoSection, Footer} from '../../components';

function Resume() {
  return (
    <>
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjThree} />
      <Footer/>
    </>
  );
}

export default Resume;
