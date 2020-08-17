import React from 'react';
import axios from 'axios';
import History from '../History';
import './randomButton.css';

const RandomButton = ({ setCurrent, searchPage }) => {
   const onClick = e => {
      axios
         .get(`http://localhost:8080/api/random`)
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
