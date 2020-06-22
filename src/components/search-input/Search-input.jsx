import React, { Fragment } from 'react';

class SearchInput extends React.Component {
   render(props) {
      return (
         <Fragment>
            <input
               className='search'
               onChange={this.props.onChange()}
               onKeyPress={e => {
                  if (e.key === 'Enter') this.props.searchPage();
               }}
               placeholder='Search Pages...'
               type='text'
            />
         </Fragment>
      );
   }
}

export default SearchInput;
