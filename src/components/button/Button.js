import React from 'react';
import './button.css';

const Button = ({ label, onClick, submit }) => {
   return (
      <button className={submit ? 'btn submit' : 'btn'} onClick={onClick}>
         {label}
      </button>
   );
};

export default Button;
