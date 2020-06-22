import React, { Component } from 'react';
import '../../contentPage/ContentPage.styles.css';

export default class Button extends Component {
   render(props) {
      return (
         <div>
            <button
               className={this.props.className}
               onClick={this.props.onClick}
            >
               {this.props.label}
            </button>
         </div>
      );
   }
}
