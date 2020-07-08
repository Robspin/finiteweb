import React from 'react';
import './form.css';

// import Button from '../button/Button';

const Form = () => {
   return (
      <form className='form-container'>
         <textarea
            placeholder='Please write what you know about this subject.'
            defaultValue=''
            onChange=''
         />
         <input className='name-input' onChange='' placeholder='Name' />
         {/* <div className='button-div'>
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
   */}
      </form>
   );
};

export default Form;
