import React from 'react';
import { InfoSection, Footer } from '../../components';
import { homeObjOne, homeObjThree } from './Data';

function CV() {
  return (
    <>
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjThree} />
      <Footer/>
    </>
  );
}

export default CV;
