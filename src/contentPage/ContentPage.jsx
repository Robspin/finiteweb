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
         current: '',
         editMode: false,
         searchValue: ''
      };
   }

   handleChange = e => {
      this.setState({ searchValue: e.target.value });
   };

   searchPage = e => {
      if (e.key === 'Enter') {
         this.setState(
            {
               data: {},
               current: this.state.searchValue,
               editMode: false
            },
            this.getData(this.state.searchValue)
         );
      }
   };

   setEditMode = e => {
      e.preventDefault();
      if (this.state.editMode === false) {
         this.setState({
            editMode: true
         });
      } else {
         this.setState({
            editMode: false
         });
      }
      console.log(this.state.current);
      this.getData(this.state.current);
   };

   getData = current => {
      try {
         api.get(current).then(res => {
            this.setState({
               data: res.data
            });
            // console.log(res.data);
         });
      } catch (err) {
         console.log(err);
      }
   };

   componentDidMount = () => this.getData(this.state.current);

   render() {
      return (
         <div className='content-page'>
            <img
               className='background'
               src={require('../img/background.png')}
               alt=''
            />
            <div className='page-container'>
               <div>
                  <input
                     className='search'
                     onChange={this.handleChange}
                     onKeyPress={this.searchPage}
                     placeholder='Search Pages...'
                     type='text'
                  />
                  <Navbar />
               </div>
               <div className='row2'>
                  {this.state.editMode === false ? (
                     <Fragment>
                        <h1>{this.state.current}</h1>
                        <Content
                           data={this.state.data}
                           setEditMode={this.setEditMode}
                        />
                     </Fragment>
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
