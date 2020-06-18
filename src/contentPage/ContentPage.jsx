import React, { Component } from 'react';
import './ContentPage.styles.css';

import Navbar from '../components/navbar/Navbar';
import Form from '../components/form/Form';

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
                  <Navbar />
               </div>
               <div className='row2'>{1 + 1 === 2 ? null : <Form />}</div>
            </div>
         </div>
      );
   }
}

export default ContentPage;
