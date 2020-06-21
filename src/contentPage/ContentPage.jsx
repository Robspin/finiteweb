import React, { Component, Fragment } from 'react';
import './ContentPage.styles.css';

import data from '../components/navbar/exampledata';

import Navbar from '../components/navbar/Navbar';
import Form from '../components/form/Form';
import Content from '../components/content/Content';

class ContentPage extends Component {
   constructor(props) {
      super(props);
      this.state = {
         data: data,
         current: '/coronas',
         currentData: {},
         editMode: false
      };
   }

   componentWillMount() {
      let result = this.state.data.filter(obj => {
         return obj.page === this.state.current;
      });
      this.setState({ currentData: result });
      console.log(result);
   }

   render() {
      return (
         <div className='content-page'>
            <img
               className='background'
               src={require('../img/background.png')}
               alt=''
            />
            <div className='page-container'>
               <Navbar />
               <div className='row2'>
                  {this.state.currentData.length === 1 ? (
                     <Content props={this.state.currentData} />
                  ) : (
                     <Fragment>
                        <h1>{this.state.current}</h1>
                        <Form props={this.state.currentData} />
                     </Fragment>
                  )}
               </div>
            </div>
         </div>
      );
   }
}

export default ContentPage;
