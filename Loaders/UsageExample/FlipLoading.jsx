import React from 'react';
import FlipLoader from './FlipLoader';

const FlipLoading = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <FlipLoader />
        </div>
    );
};

export default FlipLoading;