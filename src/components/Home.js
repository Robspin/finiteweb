import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
   return (
      <Fragment>
         <div className='bg-dark text-light pt-5' style={{ height: '100vh' }}>
            <div className='container'>
               <h1>FiniteWeb</h1>
               <p>Click on a page below or type in the page url.</p>
               <Link to='/yoga' className='btn btn-primary mr-3'>
                  /yoga
               </Link>
               <Link to='/bonsai' className='btn btn-primary mr-3'>
                  /bonsai
               </Link>
               <Link to='/corona' className='btn btn-primary mr-3'>
                  /corona
               </Link>
            </div>
         </div>
      </Fragment>
   );
};

export default Home;
