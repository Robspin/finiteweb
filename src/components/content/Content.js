import React, { Fragment, useState } from 'react';
// import '../../contentPage/ContentPage.styles.css';

// import Button from '../button/Button';

const Content = () => {
   const [data, setdata] = useState({});
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
