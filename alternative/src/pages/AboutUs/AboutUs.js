import React from 'react';
import { Footer, InfoSection } from '../../components';
import { homeObjOne, homeObjTwo  } from './Data';

function Products() {
  return (
    <>
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <Footer/>
    </>
  );
}

export default Products;
