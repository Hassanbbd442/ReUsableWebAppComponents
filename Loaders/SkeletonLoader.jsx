import React from 'react';
import './SkeletonLoader.css';

const SkeletonLoader = ({ width, height, borderRadius }) => {
    return (
        <div
            className="skeleton-loader"
            style={{
                width: width || '100%',
                height: height || '20px',
                borderRadius: borderRadius || '4px',
            }}
        ></div>
    );
};

export default SkeletonLoader;