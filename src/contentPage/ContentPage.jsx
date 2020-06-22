import React, { Component, Fragment } from 'react';
import './ContentPage.styles.css';
import axios from 'axios';

import Navbar from '../components/navbar/Navbar';
import Form from '../components/form/Form';
import Content from '../components/content/Content';

const api = axios.create({
   baseURL: `http://localhost:8080/api/`
});

class ContentPage extends Component {
   constructor(props) {
      super(props);
      this.state = {
         data: {},
         current: 'bonsai',
         editMode: false
      };
   }

   setEditMode = () => {
      if (this.state.editMode === false) {
         this.setState({
            editMode: true
         });
      } else {
         this.setState({
            editMode: false
         });
      }
   };

   getData = () => {
      api.get(this.state.current).then(res => {
         this.setState({
            data: res.data
         });
         console.log(res.data);
      });
   };

   componentDidMount = () => this.getData();

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
                  {this.state.editMode === false ? (
                     <Content
                        data={this.state.data}
                        setEditMode={this.setEditMode}
                     />
                  ) : (
                     <Fragment>
                        <h1>{this.state.current}</h1>
                        <Form
                           props={this.state}
                           setEditMode={this.setEditMode}
                        />
                     </Fragment>
                  )}
               </div>
            </div>
         </div>
      );
   }
}

export default ContentPage;
