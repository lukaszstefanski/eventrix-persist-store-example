import React from 'react'
import './Button.css';

const Button = ({ onClick, text }) => (
    <button className='button' onClick={onClick}>{text}</button>
)

export default Button;
