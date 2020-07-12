import React, { useState } from 'react';
import axios from 'axios';
import './form.css';

import Button from '../button/Button';

const Form = ({ setEditMode, data }) => {
   const [text, setText] = useState(data.content);
   const [name, setName] = useState('Anon');

   const handleChangeText = e => setText(e.target.value);
   const handleChangeName = e => setName(e.target.value);

   const headers = { 'Content-Type': 'application/json' };

   const handleSubmit = e => {
      axios
         .post(
            `http://localhost:8080/api/${data.bPageID}`,
            JSON.stringify({
               bPageID: data.bPageID,
               content: text,
               author: name
            }),
            { headers: headers }
         )
         .then(() => setEditMode(false));
   };

   // console.log(data.bPageID);

   return (
      <form className='form-container'>
         <textarea
            placeholder='Please write what you know about this subject.'
            defaultValue={data.content}
            onChange={handleChangeText}
         />
         <input
            className='name-input'
            onChange={handleChangeName}
            placeholder='Name'
         />
         <div className='buttons-div'>
            <Button
               label='cancel'
               onClick={e => {
                  e.preventDefault();
                  setEditMode(false);
               }}
            />
            <Button label='submit' submit={true} onClick={handleSubmit} />
         </div>
      </form>
   );
};

export default Form;
