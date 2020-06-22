import React, { Fragment } from 'react';
import '../../contentPage/ContentPage.styles.css';

import Button from '../button/Button';

class Content extends React.Component {
   // initContent() {
   //    console.log(this.props);
   // }

   // componentDidUpdate = () => this.initContent();

   render() {
      return (
         <Fragment>
            <div className='content'>
               <p>{this.props.data.content}</p>
            </div>
            <div className='edit-info'>
               <Button label='Edit Page' onClick={this.props.setEditMode} />
               <span>
                  Last edited by:{' '}
                  {this.props.data.author === ''
                     ? 'anon'
                     : this.props.data.author}{' '}
                  at {this.props.data.tsEdited}
               </span>
            </div>
         </Fragment>
      );
   }
}

export default Content;
