import React from 'react';

import Button from '../button/Button';

class Form extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         value: ''
      };

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
   }

   handleChange(event) {
      this.setState({ value: event.target.value }, () =>
         console.log(this.state.value)
      );
   }

   handleSubmit(event) {
      alert('An essay was submitted: ' + this.state.value);
      event.preventDefault();
   }

   render() {
      return (
         <form className='form-container' onSubmit={this.handleSubmit}>
            <label>What is this, a blank page?</label>
            <textarea
               placeholder='Please write what you know about this subject.'
               value={this.state.value}
               onChange={this.handleChange}
            />
            <input className='name-input' placeholder='Name' />
            <Button label='Submit' />
         </form>
      );
   }
}

export default Form;
