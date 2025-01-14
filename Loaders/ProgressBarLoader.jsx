import React from 'react';
import './ProgressBarLoader.css';

const ProgressBarLoader = ({ progress }) => {
    return (
        <div className="progress-bar-container">
            <div className="progress-bar" style={{ width: `${progress}%` }}></div>
        </div>
    );
};

export default ProgressBarLoader;