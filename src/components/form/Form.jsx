import React from 'react';
import axios from 'axios';

import Button from '../button/Button';

const api = axios.create({
   baseURL: `http://localhost:8080/api/`
});

const headers = { 'Content-Type': 'application/json' };

class Form extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         // value: 'test',
         textValue: '',
         nameValue: ''
      };

      this.handleChangeText = this.handleChangeText.bind(this);
      this.handleChangeName = this.handleChangeName.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
   }

   handleChangeText(event) {
      this.setState({ textValue: event.target.value });
   }

   handleChangeName(event) {
      this.setState({ nameValue: event.target.value });
   }

   handleSubmit = async e => {
      // e.stopPropagation();
      // e.nativeEvent.stopImmediatePropagation();
      api.post(
         this.props.props.current,
         JSON.stringify({
            author: this.state.nameValue === '' ? 'anon' : this.state.nameValue,
            bPageID: this.props.current,
            content: this.state.textValue
         }),
         { headers: headers }
      );
      setTimeout(() => {
         console.log();
         this.props.getData();
         this.props.setEditMode();
      }, 200);
   };

   render() {
      return (
         <form className='form-container'>
            {this.props.props.data.content ? null : (
               <label>What is this, a blank page?</label>
            )}
            <textarea
               placeholder='Please write what you know about this subject.'
               defaultValue={this.props.props.data.content}
               onChange={this.handleChangeText}
            />
            <input
               className='name-input'
               onChange={this.handleChangeName}
               placeholder='Name'
            />
            <div className='button-div'>
               <Button
                  type='button'
                  label='Submit'
                  onClick={this.handleSubmit}
               />
               <Button
                  type='button'
                  className='cancel-button'
                  label='Cancel'
                  onClick={this.props.setEditMode}
               />
            </div>
         </form>
      );
   }
}

export default Form;
