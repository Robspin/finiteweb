import React, { Fragment } from 'react';
import './content.css';

// import Button from '../button/Button';

const Content = ({ data }) => {
   console.log(data);

   return (
      <Fragment>
         <div className='content'>
            <p>{data.content}</p>
         </div>
         <div className='edit-info'>
            {/* <Button label='Edit Page' onClick={this.props.setEditMode} />
               <span>
                  Last edited by:{' '}
                  {this.props.data.author === ''
                     ? 'anon'
                     : this.props.data.author}{' '}
                  at {this.props.data.tsEdited}
               </span> */}
         </div>
      </Fragment>
   );
};

export default Content;
