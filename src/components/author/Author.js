import React, { Fragment } from 'react';
import './author.css';

const Author = ({ data }) => {
   return (
      <Fragment>
         {data.content === 'What is this, a blank page?' ? null : (
            <p className='author-data'>
               Last edited by: "{data.author}" at {data.tsEdited}
            </p>
         )}
      </Fragment>
   );
};

export default Author;
