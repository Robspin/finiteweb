import React, { Fragment } from 'react';
import './content.css';
import Button from '../button/Button';
import Author from '../author/Author';

const Content = ({ data, setEditMode }) => {
   return (
      <Fragment>
         <div className='content'>
            <p>{data.content}</p>
         </div>
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
