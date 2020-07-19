import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

import Search from '../search/Search';

const NavBar = ({ onSubmit }) => {
   return (
      <div className='nav-container'>
         <div>
            <Link to='/' className='link'>
               <h1 className='logo'>
                  FiniteWeb.com <span className='dash'>/</span>
               </h1>
            </Link>
         </div>
         <Search onSubmit={onSubmit} />
      </div>
   );
};

export default NavBar;
