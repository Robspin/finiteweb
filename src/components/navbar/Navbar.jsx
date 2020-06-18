import React, { Component } from 'react';

import SearchInput from '../search-input/Search-input';
import Item from '../item/Item';

import data from './exampledata';

export default class Navbar extends Component {
   constructor(props) {
      super(props);
      this.state = {
         data: data
      };
   }

   render() {
      const { data } = this.state;

      return (
         <div>
            <SearchInput />
            <h3>Recently edited</h3>
            <hr />
            {data.map(item => (
               <Item key={item.page} item={item} />
            ))}
         </div>
      );
   }
}
