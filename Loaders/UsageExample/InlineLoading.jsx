import React from 'react';
import PulseLoader from './PulseLoader';

const InlineLoading = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <PulseLoader />
        </div>
    );
};

export default InlineLoading;