import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import NavBar from '../components/navbar/NavBar';
import exampleData from '../components/recentcontainer/exampleData';
import popularExampleData from '../components/recentcontainer/popularExampleData';

const Home = () => {
   return (
      <Fragment>
         <NavBar />
         <div className='sub-container'>
            <div className='sub-sub-container-left'>
               <h3 className='recently'>Recently Editted:</h3>
               {exampleData.map(item => (
                  <div className='recent-item'>
                     <Link
                        key={item.bPageID}
                        to={item.bPageID}
                        className='link'
                     >
                        {item.bPageID}
                     </Link>
                     <h4 className='time'>
                        {`${item.time}${item.time === 1 ? ' min ' : ' mins '}`}
                        <span>ago</span>
                     </h4>
                  </div>
               ))}
            </div>
            <div className='sub-sub-container'>
               <h3 className='recently'>Popular Pages:</h3>
               {popularExampleData.map(item => (
                  <div className='recent-item'>
                     <Link key={item.name} to={item.name} className='link'>
                        {item.name}
                     </Link>
                     <h4 className='time'>
                        {`${item.visited}x`}
                        <span> visited</span>
                     </h4>
                  </div>
               ))}
            </div>
         </div>
         {/* <Link to='/yoga' className='list-item'>
            /yoga
         </Link>
         <Link to='/bonsai' className='list-item'>
            /bonsai
         </Link>
         <Link to='/corona' className='list-item'>
            /corona
         </Link> */}
      </Fragment>
   );
};

export default Home;
