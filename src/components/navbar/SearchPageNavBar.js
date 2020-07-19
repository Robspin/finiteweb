import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import History from '../History';

const SearchPageNavBar = ({ setEditMode, setCurrent }) => {
   const [input, setInput] = useState('');

   const onSubmit = e => {
      e.preventDefault();
      setCurrent(input.trim().toLowerCase());
      History.push('/' + input.trim().toLowerCase());
      setInput('');
      setEditMode(false);
   };

   return (
      <div className='nav-container'>
         <Link to='/' className='link'>
            <h1 className='logo'>
               FiniteWeb.com <span className='dash'>/</span>
            </h1>
         </Link>

         <form onSubmit={onSubmit}>
            <div className='search-container'>
               <div className='input-group'>
                  <input
                     type='text'
                     className='form-control'
                     placeholder='Type page...'
                     value={input}
                     maxLength={64}
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
      </div>
   );
};

export default SearchPageNavBar;
