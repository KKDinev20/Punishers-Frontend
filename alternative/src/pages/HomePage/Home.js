import React from 'react';
import { homeObjOne} from './Data';
import { InfoSection, Footer} from '../../components';

function Home() {
  return (
    <>
      <InfoSection {...homeObjOne} />
      <Footer/>
    </>
  );
}

export default Home;
