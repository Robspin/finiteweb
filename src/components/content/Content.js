import React, { Fragment, useEffect, useState } from 'react';
import './content.css';
import Button from '../button/Button';
import Author from '../author/Author';

import MarkdownIt from 'markdown-it';

const mdParser = new MarkdownIt();

const Content = ({ data, setEditMode }) => {
   const [parsed, setParsed] = useState('');

   useEffect(() => {
      if (typeof data.content === 'string') {
         setParsed(mdParser.render(data.content));
      }
   }, [data]);

   // console.log(typeof data.content === 'string');
   return (
      <Fragment>
         <div
            className='content'
            dangerouslySetInnerHTML={{ __html: parsed }}
         ></div>
         <div className='inline-div'>
            <div>
               <Button onClick={() => setEditMode(true)} label='edit' />
            </div>
            <Author data={data} />
         </div>
      </Fragment>
   );
};

export default Content;
