import React, { useState } from 'react';
import History from '../History';
import './search.css';

const Search = () => {
   const [input, setInput] = useState('');
   //eslint-disable-next-line
   const [current, setCurrent] = useState('');

   const onSubmit = e => {
      // e.preventDefault();
      setCurrent(input.trim().toLowerCase());
      History.push('/' + input.trim().toLowerCase());
      setInput('');
      // console.log(History);
   };

   return (
      <form onSubmit={onSubmit}>
         <div className='search-container'>
            <div className='input-group'>
               <input
                  type='text'
                  maxLength={12}
                  className='form-control'
                  placeholder='Type page...'
                  value={input}
                  onChange={e => setInput(e.target.value)}
               />

               <div className='input-group-append'>
                  <button className='search-btn' type='submit'>
                     Go!
                  </button>
               </div>
            </div>
         </div>
      </form>
   );
};

export default Search;
