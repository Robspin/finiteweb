import React, { useState } from 'react';
import axios from 'axios';
import './form.css';

import ReactMde from 'react-mde';
import MarkdownIt from 'markdown-it';
import 'react-mde/lib/styles/css/react-mde-all.css';

import Button from '../button/Button';

const mdParser = new MarkdownIt();

const URL =
   process.env.NODE_ENV !== 'production'
      ? process.env.REACT_APP_DEV_URL
      : process.env.REACT_APP_PROD_URL;

const Form = ({ setEditMode, data }) => {
   const [text, setText] = useState(data.content);
   const [name, setName] = useState('Anon');
   const [selectedTab, setSelectedTab] = React.useState('write');

   const handleChangeName = e => {
      setName(e.target.value);
   };

   const headers = { 'Content-Type': 'application/json' };

   const handleSubmit = e => {
      e.preventDefault();
      axios
         .post(
            `${URL}api/${data.bPageID}`,
            JSON.stringify({
               bPageID: data.bPageID,
               content: text,
               author: name
            }),
            { headers: headers }
         )
         .then(() => setEditMode(false));
   };

   return (
      <form className='form-container'>
         <div className='container'>
            <ReactMde
               toolbarCommands={[
                  ['header', 'bold', 'italic', 'image', 'code', 'link']
               ]}
               value={text}
               onChange={e => (e.length < 21844 ? setText(e) : null)}
               selectedTab={selectedTab}
               onTabChange={setSelectedTab}
               generateMarkdownPreview={markdown =>
                  Promise.resolve(mdParser.render(markdown))
               }
               childProps={{
                  writeButton: {
                     tabIndex: -1
                  }
               }}
            />
         </div>
         <input
            className='name-input'
            maxLength={15}
            onChange={handleChangeName}
            onKeyPress={e =>
               e.which === 13 || e.which === 32 ? e.preventDefault() : null
            }
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
