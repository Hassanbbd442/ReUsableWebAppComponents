import React from 'react';
import SpinnerLoader from './SpinnerLoader';

const LoadingScreen = () => {
    return (
        <div style={{ height: '100vh' }}>
            <SpinnerLoader />
        </div>
    );
};

export default LoadingScreen;