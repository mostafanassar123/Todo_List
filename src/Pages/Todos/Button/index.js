import React from 'react';
import "./index.css"

const Button = ({ title, className, ...props }) => (
  <button id="todobtn" className={className} {...props}>{title}</button>
);

export default Button;