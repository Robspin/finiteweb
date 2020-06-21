import React, { Component } from 'react';
import '../../contentPage/ContentPage.styles.css';

export default class Button extends Component {
   render(props) {
      return (
         <div>
            <button>{this.props.label}</button>
         </div>
      );
   }
}
