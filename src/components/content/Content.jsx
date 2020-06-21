import React, { Fragment } from 'react';
import '../../contentPage/ContentPage.styles.css';

import Button from '../button/Button';

const Content = props => {
   const page = props.props[0];
   return (
      <Fragment>
         <h1>{page.page}</h1>
         <div className='content'>
            <p>{page.text}</p>
         </div>
         <div className='edit-info'>
            <Button label='Edit Page' />
            <span>
               Last edited by: {page.author === '' ? 'anon' : page.author} at{' '}
               {page.time}
            </span>
         </div>
      </Fragment>
   );
};

export default Content;
