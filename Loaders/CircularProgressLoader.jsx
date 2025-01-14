import React from 'react';
import './CircularProgressLoader.css';

const CircularProgressLoader = () => {
    return (
        <div className="circular-progress-loader">
            <svg className="progress-circle" viewBox="25 25 50 50">
                <circle className="progress-path" cx="50" cy="50" r="20" />
            </svg>
        </div>
    );
};

export default CircularProgressLoader;