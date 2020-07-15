import React, { Fragment } from 'react';
import './author.css';

import { timeConverter2 } from '../timeconverter/timeConverter';

const Author = ({ data }) => {
   return (
      <Fragment>
         {data.content === 'What is this, a blank page?' ? null : (
            <p className='author-data'>
               Last edited by: "{data.author}" {timeConverter2(data.tsEdited)}
               ago.
            </p>
         )}
      </Fragment>
   );
};

export default Author;
