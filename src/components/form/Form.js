import React, { useState } from 'react';
import axios from 'axios';
import './form.css';

import ReactMde from 'react-mde';
import MarkdownIt from 'markdown-it';
import 'react-mde/lib/styles/css/react-mde-all.css';

import Button from '../button/Button';

const mdParser = new MarkdownIt();

const Form = ({ setEditMode, data }) => {
   const [text, setText] = useState(data.content);
   const [name, setName] = useState('Anon');
   // const [value, setValue] = React.useState('');
   const [selectedTab, setSelectedTab] = React.useState('write');

   // const handleChangeText = e => setText(e.target.value);
   const handleChangeName = e => {
      setName(e.target.value);
   };

   const headers = { 'Content-Type': 'application/json' };

   const handleSubmit = e => {
      e.preventDefault();
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

   // function handleEditorChange({ html, text }) {
   //    console.log('handleEditorChange', html, text);
   // }

   // console.log(data.bPageID);

   return (
      <form className='form-container'>
         {/* <textarea
            placeholder='Please write what you know about this subject.'
            defaultValue={data.content}
            onChange={handleChangeText}
         />
          */}
         <div className='container'>
            <ReactMde
               toolbarCommands={[
                  ['header', 'bold', 'italic', 'quote', 'code', 'link']
               ]}
               value={text}
               onChange={setText}
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
            maxLength={12}
            onChange={handleChangeName}
            onKeyPress={e =>
               e.which === 13 || (e.which === 32 && e.preventDefault())
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
