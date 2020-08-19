import React from 'react';
import axios from 'axios';
import History from '../History';
import './randomButton.css';

const URL =
   process.env.NODE_ENV !== 'production'
      ? process.env.REACT_APP_DEV_URL
      : process.env.REACT_APP_PROD_URL;

const RandomButton = ({ setCurrent, searchPage }) => {
   const onClick = e => {
      axios
         .get(`${URL}api/random`)
         .then(res => {
            console.log(res.data);
            searchPage && setCurrent(res.data.bPageID.trim().toLowerCase());
            History.push('/' + res.data.bPageID.trim().toLowerCase());
         })
         .catch(err => console.log(err));
   };

   return (
      <div className='random-button-container'>
         <button
            onClick={onClick}
            className={
               searchPage ? 'random-button search-page' : 'random-button'
            }
         >
            Random Page
         </button>
      </div>
   );
};

export default RandomButton;
