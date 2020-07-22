import React, { Fragment, useEffect, useState } from 'react';
import './content.css';
import Button from '../button/Button';
import Author from '../author/Author';
import {
   convertUnlockTime,
   showUnlockTime
} from '../timeconverter/timeConverter';

import MarkdownIt from 'markdown-it';

const mdParser = new MarkdownIt();

const Content = ({ data, setEditMode }) => {
   const [parsed, setParsed] = useState('');
   const [editTime, setEditTime] = useState(null);
   const [warning, setWarning] = useState(false);

   useEffect(() => {
      if (typeof data.content === 'string') {
         setParsed(mdParser.render(data.content));
      }
      setEditTime(showUnlockTime(data.tsEditUnlock));
      const intervalId = setInterval(() => {
         setEditTime(showUnlockTime(data.tsEditUnlock));
      }, 60000);
      return () => clearInterval(intervalId);
   }, [data]);

   // console.log(typeof data.content === 'string');
   return (
      <Fragment>
         <div
            className='content'
            dangerouslySetInnerHTML={{ __html: parsed }}
         ></div>
         <div className='inline-div'>
            <div className='inline-div-middle'>
               <Button
                  onClick={() =>
                     editTime ? setWarning(true) : setEditMode(true)
                  }
                  label='edit'
               />
               <p className={warning ? 'edit-time show' : 'edit-time'}>
                  {editTime}
               </p>
            </div>
            <Author data={data} />
         </div>
      </Fragment>
   );
};

export default Content;
