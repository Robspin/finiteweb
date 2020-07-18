import React, { Fragment, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import NavBar from '../components/navbar/NavBar';
import popularExampleData from '../components/recentcontainer/popularExampleData';
import timeConverter from '../components/timeconverter/timeConverter';

const Home = () => {
   const [recent, setRecent] = useState([]);

   const fetchData = () => {
      axios
         .get(
            `http://localhost:8080/api/recent
         `
         )
         .then(res => {
            setRecent(res.data);
            // console.log(res.data);
         })
         .catch(err => console.log(err));
   };

   useEffect(() => {
      fetchData();
      setInterval(() => {
         setRecent([]);
         fetchData();
      }, 60000);
   }, []);

   return (
      <Fragment>
         <NavBar />
         <div className='sub-container'>
            <div className='sub-sub-container-left'>
               <h3 className='recently'>Recently Edited:</h3>
               {recent.map(item => (
                  <div key={item.bPageID} className='recent-item'>
                     <Link to={item.bPageID} className='link'>
                        {item.bPageID}
                     </Link>
                     <h4 className='time'>
                        {timeConverter(item.tsEdited)}
                        <span>ago</span>
                     </h4>
                  </div>
               ))}
            </div>
            <div className='sub-sub-container'>
               <h3 className='recently'>Popular Pages:</h3>
               {popularExampleData.map(item => (
                  <div key={item.name} className='recent-item'>
                     <Link to={item.name} className='link'>
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
