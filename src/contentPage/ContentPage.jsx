import React, { Component } from 'react';
import './ContentPage.styles.css';

import Form from '../components/textarea/TextArea';
import SearchInput from '../components/search-input/Search-input';

class ContentPage extends Component {
   render() {
      return (
         <div className='content-page'>
            <img
               className='background'
               src={require('../img/background.png')}
               alt=''
            />
            <div className='page-container'>
               <div className='row1'>
                  <SearchInput />
               </div>
               <div className='row2'>{1 + 1 === 2 ? null : <Form />}</div>
            </div>
         </div>
      );
   }
}

export default ContentPage;
