import React from 'react';
import GlowLoader from './GlowLoader';

const GlowLoading = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <GlowLoader />
        </div>
    );
};

export default GlowLoading;