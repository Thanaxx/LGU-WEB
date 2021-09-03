import React from 'react'
import { Link } from 'react-router-dom';
import './btn.css'

const STYLE = ['btn-primary', 'btn-sec', 'btn-blue'];

export const Button = ({children, type, onClick, buttonStyle}) => {
    const checkButtonStyle = STYLE.includes(buttonStyle) ? buttonStyle : STYLE[0];

    return(
        <Link to='/contacts'>
            <button className={`btn ${checkButtonStyle}`}
                onClick={onClick}
                type={type}
            >
                {children}
            </button>
        </Link>
    )
}