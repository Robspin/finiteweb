import React, { Fragment, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import NavBar from '../components/navbar/NavBar';
import timeConverter from '../components/timeconverter/timeConverter';
import RandomButton from '../components/randomButton/RandomButton';

const URL =
   process.env.NODE_ENV !== 'production'
      ? process.env.REACT_APP_DEV_URL
      : process.env.REACT_APP_PROD_URL;

const Home = () => {
   const [recent, setRecent] = useState([]);
   const [popular, setPopular] = useState([]);

   const fetchData = () => {
      axios
         .get(
            `${URL}api/list/recent
         `
         )
         .then(res => {
            setRecent(res.data);
            // console.log(res.data);
         })
         .catch(err => console.log(err));
      axios
         .get(
            `${URL}api/list/popular
         `
         )
         .then(res => {
            setPopular(res.data);
            // console.log(res.data);
         })
         .catch(err => console.log(err));
   };

   useEffect(() => {
      fetchData();
      const intervalId = setInterval(() => {
         setRecent([]);
         fetchData();
      }, 60000);
      return () => clearInterval(intervalId);
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
                        {item.bPageID.length > 14
                           ? `${item.bPageID.slice(0, 14)}...`
                           : item.bPageID}
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
               {popular.map(item => (
                  <div key={item.bPageID} className='recent-item'>
                     <Link to={item.bPageID} className='link'>
                        {item.bPageID.length > 14
                           ? `${item.bPageID.slice(0, 14)}...`
                           : item.bPageID}
                     </Link>
                     <h4 className='time'>
                        {`${item.editCount}x`}
                        <span> edited</span>
                     </h4>
                  </div>
               ))}
            </div>
         </div>
         <RandomButton />
      </Fragment>
   );
};

export default Home;
