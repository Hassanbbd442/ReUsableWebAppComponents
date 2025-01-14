import React from 'react';
import './FlipLoader.css';

const FlipLoader = () => {
    return (
        <div className="flip-loader">
            <div className="flip-box">
                <div className="flip-box-inner">
                    <div className="flip-box-front"></div>
                    <div className="flip-box-back"></div>
                </div>
            </div>
        </div>
    );
};

export default FlipLoader;