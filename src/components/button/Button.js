import React from 'react';
import './button.css';

const Button = ({ label, onClick, submit, onKeyDown }) => {
   return (
      <button
         className={submit ? 'btn submit' : 'btn'}
         onKeyDown={onKeyDown}
         onClick={onClick}
      >
         {label}
      </button>
   );
};

export default Button;
