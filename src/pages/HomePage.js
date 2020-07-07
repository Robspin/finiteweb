import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import NavBar from '../components/navbar/NavBar';

const Home = () => {
   return (
      <Fragment>
         <NavBar />
         <p className='subtitle'>
            Click on a page below or type in the page url.
         </p>
         <Link to='/yoga' className='list-item'>
            /yoga
         </Link>
         <Link to='/bonsai' className='list-item'>
            /bonsai
         </Link>
         <Link to='/corona' className='list-item'>
            /corona
         </Link>
      </Fragment>
   );
};

export default Home;
