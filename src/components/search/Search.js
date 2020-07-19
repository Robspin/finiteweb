import React, { useState } from 'react';
import History from '../History';
import './search.css';

const Search = () => {
   const [input, setInput] = useState('');

   const onSubmit = e => {
      History.push('/' + input.trim().toLowerCase().replace(/ /g, ''));
      setInput('');
   };

   return (
      <form onSubmit={onSubmit}>
         <div className='search-container'>
            <div className='input-group'>
               <input
                  type='text'
                  maxLength={64}
                  className='form-control'
                  placeholder='Type page...'
                  value={input}
                  onChange={e => setInput(e.target.value)}
                  onKeyPress={e => e.which === 32 && e.preventDefault()}
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
