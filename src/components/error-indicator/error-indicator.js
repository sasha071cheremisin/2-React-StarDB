import React from 'react';

import './error-indicator.scss';
import icon from './death-star-icon.png';

const ErrorIndicator = () => {
    return (
        <div className="error-indicator">
            <img className="error-indicator__image" src={ icon } alt="death icon"/>
            <span className="error-indicator__title">BOOM!</span>
            <span className="error-indicator__text">something went wrong</span>
            <span className="error-indicator__text">(we sent the droids for repair)</span>
        </div>
    );
}

export default ErrorIndicator;