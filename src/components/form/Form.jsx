import React from 'react';
import axios from 'axios';

import Button from '../button/Button';

const api = axios.create({
   baseURL: `http://localhost:8080/api/`
});

class Form extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         value: 'test',
         textValue: '',
         nameValue: ''
      };

      this.handleChangeText = this.handleChangeText.bind(this);
      this.handleChangeName = this.handleChangeName.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
   }

   handleChangeText(event) {
      this.setState({ textValue: event.target.value }, () =>
         console.log(this.state.textValue)
      );
   }

   handleChangeName(event) {
      this.setState(
         { nameValue: event.target.value }
         // console.log(this.state.nameValue)
         // console.log(this.props)
      );
   }

   handleSubmit = async event => {
      // api.post(this.props);
      event.preventDefault();
   };

   // getText = () => {
   //    console.log(this.props.data);
   //    if (this.props.data.content !== '') {
   //       this.setState({
   //          value: this.props.data.content
   //       });
   //    }
   // };

   render() {
      return (
         <form className='form-container' onSubmit={this.handleSubmit}>
            <label>What is this, a blank page?</label>
            <textarea
               placeholder='Please write what you know about this subject.'
               // value='test'
               onChange={this.handleChangeText}
            />
            <input
               className='name-input'
               onChange={this.handleChangeName}
               placeholder='Name'
            />
            <div className='button-div'>
               <Button label='Submit' />
               <Button
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
