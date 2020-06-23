import React, { Component } from 'react';
import '../../contentPage/ContentPage.styles.css';

export default class Button extends Component {
   render(props) {
      return (
         <div>
            <button
               type={this.props.type}
               className={this.props.className}
               onClick={this.props.onClick}
            >
               {this.props.label}
            </button>
         </div>
      );
   }
}
